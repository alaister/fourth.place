FROM node:18-alpine as builder

WORKDIR /app

COPY package.json package-lock.json tsconfig.json ./

RUN npm install

COPY ./tasks ./tasks

RUN npm run build

FROM graphile/worker:0-16

COPY package.json package-lock.json graphile.config.js ./

RUN npm install --production

COPY --from=builder /app/build /worker/tasks
