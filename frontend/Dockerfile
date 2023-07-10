# Dockerfile frontend
# build environment
FROM node:18.16 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ARG VITE_BACKEND_URL=${VITE_BACKEND_URL}
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}
COPY . /usr/src/app

RUN npm install -g pnpm
RUN pnpm install --shamefully-flatten

RUN pnpm install
RUN pnpm run build 


# production environment
FROM nginx:1.25
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]