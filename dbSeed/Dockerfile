FROM alpine:latest
RUN apk add --no-cache nodejs npm
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "seed.js"]