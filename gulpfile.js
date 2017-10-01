const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const gulpConcat = require ('gulp-concat');
const gulpCleanCss = require('gulp-clean-css');
const webpack = require('webpack-stream');
const browserSync = require("browser-sync").create();
const webpack_config = require('./webpack.config.js');
const settings = require('./settings.json');
const assets = 'public/assets/';
const dist = 'public/dist/';
const server_src = 'src/';
const server_templates = 'templates/';

gulp.task('webpack', function(){
	return webpack(webpack_config)
			.pipe(gulp.dest('public/dist/js'))
			.pipe(browserSync.stream());
});

gulp.task('sass:core', function(){
	return gulp.src(`${assets}css/app/core/core.scss`)
			.pipe(gulpSass())
			.pipe(gulpCleanCss())
			.pipe(gulp.dest('public/dist/css/'))
			.pipe(browserSync.stream())
});

gulp.task('sass:watch', ['sass:core'], function(){
	gulp.watch(`${assets}css/app/**/*.scss`, ['sass:core']);
	gulp.watch(`${dist}css/*.css`).on('change', browserSync.reload);
})

gulp.task('server:watch', function(){
	gulp.watch(`${server_src}**/*.php`).on('change', browserSync.reload);
	gulp.watch(`${server_templates}**/*.phtml`).on('change', browserSync.reload);
});

gulp.task('serve', ['webpack'], function(){
	browserSync.init({
        proxy: `${settings.proxy.url}`,
    });
	
	gulp.watch(`${assets}js/app/**/*.js`, ['webpack']);
	gulp.watch(`${dist}js/app.bundle.js`).on('change', browserSync.reload);
});
gulp.task('default', [ 'serve', 'sass:watch', 'server:watch']);

