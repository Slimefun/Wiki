#!/bin/bash

echo "Deleting .git folder..."
rm -rf .git

cd pages
git init
git add *
git commit -m "GitHub Action Deployment"
git remote add origin https://github.com/TheBusyBiscuit/test-repository
git push origin master --force