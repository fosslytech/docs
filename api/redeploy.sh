#!/bin/bash

git fetch origin master
git pull origin master

pm2 stop index

cd api
npm i
npm run build

pm2 start index

systemctl restart nginx