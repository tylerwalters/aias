var gulp = require('gulp');

gulp.task('lint', function () {
	var jshint = require('gulp-jshint');

	return gulp.src('src/aias.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('min', function () {
	var uglify = require('gulp-uglify'),
			concat = require('gulp-concat');

	return gulp.src('src/aias.js')
		.pipe(uglify())
		.concat('aias.min.js')
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['lint', 'min']);