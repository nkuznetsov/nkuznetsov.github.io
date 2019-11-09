// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(cb) {
	gulp
		.src('src/assets/css/*.scss')
		.pipe(sass())
		.pipe(
			gulp.dest(function(f) {
				return f.base;
			})
		);
	cb();
});

gulp.task(
	'watch',
	gulp.series('sass', function(cb) {
		gulp.watch('src/assets/css/*.scss', gulp.series('sass'));
		cb();
	})
);
