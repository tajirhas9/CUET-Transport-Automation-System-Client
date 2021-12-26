#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build:prod
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:tajirhas9/CUET-Transport-Automation-System-Client.git master:gh-pages
cd -