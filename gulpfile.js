var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var gulpConcat = require ('gulp-concat');
var gulpCleanCss = require('gulp-clean-css');
var webpack = require('webpack-stream');
var browserSync = require("browser-sync").create();
var webpack_config = require('./webpack.config.js');
var settings = require('./settings.json');
var assets = 'public/assets/';
var dist = 'public/dist/';

gulp.task('webpack', function(){
	return webpack(webpack_config)
			.pipe(gulp.dest('public/dist/js'))
			.pipe(browserSync.stream());
});

gulp.task('sass:core', function(){
	return gulp.src(`${assets}css/app/core/core.scss`)
			.pipe(gulpSass())
			.pipe(gulpCleanCss({compatibility: 'ie8'}))
			.pipe(gulp.dest('public/dist/css/'))
			.pipe(browserSync.stream())
});

gulp.task('sass:watch', ['sass:core'], function(){
	gulp.watch(`${assets}css/app/**/*.scss`, ['sass:core']);
	gulp.watch(`${dist}css/*.css`).on('change', browserSync.reload);
})

gulp.task('serve', ['webpack'], function(){
	browserSync.init({
        proxy: `${settings.proxy.url}`,
    });
	
	gulp.watch(`${assets}js/app/**/*.js`, ['webpack']);
	gulp.watch(`${dist}js/app.bundle.js`).on('change', browserSync.reload);
});
gulp.task('default', [ 'serve', 'sass:watch']);

