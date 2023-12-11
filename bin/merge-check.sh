#!/bin/bash

# git merge origin/main --no-ff --no-commit

git fetch
git merge-tree $(git merge-base prod main) main prod

exit 0

