var run     = require('gulp');
var inc     = require('gulp-include');
var mincss  = require('gulp-minify-css');
var minjs   = require('gulp-uglify');
var sass    = require('gulp-sass');
var rename  = require('gulp-rename');
var connect = require('gulp-connect');
var tmpeng  = require('gulp-nunjucks-render');

run.task('tmpeng', function () {
    tmpeng.nunjucks.configure(['src/template']);

    return run
    .src('src/page/*.html')
    .pipe(tmpeng())
    .pipe(run.dest('./'))
    .pipe(connect.reload())
});

run.task('sass', function () {
	run
		.src('dev/dist/sass/*.sass')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(rename({ suffix: '.min' }))
		.pipe(min_css())
		.pipe(run.dest('pro/dist/css'))
		.pipe(connect.reload())
	;
});

run.task('connect', function () {
	connect.server({
		root       : '/',
		livereload : true,
		open       : true
	});
});

run.task('default', ['connect'], function() {
    run.watch('src/**/*.html', ['tmpeng']);
	run.watch('src/**/**/*.html', ['tmpeng']);
});
