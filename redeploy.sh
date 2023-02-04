#!/bin/bash

git pull origin master

pm2 stop all

# Build api
cd api
npm i
npm run build

# Build discord bot
cd ../discord
npm i
npm run build

pm2 start all

systemctl restart nginx