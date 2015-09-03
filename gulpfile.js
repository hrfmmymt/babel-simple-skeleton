'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function () {
  gulp.src('./babel/*.js').pipe(babel()).pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch('./babel/*.js', ['babel']);
});

gulp.task('default', ['babel', 'watch']);