FROM node:20-alpine
WORKDIR /app

COPY ./package*.json ./
RUN yarn install
RUN yarn add -D esbuild@latest
RUN npm install -g npm@9.8.1
COPY . .
EXPOSE 8000
CMD [ "yarn", "dev" ]
