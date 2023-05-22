FROM node:18
WORKDIR /app

COPY ./package*.json ./
RUN yarn install
RUN yarn add -D esbuild@latest
RUN npm install -g npm@9.6.7
COPY . .
EXPOSE 8000
CMD [ "yarn", "dev" ]
