#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# -------------------------------------------------------------------- configuration:

source "${DIR}/configuration.sh"

# -------------------------------------------------------------------- select working directory:

if [ -n "$working_directory" -a -d "$working_directory" ];then
  cd "$working_directory"
fi

# -------------------------------------------------------------------- list github repos:
# https://docs.github.com/en/rest/repos
# https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user
api_url="https://api.github.com/users/${github_user_name}/repos?type=owner&sort=full_name&direction=asc&per_page=100&page="

repo_data='repo_data.json'
repo_blacklist='repo_blacklist.js'
repo_names='repo_names.txt'

if [ -f "$repo_data" -a $reuse_json_repo_data_if_already_exist -ne 1 ];then
  rm -f "$repo_data"
fi
if [ ! -f "$repo_data" ];then
  echo '[' >"$repo_data"
  for i in {1..30000}
  do
    data=$(curl --insecure --silent "${api_url}${i}")
    if [[ "$data" =~ "{" ]];then
      if [ $i -gt 1 ];then
        echo ',' >>"$repo_data"
      fi
      echo "$data" >>"$repo_data"
    else
      break
    fi
  done
  echo ']' >>"$repo_data"
fi

if [ -f "$repo_names" -a $reuse_text_repo_names_if_already_exists -ne 1 ];then
  rm -f "$repo_names"
fi
if [ ! -f "$repo_names" ];then
  node -e "const repo_data = require('./${repo_data}'); const repo_blacklist = require('./${repo_blacklist}'); const repo_names = []; for (let repo_group of repo_data) { for (let repo of repo_group) { if (!repo.disabled && !repo_blacklist.includes(repo.name)) { repo_names.push(repo.name); } } } console.log(repo_names.join('\n'));" >"$repo_names"
fi

# -------------------------------------------------------------------- clone github repo:

function clone_github_repo() {
  repo_name="$1"

  git clone "git@github.com:${github_user_name}/${repo_name}.git"
}

# -------------------------------------------------------------------- pull github repo:

function pull_github_repo() {
  git pull -f        "$github_remote_name"
  git pull -f --tags "$github_remote_name"
}

# -------------------------------------------------------------------- fetch github lfs:

function fetch_github_lfs() {
  git lfs fetch --all "$github_remote_name"
}

# -------------------------------------------------------------------- track all branches on github:
# https://stackoverflow.com/q/379081
# https://stackoverflow.com/a/379842
# https://stackoverflow.com/a/12142066

function track_all_branches_on_github() {
  default_branch=`git rev-parse --abbrev-ref HEAD`

  for i in `git branch -a | grep "remotes/${github_remote_name}" | grep -v HEAD | grep -v "$default_branch"`; do git branch --track ${i#remotes/$github_remote_name/} $i; done
}

# -------------------------------------------------------------------- add remotes to mirror repo:

function add_remotes() {
  repo_name="$1"

  if [ $push_to_gitlab -eq 1 -a -n "$gitlab_user_name" ];then
    git remote add gitlab "git@gitlab.com:${gitlab_user_name}/${repo_name}.git"
  fi

  if [ $push_to_codeberg -eq 1 -a -n "$codeberg_user_name" ];then
    git remote add codeberg "git@codeberg.org:${codeberg_user_name}/${repo_name}.git"
  fi
}

# -------------------------------------------------------------------- push to remote:

function push_to_remote() {
  remote_name="$1"

  git push -f --all  "$remote_name"
  git lfs push --all "$remote_name"
  git push -f --tags "$remote_name"
}

# -------------------------------------------------------------------- iterate github repos:

while read repo_name; do
  if [ -n "$repo_name" ];then
    if [ -d "$repo_name" -a $delete_repos_if_already_exist -eq 1 ];then
      rm -rf "$repo_name"
    fi
    if [ -d "$repo_name" ];then
      cd "$repo_name"
      pull_github_repo
    else
      clone_github_repo "$repo_name"
      cd "$repo_name"
    fi
    fetch_github_lfs
    track_all_branches_on_github
    add_remotes "$repo_name"
    if [ $push_to_gitlab -eq 1 ];then
      push_to_remote "gitlab"
    fi
    if [ $push_to_codeberg -eq 1 ];then
      push_to_remote "codeberg"
    fi
    cd ..
    if [ $delete_repos_after_push -eq 1 ];then
      rm -rf "$repo_name"
    fi
  fi
done <"$repo_names"
