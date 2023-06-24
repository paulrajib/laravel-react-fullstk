<p align="center">
    <a href="" style="width: 120px; max-width: 250px;" class="svg-pan-zoom_viewport">
        <img src="https://adherence.dev/assets/images/other-logos/laravel-logo.svg" max-width="300" width="300" height="170" style="max-width: 250px;">
    </a>
    <a href="" style="width: 120px; max-width: 250px;" >
        <img src="https://adherence.dev/assets/images/logo.png" max-width="250" width="150" alt="React Icons">
    </a>
    <a href="" style="width: 120px; max-width: 250px;" >
        <img src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg" max-width="250" width="150" alt="React Icons">
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
        <img src="https://img.shields.io/packagist/l/laravel/framework" alt="License">
    </a>
</p>

## Install and run

In root directory 

create .env file and put these lines bellow

```
DB_CONNECTION=sqlite
DB_DATABASE=/var/www/html/laravel/laravel-react-fullstk/database/database.sqlite

```
// this dir name should be correct

------------------------------

```
composer install
sudo apt install php-sqlite3 // for sqlite driver
php artisan key:generate
php artisan migrate
php artisan db:seed // If there is any seeds
chmod 777 -R  storage // If necessary
php artisan config:cache
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


---------------------------------------

In react dir
```
npm install
npm run dev -- --host
```
It will provide
  ➜  Local:   http://localhost:5000/
  ➜  Network: http://192.168.31.51:5000/
  
