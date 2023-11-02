FROM node:20-alpine
WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn global add concurrently typescript
RUN yarn install
COPY . .
EXPOSE 5500
CMD [ "yarn", "dev" ]
