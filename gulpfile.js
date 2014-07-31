'use strict';

var pkg = require('./package.json')
    ,gulp = require('gulp')
    ,concat = require('gulp-concat')
    ,header = require('gulp-header')
    ,uglify = require('gulp-uglify')
    ,rename = require('gulp-rename')
    ,browserify = require('gulp-browserify')
    ;


gulp.task('lib',function(){
  gulp
    .src([
      'src/jsbn.js'
      ,'src/random.js'
      ,'src/hash.js'
      ,'src/rsa.js'
      ,'src/aes.js'
      ,'src/api.js'
      ,'src/exports.js'
    ])
    .pipe(concat('cryptico.js'))
    .pipe(header('/* cryptico-js v${pkg.version} - ${file.name} - https://github.com/tracker1/cryptico-js */\n\n', {pkg:pkg}))
    .pipe(gulp.dest('lib/'))
    ;
});


gulp.task('browser',['lib'],function(){
  return gulp
    .src('lib/cryptico.js')
    .pipe(browserify({standalone:'cryptico'}))
    .pipe(header('/* cryptico-js v${pkg.version} - ${file.name} - https://github.com/tracker1/cryptico-js */\n\n', {pkg:pkg}))
    .pipe(rename('cryptico.browser.js'))
    .pipe(gulp.dest('dist/'))
    .pipe(uglify())
    .pipe(rename('cryptico.browser.min.js'))
    .pipe(header('/* cryptico-js v${pkg.version} - ${file.name} - https://github.com/tracker1/cryptico-js */\n\n', {pkg:pkg}))
    .pipe(gulp.dest('dist/'))
});


gulp.task('amd',['lib'],function(){
  return gulp
    .src('lib/cryptico.js')
    .pipe(browserify())
    .pipe(header('/* cryptico-js v${pkg.version} - ${file.name} - https://github.com/tracker1/cryptico-js */\n\n', {pkg:pkg}))
    .pipe(rename('cryptico.amd.js'))
    .pipe(gulp.dest('dist/'))
    .pipe(uglify())
    .pipe(rename('cryptico.amd.min.js'))
    .pipe(header('/* cryptico-js v${pkg.version} - ${file.name} - https://github.com/tracker1/cryptico-js */\n\n', {pkg:pkg}))
    .pipe(gulp.dest('dist/'))
});


gulp.task('default',['lib','browser','amd']);
