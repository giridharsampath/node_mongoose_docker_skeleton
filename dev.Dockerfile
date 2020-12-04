FROM node:12

WORKDIR /opt/app

ADD package*.json ./

RUN npm install

ADD . ./

CMD npm run dev
