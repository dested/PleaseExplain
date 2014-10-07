

var gulp = require('gulp');
var gutil = require('gulp-util');
require('./client');
require('./server');
var runSequence = require('run-sequence');


gulp.task('default', function (callback) {
    process.chdir('../');

    runSequence(
        [
            'client',
            'server'
        ],
        callback);
});

gulp.task('client', function (callback) {
    runSequence(
          'client.clean',
        [
            'client.packageScripts',
            'client.packageLibs',
            'client.packageHtml',
            'client.packageCss'
        ],
        'client.express',
        callback);
});

gulp.task('server', function (callback) {
    runSequence(
//        'server.clean',
        [
            'server.packageScripts',
            'server.packageLibs',
            'server.packageNodeModules'
        ],
        'server.run',
        callback);
});
