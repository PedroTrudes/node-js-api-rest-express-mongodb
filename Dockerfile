FROM node:latest

WORKDIR /node-js-api-rest-express-mongodb

COPY . .

RUN rm -rf node_modules

RUN npm i

CMD ["node", "server.js"]
 
EXPOSE 5002