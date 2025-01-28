#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# -------------------------------------------------------------------- configuration:

# use empty string to not change directory, and use the current working directory
export working_directory="$DIR"

export github_remote_name='origin'
export github_user_name='warren-bank'
export gitlab_user_name='warren-bank'
export codeberg_user_name='warren-bank'

export delete_repos_if_already_exist=0
export delete_repos_after_push=1
