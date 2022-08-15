ARG node_version=14.17.6
ARG npm_version=7.21.1

#NPM Build
FROM node:${node_version} as npm-builder

ARG build_env
ARG npm_version

RUN mkdir -p /app/build
WORKDIR /app/build
COPY package*.json ./
RUN npm install npm@${npm_version} -g \
    && npm install \
    && npm audit fix
COPY . .
RUN npm run build
EXPOSE 3000

CMD ["node", "dist/main.js"]
