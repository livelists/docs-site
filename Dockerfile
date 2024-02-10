FROM node:18.13.0-alpine as builder

RUN apk add --no-cache git
RUN rm -rf /var/cache/apk/*
RUN git --version

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install --force

COPY . /app
RUN npm run build
RUN npm run build-storybook

EXPOSE 3000

CMD ["npm", "run", "start"]

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/storybook-static /usr/share/nginx/html

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]