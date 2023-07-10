# Dockerfile backend
FROM node:18.16

WORKDIR /usr/src/app

ARG DB_HOST=${DB_HOST}
ENV DB_HOST=${DB_HOST}
ARG DB_USER=${DB_USER}
ENV DB_USER=${DB_USER}
ARG DB_PASSWORD=${DB_PASSWORD}
ENV DB_PASSWORD=${DB_PASSWORD}
ARG DB_NAME=${DB_NAME}
ENV DB_NAME=${DB_NAME}

COPY . .

RUN npm install -g pnpm
RUN pnpm install --shamefully-flatten

RUN pnpm install

CMD [ "pnpm", "start" ]