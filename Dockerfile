FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY dist /usr/share/nginx/html
COPY package.json /usr/share/nginx/html/package.json
COPY yarn.lock /usr/share/nginx/html/yarn.lock

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]