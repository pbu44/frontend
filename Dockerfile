FROM node:16.3.0-alpine
WORKDIR '/app'

ENV NODE_VERSION=16.3.0
COPY package.json .
RUN npm cache clean --force
COPY . . 
CMD ["npm","start"]
