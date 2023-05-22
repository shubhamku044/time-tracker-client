FROM node:18
WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn global add concurrently
RUN yarn install
COPY . .
EXPOSE 5500
CMD [ "yarn", "dev" ]
