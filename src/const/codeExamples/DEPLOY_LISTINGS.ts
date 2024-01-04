export const DOCKER_COMPOSE_LISTING = `version: "3.6"
services: 
web-client:
    build:
      context: ../../
      dockerfile: Dockerfile
    restart: always
    ports:
      - "13000:3000"

  mongo-livelists:
    image: mongo:6.0.3
    restart: always
    entrypoint: [ "/usr/bin/mongod", "--bind_ip_all", "--auth" ]
    volumes:
      - /etc/mongodbdata/:/data/db
    expose:
      - 27017
    ports:
      - "57217:27017"

  livelists-server:
    image: nikrainev/livelists-server:0.2.1
    restart: always
    command: livelists-server
    volumes:
      - /home/livelists/config.yaml:/pkg/config/config.yaml
    ports:
      - "17771:7771"
      - "17772:7772"

  backend:
    image: nikrainev/docs-site-backend:latest
    restart: always
    ports:
      - "13010:3002"`;