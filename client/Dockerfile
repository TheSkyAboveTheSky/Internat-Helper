FROM node:18.10-alpine as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN yarn install

RUN yarn build
    
FROM nginx
COPY ./dist/client /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 4200