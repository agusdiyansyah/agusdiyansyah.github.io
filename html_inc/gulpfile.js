var run     = require('gulp');
var inc     = require('gulp-include');
var min_css = require('gulp-minify-css');
var sass    = require('gulp-sass');
var rename  = require('gulp-rename');
var connect = require('gulp-connect');
var change  = require('gulp-changed');

run.task('include', function() {
	run
		.src('dev/*.html')
		.pipe(inc())
		.on('error', console.log)
		.pipe(run.dest('pro'))
		.pipe(connect.reload())
	;
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
		root       : 'pro',
		livereload : true,
		open       : true
	});
});

run.task('default', ['connect'], function() {
	run.watch('dev/*.html', ['include']);
	run.watch('dev/**/*.html', ['include']);
	run.watch('dev/dist/sass_partials/*.sass', ['sass']);
	run.watch('dev/dist/sass/*.sass', ['sass']);
});
