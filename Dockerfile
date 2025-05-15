FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    unzip curl git zip \
    libzip-dev libpng-dev libjpeg-dev libfreetype6-dev \
    libonig-dev libxml2-dev libssl-dev \
    libcurl4-openssl-dev pkg-config gnupg ca-certificates

# Configure GD extension
RUN docker-php-ext-configure gd --with-freetype --with-jpeg

# Install PHP extensions
RUN docker-php-ext-install \
    pdo pdo_mysql mysqli mbstring curl gd zip fileinfo bcmath

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer

# Clean up
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /var/www
