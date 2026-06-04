#!/usr/bin/env bash
set -e

PORT=${PORT:-10000}

cat > /etc/nginx/http.d/default.conf <<EOF
server {
    listen ${PORT};
    server_name _;

    root /var/www/html/public;
    index index.php index.html;

    client_max_body_size 25M;

    location / {
        try_files \$uri \$uri/ /index.php?\$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME \$document_root\$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
EOF

php artisan config:clear
php artisan route:clear
php artisan view:clear

php artisan package:discover --ansi || true
php artisan storage:link || true
php artisan migrate --force || true

php-fpm -D
nginx -g "daemon off;"