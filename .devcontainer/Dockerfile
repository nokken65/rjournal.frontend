FROM node:17-alpine3.14 AS build
WORKDIR /app
EXPOSE 3000
RUN apk -U upgrade \
  && apk add --no-cache \
      git \
  && yarn add global eslint prettier
