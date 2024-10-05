FROM shinsenter/laravel:php8.3

RUN apt-get update && apt-get install wget

RUN phpaddmod imagick

EXPOSE 80 443
