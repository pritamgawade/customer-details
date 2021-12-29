FROM node:16-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json /app
RUN npm i
COPY . /app

CMD ["npm", "start"]

