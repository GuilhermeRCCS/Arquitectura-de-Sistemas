FROM nginx:alpine3.17

WORKDIR /api

  COPY . /usr/share/nginx/html
  COPY default.conf /etc/nginx/conf.d/default.conf

CMD ["sh"]

EXPOSE 8000