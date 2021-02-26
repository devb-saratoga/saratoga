FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

COPY . ./
RUN npm install
# RUN npm ci --only=production
EXPOSE 7000
CMD [ "node", "server_local.js" ]