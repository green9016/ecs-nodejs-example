FROM node:12-alpine

WORKDIR /ecs-app

COPY package*.json ./
COPY controller controller
COPY server.js server.js

RUN npm install

EXPOSE 5000

ENTRYPOINT ["npm", "start"]