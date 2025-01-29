#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# -------------------------------------------------------------------- configuration:

# use empty string to not change directory, and use the current working directory
export working_directory="$DIR"

export github_remote_name='origin'
export github_user_name='warren-bank'
export gitlab_user_name='warren-bank'
export codeberg_user_name='warren-bank'

export reuse_json_repo_data_if_already_exist=0
export reuse_text_repo_names_if_already_exists=0

export push_to_gitlab=1
export push_to_codeberg=1

export delete_repos_if_already_exist=0
export delete_repos_after_push=1
