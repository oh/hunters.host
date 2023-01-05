FROM node

WORKDIR /app
COPY ./build .
#RUN curl https://install.meteor.com/ | sh
#RUN npm install --production

#ADD bundle/hunters.host.tar.gz bundle
#CMD ["ls"]


#RUN ./start.sh
CMD ["./start.sh", "&&", "ls"]
#CMD ["meteor", "bundle", "build/hunters.host.tar.gz", "--allow-superuser"]
#RUN cd bundle/programs/server
#RUN npm install
#RUN MONGO_URL=mongodb://localhost:27017/huntershost ROOT_URL=http://hunters.host PORT=3000
#
#EXPOSE 3000
#CMD [ "node", "build/bundle/programs/server/main.js" ]