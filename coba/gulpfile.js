/*
* @Author: agusdiyansyah
* @Date:   2015-12-09 13:17:56
* @Last Modified by:   agusdiyansyah
* @Last Modified time: 2015-12-09 14:40:50
*/

var gulp       = require('gulp');
var minify_css = require('gulp-minify-css');
var rename     = require('gulp-rename');

gulp.task('css', function () {
	return gulp.src('dist/*.css')
		.pipe(rename({ suffix: '.min' }))
		.pipe(minify_css())
		.pipe(gulp.dest('dist/min'))
	;
});

gulp.task('default', function () {
	gulp.watch('dist/*.css', ['css']);
});
