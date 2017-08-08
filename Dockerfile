FROM debian

RUN apt-get update && \
    apt-get install -y nginx-light curl git git-core build-essential

RUN curl -sL https://deb.nodesource.com/setup_5.x | bash -
RUN apt-get install -y nodejs

RUN npm install -g gulp bower

RUN mkdir /app
ADD . /app
WORKDIR /app
RUN npm install && bower install --allow-root --config.interactive=false && gulp build

CMD ["nginx", "-c", "/app/.nginx.conf"]
