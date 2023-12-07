#!/bin/bash

git checkout main
git fetch --all
git reset --hard github/main

echo "done"
