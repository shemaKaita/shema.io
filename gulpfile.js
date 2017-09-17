var gulp = require('gulp');
var webpack = require('webpack-stream');
var browserSync = require("browser-sync").create();
var webpack_config = require('./webpack.config.js');

gulp.task('webpack', function(){
	return gulp.src('public/assets/js/index.js')
			.pipe(webpack(webpack_config))
			.pipe(gulp.dest('public/dist/js'))
			.pipe(browserSync.stream());
});

gulp.task('serve', function(){
	browserSync.init({
        proxy: "localhost/shema.io/public/"
    });
	
	gulp.watch('public/assets/js/index.js', ['webpack']);
	gulp.watch('public/dist/js/main.bundle.js').on('change', browserSync.reload);
});
gulp.task('default', ['serve']);

