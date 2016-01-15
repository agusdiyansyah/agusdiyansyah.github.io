#### [Cara Penggunaan](#cara-penggunaan)

# Tentang repositori information
Project ini adalah sebuah halaman kerja yang digunakan untuk mendesain web, halaman kerja adalah sebuah opsi dari saya, anda bebas mengkreasikan halaman kerja yang sesuai dengan cara kerja anda masing masing :D

# Fungsionalitas
Jika anda sudah terbiasa dalam mendesain web dengan menggunakan php, maka halaman kerja ini dapat menjadi sebuah opsi bagi anda dalam mendesain web, halaman kerja ini digunakan untuk merender file `php` menjadi `html`.

Tidak hanya itu, halaman kerja ini juga dapat meng compile file `sass` menjadi file `css`

# Teknologi yang digunakan
Untuk memenuhi kebutuhan fungsionalitas, saya menggunakan beberapa teknologi yang digunakan untuk membantu saya dalam mendesain web
1. [Sass](#sass)
* [Gulp](#gulp)

# Sass
Untuk mendesain sebuah website tentu kita menggunakan `css` untuk styling website agar lebih menarik, halaman kerja ini saya gunakan untuk meng compile file `sass` didalam project menjadi `css` yang akan di load pada page

Dengan menggunakan `sass` maka `css` yang dihasilkan akan lebih rapi dan mudah dimengerti, dan `css` yang dihasilkan pun akan lebih terstruktur

# [Gulp](https://www.npmjs.com/package/gulp)
`Gulp` adalah sebuah utiliti yang digunakan untuk memproses file secara otomatis, untuk menggunakan `gulp` pastikan `node` telah terinstall pada komputer anda, jika `node` telah terinstall anda dapat menginstall `gulp cli` dengan mengetikkan perintah berikut di command line atau terminal
> npm install gulp -g

Pada styling web `gulp` saya digunakan untuk
1. compile `sass` ke `css`
* Merapikan css
* Meminify css
* Merapikan css
* Autoprefixer
    * Android >= 2.3
    * Chrome >= 20
    * Firefox >= 3
    * Explorer >= 8
    * iOS >= 6
    * Opera >= 12
    * Safari >= 6

 > **gulp plugins :**<br />
gulp-sass, gulp-autoprefixer, gulp-cssbeautify, gulp-csslint, gulp-minify-css, gulp-rename, gulp-concat

Untuk mendesain halaman web `gulp` saya gunakan untuk
1. Render `php` ke `html`
* Merapikan `html` hasil render
> **gulp plugins :** <br>
gulp-php2html, gulp-html-prettify


#### Gulp plugins
Untuk memproses file pada halaman kerja ini anda perlu menginstall secara manual beberapa plugin dari `gulp`
1. [gulp-watch](https://www.npmjs.com/package/gulp-watch)

    Digunakan untuk membaca file yang dibuat, dirubah, dan dihapus dari project
    > npm install --save-dev gulp-watch

* gulp-plumber

    Menanganin error pada plugin `gulp` yang digunakan
    > install --save-dev gulp-plumber

* gulp-connect

    Plugin `gulp` yang digunakan untuk menjalankan webserver dan livereload
    > install --save-dev gulp-connect

* gulp-sass

    Plugin ini digunakan untuk meng compile file `sass` ke `css`
    > install --save-dev gulp-sass

* gulp-autoprefixer

    Digunakan untuk menambahkan prefix pada `css` agar `css` dapat berjalan di berbagai platform
    > install --save-dev gulp-autoprefixer

* gulp-cssbeautify

    Plugin ini digunakan untuk merapikan susunan (tabulasi) pada `css` hasil compile dasi file `sass`
    > install --save-dev gulp-cssbeautify

* gulp-minify-css

    Plugin `gulp` yang digunakan untuk meminify `css`
    > install --save-dev gulp-minify-css

* gulp-rename

    Digunakan untuk merename file
    > install --save-dev gulp-rename

* gulp-concat

    Digunakan untuk menggabungkan file
    > install --save-dev gulp-concat

* gulp-php2html

    Digunakan untuk render `php` ke `html`
    > install --save-dev gulp-php2html

* gulp-html-prettify

    Digunakan untuk merapikan isi file `html` hasil render
    > install --save-dev gulp-html-prettify

* gulp-uglify (belum ditambahkan pada gulp task)

    Digunakan untuk meminify isi file javascript
    > install --save-dev gulp-uglify

# Cara Penggunaan
1. Struktur Directori
