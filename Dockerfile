FROM node:14.21.2-buster

ADD ./build/hunters.host.tar.gz .

WORKDIR /bundle/programs/server

RUN apt-get update
RUN apt-get install -y g++ build-essential
RUN npm update
RUN npm install -y

CMD ["node", "../../main.js"]