"use strict";

const 	{src, dest, parallel} = require('gulp');
const	gulp = require('gulp');
const  	sass = require('gulp-sass');
const   server = require('browser-sync');
const	prefix = require('gulp-autoprefixer');
const   minify = require('gulp-csso');
const	rename = require('gulp-rename');

function css(){
    return src(['sass/**/*.sass', 'sass/**/*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(prefix(['last 12 versions','> 1%','ie 8'], {cascade: true}))
    .pipe(dest('css/'));
}

function startServer(){
	server.init({
		server: ""
	});
}

function build(){
	return src(['css/*.css'])
	.pipe(minify())
  	.pipe(rename({
    	suffix: ".min"
  	}))
	.pipe(dest('css/'));
}

function watchFiles(){
    gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], css);
}

const watch = parallel(startServer, watchFiles);

exports.default = watch;
exports.start = startServer;
