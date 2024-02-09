FROM node:18-alpine

WORKDIR /node-js-api-rest-express-mongodb

COPY . .

RUN rm -rf node_modules

RUN npm i

CMD ["node", "start"]

EXPOSE 5002