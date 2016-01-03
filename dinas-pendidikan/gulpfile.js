/*
* @Author: agusdiyansyah
* @Date:   2015-12-29 23:02:54
* @Last Modified by:   agusdiyansyah
* @Last Modified time: 2015-12-31 16:12:47
*/

var run        = require('gulp');
var php        = require('gulp-php2html');
var htmlbeauty = require('gulp-html-prettify');
var connect    = require('gulp-connect');
var sass       = require('gulp-sass');
var mincss     = require('gulp-minify-css');
var cssbeauty  = require('gulp-cssbeautify');
var csslint    = require('gulp-csslint');
var prefix     = require('gulp-autoprefixer');
var minjs      = require('gulp-uglify');
var rename     = require('gulp-rename');

run.task('connect', function () {
	connect.server({
		root       : './',
		livereload : true,
		open       : true
	});
});

run.task('sass', function  () {
	return run
		.src('src/dist/sass/*.sass')
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
		.pipe(csslint())
		.pipe(csslint.reporter())
		.pipe(run.dest('assets/styleshets'))
		.pipe(mincss())
		.pipe(rename({suffix: '.min'}))
		.pipe(run.dest('assets/styleshets'))
		.pipe(connect.reload())
	;
});

run.task('php', function () {
    run
        .src('./src/pages/*.php')
        .pipe(php())
        .pipe(htmlbeauty())
        .pipe(run.dest('./'))
        .pipe(connect.reload())
    ;
});

run.task('default', ['connect'], function () {
    run.watch('./src/**/*.php', ['php']);
    run.watch('./src/**/**/*.php', ['php']);
	run.watch('./src/dist/sass/*.sass', ['sass']);
    run.watch('./src/dist/sass/dependencies/*.sass', ['sass']);
});
