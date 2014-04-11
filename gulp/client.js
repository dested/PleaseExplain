var gulp = require('gulp');


var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var insert = require('gulp-insert');

var codePaths = ['Client/js/**/*.js', 'Common/**/*.js', '!**/vendor/**', '!**/node_modules/**'];

var libraryPaths = ['Client/vendor/**/*.*'];

var htmlPaths = ['Client/**/*.html'];
var imagePaths = ['Client/images/**/*.png'];
var cssPaths = ['Client/css/**/*.css'];


gulp.task('client.clean', function () {
    return  gulp.src('build/client', {read: false})
        .pipe(clean());
});


gulp.task('client.packageScripts', function () {
    return gulp.src(codePaths)
        .pipe(concat('client.min.js'))
        .pipe(gulp.dest('build/client/js'));
});


gulp.task('client.packageLibs', function () {
    return gulp.src(libraryPaths)
//        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest('build/client/vendor'));
});

gulp.task('client.packageCss', function () {
    return gulp.src(cssPaths)
        .pipe(gulp.dest('build/client/css'));
});

gulp.task('client.packageHtml', function () {
    return gulp.src(htmlPaths)
        .pipe(gulp.dest('build/client'));
});


gulp.task('client.express', function () {
    var express = require('express');
    var http = require('http');
    var app = express();
    app.set('port', 3000);
    app.use(express.static('build/client'));



//    app.use('/vendor',express.static('build/client/vendor'));
//    app.use('/css',express.static('build/client/vendor'));
//    app.use('/js',express.static('build/client/vendor'));
//    app.use('/vendor',express.static('build/client/vendor'));

    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
});
