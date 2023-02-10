#!/bin/bash

git pull origin master

pm2 stop bot

# Build api
cd discord
npm i
npm run build

pm2 start bot
