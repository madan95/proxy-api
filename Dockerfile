FROM node:12
WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

CMD npm i -g yarn && yarn run build && yarn run start

EXPOSE 8080

