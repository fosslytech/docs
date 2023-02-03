#!/bin/bash

git fetch origin master
git pull origin master

pm2 stop index
pm2 stop bot

npm i
npm run build

pm2 start index
pm2 start bot

systemctl restart nginx