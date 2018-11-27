FROM node:10
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm install -g serve

COPY . .
EXPOSE 5000

RUN npm run build

CMD ["serve", "-s", "build"]
