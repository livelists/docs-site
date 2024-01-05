export const DOCKER_COMPOSE_LISTING = `version: "3.6"
services:
  mongo-livelists:
    image: mongo:6.0.3
    restart: always
    entrypoint: [ "/usr/bin/mongod", "--bind_ip_all" ]
    volumes:
      - /etc/mongodbdata/:/data/db
    ports:
      - "57217:27017"

  livelists-server:
    image: nikrainev/livelists-server:0.3.0
    restart: always
    command: livelists-server
    volumes:
      - /home/livelists/config.yaml:/pkg/config/config.yaml
    ports:
      - "17771:7771"
      - "17772:7772"`;