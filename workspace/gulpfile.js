/*
* @Author: agusdiyansyah
* @Date:   2015-12-29 23:02:54
* @Last Modified by:   agusdiyansyah
* @Last Modified time: 2015-12-31 16:12:47
*/

// node package
var fs     = require('fs');
var path   = require('path');
var es     = require('event-stream');

// gulp
var run        = require('gulp');
var watch      = require('gulp-watch');
var plumber    = require('gulp-plumber');
// connect
var connect    = require('gulp-connect');
// sass
var sass       = require('gulp-sass');
var prefix     = require('gulp-autoprefixer');
var cssbeauty  = require('gulp-cssbeautify');
var csslint    = require('gulp-csslint');
var mincss     = require('gulp-minify-css');
var rename     = require('gulp-rename');
var concat     = require('gulp-concat');
// php
var php        = require('gulp-php2html');
var htmlbeauty = require('gulp-html-prettify');
// var html5      = require('gulp-html5-lint');
// js
var minjs      = require('gulp-uglify');

var dirPath = './src/pages';
var folders = getFolders(dirPath);

function getFolders(dir){
    return fs
		.readdirSync(dir)
	    .filter(function(file){
        	return fs.statSync(path.join(dir, file)).isDirectory();
    	})
	;
}

run.task('connect', function () {
	connect.server({
		root       : './',
		livereload : true
		// open       : true
	});
});

run.task('sass', function  () {

	var tasks   = folders.map(function(folder) {
        return run
            .src(path.join(dirPath, folder, '/*.sass'))
            .pipe(plumber())
            .pipe(concat(folder + ".sass"))
            .pipe(sass.sync().on('error', sass.logError))
            .pipe(prefix(
                [
                    'Android 2.3',
                    'Android >= 4',
                    'Chrome >= 20',
                    'Firefox >= 3',
                    'Explorer >= 8',
                    'iOS >= 6',
                    'Opera >= 12',
                    'Safari >= 6'
                ]
            ))
            .pipe(cssbeauty())
            .pipe(rename(folder + ".css"))
            .pipe(run.dest('assets/styleshets'))
            .pipe(mincss())
            .pipe(rename({suffix: '.min'}))
            .pipe(plumber.stop())
            .pipe(run.dest('assets/styleshets'))
            .pipe(connect.reload())
	});
	// return es.concat.apply(null, tasks);
});

run.task('php', function () {
    var tasks   = folders.map(function(folder) {
        return run
            .src(path.join(dirPath, folder, '/index.php'))
            .pipe(plumber())
            .pipe(php())
            .pipe(htmlbeauty())
            // .pipe(html5())
            .pipe(rename(folder + ".html"))
            .pipe(plumber.stop())
            .pipe(run.dest('./'))
            .pipe(connect.reload())
    });
});

run.task('default', ['connect'], function () {
    watch(['./src/pages/**/*.sass', './src/templates/*.sass'], function () {
        run.start('sass')
    });
    watch(['./src/pages/**/*.php','./src/templates/**/*.php'], function () {
        run.start('php')
    });
});
