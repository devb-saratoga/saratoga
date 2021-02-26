# FROM node:10-alpine
FROM node:14

# RUN mkdir -p /sara/node_modules && chown -R node:node /sara
# WORKDIR /sara
WORKDIR /usr/src/app

COPY package*.json ./

COPY . ./
RUN npm install
# RUN npm ci --only=production
# COPY --chown=node:node . .
EXPOSE 7000
CMD [ "node", "server_local.js" ]