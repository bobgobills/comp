#!/bin/bash

file="src/components/BuildCounter.tsx"
count=`cat $file | grep "const count =" | sed -e "s/const count = //" | sed -e "s/;//"`
newCount=$((count+1))

sed -i -e "s/const count = .*$/const count = ${newCount};/" $file

git add .
git commit -m "fix(bump): $newCount"
clear
git show
git status

