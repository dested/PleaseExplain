var gulp = require('gulp');


var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var insert = require('gulp-insert');
var nodemon = require('gulp-nodemon');

var codePaths = ['server/**/*.js', 'common/**/*.js', '!server/node_modules/**', '!server/lib/**/*.js'];
var libPaths = ['server/lib/**/*.js'];

var serverNodeModulePath = ['server/node_modules/**/*.*'];


gulp.task('server.clean', function () {
    return  gulp.src('build/server', {read: false})
        .pipe(clean());
});

gulp.task('server.packageNodeModules', function () {
    return gulp.src(serverNodeModulePath)
        .pipe(gulp.dest('build/server/node_modules'));
});

gulp.task('server.packageScripts', function () {
    return gulp.src(codePaths)
        .pipe(concat('server.min.js'))
        .pipe(insert.prepend('var define = require(\'./lib/define\');\n'))
        .pipe(insert.prepend('var Q = require(\'q\');\n'))

        .pipe(insert.append('\ndefine("main");'))
        .pipe(gulp.dest('build/server'));
});
gulp.task('server.packageLibs', function () {
    return gulp.src(libPaths)
        .pipe(gulp.dest('build/server/lib'));
});

gulp.task('server.run', function () {
    require('../build/server/server.min.js');
});