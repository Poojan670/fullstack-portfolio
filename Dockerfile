FROM node:alpine

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
COPY .env.development /app

RUN yarn install

COPY . /app

EXPOSE 3000

CMD ["yarn", "start:development"]