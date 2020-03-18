FROM mhart/alpine-node
MAINTAINER merkerxu <merkerxu@163.com>

# install npm packages
RUN npm install -g json-server \
    && npm install -g faker \
    && npm install -g lodash

# set environmental property for node modules
ENV NODE_PATH /usr/lib/node_modules/

WORKDIR /data
VOLUME /data

EXPOSE 80
ADD run.sh /run.sh
ENTRYPOINT ["sh", "/run.sh"]
CMD []
