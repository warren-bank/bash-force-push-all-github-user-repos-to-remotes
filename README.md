### Usage

1. update: [configuration](./bin/configuration.sh)
2. update: [repo blacklist](./bin/repo_blacklist.js)
3. run: [bash script](./bin/force_push_all_github_user_repos_to_remotes.sh)
   - would strongly suggest that stdout and stderr be piped to a log file:
     ```bash
       cd bin
       ./force_push_all_github_user_repos_to_remotes.sh >log.txt 2>&1
     ```

### What it does..

1. downloads data about all public github repos belonging to the specified user
2. filters this repo data to ignore:
   - disabled repos
   - repos in the blacklist
3. maps the filtered repo data to a list of repo names
   - saved to a text file containing the name of one repo per line
4. for each repo name in this text file:
   1. if configured to do so:<br>delete the local repo directory
   2. either clone the repo from [github](https://github.com/), or pull for updates
   3. track all github branches
   4. add remotes:
      - [gitlab](https://gitlab.com/)
      - [codeberg](https://codeberg.org/)
   5. force push to both remotes
   6. if configured to do so:<br>delete the local repo directory

#### Legal

* copyright: [Warren Bank](https://github.com/warren-bank)
* license: [GPL-2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt)
