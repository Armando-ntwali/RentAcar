FROM php:8.3-fpm-alpine

WORKDIR /var/www/html

RUN apk add --no-cache \
    nginx \
    bash \
    curl \
    git \
    unzip \
    libpq-dev \
    nodejs \
    npm \
    oniguruma-dev \
    libzip-dev \
    zip \
    icu-dev

RUN docker-php-ext-install \
    pdo \
    pdo_mysql \
    pdo_pgsql \
    mbstring \
    zip \
    intl \
    bcmath

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

COPY . .

RUN composer install --no-dev --optimize-autoloader --no-interaction --no-scripts
RUN if [ -f package.json ]; then npm install && npm run build; fi

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

COPY render-start.sh /usr/local/bin/render-start.sh
RUN chmod +x /usr/local/bin/render-start.sh

EXPOSE 10000

CMD ["/usr/local/bin/render-start.sh"]