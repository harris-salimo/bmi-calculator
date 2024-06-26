FROM node:lts-alpine AS build

WORKDIR /app

COPY package.json .

RUN yarn install --no-lockfile

COPY . .

CMD [ "yarn", "build" ]


FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
