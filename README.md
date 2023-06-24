<p align="center">
    <a href="" target="_blank">
        <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400">
    </a>
    <a href="">
        <img src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg" width="120" alt="React Icons">
    </a>
</p>

<p align="center">
    <a href="https://travis-ci.org/laravel/framework">
        <img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status">
    </a>
    <a href="https://packagist.org/packages/laravel/framework">
        <img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads">
    </a>
    <a href="https://packagist.org/packages/laravel/framework">
        <img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version">
    </a>
    <a href="https://packagist.org/packages/laravel/framework">
        <img src="https://img.shields.io/packagist/l/laravel/framework" alt="License">
    </a>
</p>

## Install and run

In root directory 

create .env file and put these lines bellow
DB_CONNECTION=sqlite
DB_DATABASE=/var/www/html/laravel/laravel-react-fullstk/database/database.sqlite
// this dir name should be correct

```
composer install
php artisan config:cache
php artisan key:generate
php artisan migrate
php artisan db:seed // If there is any seeds
chmod 777 -R  storage // If necessary
php artisan serve --host 192.168.31.51 // Say 192.168.31.51 is the_local_ip of my device

```
It will provide http://192.168.31.51:8000/, which will not live auto-reloadable.
Then
```
npm run watch
```
It will provide 
Local: http://localhost:3000
External: http://192.168.31.51:3000
which will be live auto-reloadable.

If not, then put your local_ip(192.168.31.51 in my case) in webpack.mix.js

In react dir
```
npm install
npm run dev -- --host
```
It will provide
  ➜  Local:   http://localhost:5000/
  ➜  Network: http://192.168.31.51:5000/
  
