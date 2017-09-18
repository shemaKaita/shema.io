var gulp = require('gulp');
var webpack = require('webpack-stream');
var browserSync = require("browser-sync").create();
var webpack_config = require('./webpack.config.js');
var settings = require('./settings.json');

gulp.task('webpack', function(){
	return webpack(webpack_config)
			.pipe(gulp.dest('public/dist/js'))
			.pipe(browserSync.stream());
});

gulp.task('serve', ['webpack'], function(){
	browserSync.init({
        proxy: `${settings.proxy.url}`,
    });
	
	gulp.watch('public/assets/js/app/index.js', ['webpack']);
	gulp.watch('public/dist/js/app.bundle.js').on('change', browserSync.reload);
});
gulp.task('default', ['serve']);

