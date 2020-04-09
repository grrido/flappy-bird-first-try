FROM node:10-alpine

ARG server_port

ENV SERVER_PORT=$server_port

WORKDIR /var/www

RUN npm config set save-exact true

RUN npm install -g http-server

CMD http-server public/ -p ${SERVER_PORT}