FROM node:12 AS build-env

WORKDIR /app

COPY package*.json ./

RUN npm install --no-optional -only=prod

COPY . /app

FROM gcr.io/distroless/nodejs:12
WORKDIR /
COPY --from=build-env /app .
EXPOSE 8443
CMD ["src/server.js"]