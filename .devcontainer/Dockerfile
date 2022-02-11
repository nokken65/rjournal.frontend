FROM node:17-alpine3.14 AS build
WORKDIR /app
RUN apk -U upgrade \
  && apk add --no-cache \
    git
RUN yarn add global eslint prettier
