FROM nginx:alpine

# Копируем файлы сайта
COPY public/ /usr/share/nginx/html/

# Копируем наш конфиг nginx
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Копируем сертификаты
COPY certs/ /etc/nginx/certs/

# Открываем порты
EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]