FROM node:18.10-alpine as build
WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN yarn install
COPY . .
RUN ng build

FROM nginx as runtime
COPY --from=build /app/dist/client /usr/share/nginx/html