/*
  Copyright (C) 2014 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS'
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

'use strict';

var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    to5 = require('gulp-6to5'),
    espower = require('gulp-espower');

var TEST = [ 'test/*.js' ];
var POWERED = [ 'powered-test/*.js' ];
var SOURCE = [ 'src/**/*.js' ];

gulp.task('build', function () {
    return gulp.src(SOURCE)
        .pipe(to5())
        .pipe(gulp.dest('lib'));
});

gulp.task('powered-test', function () {
    return gulp.src(TEST)
        .pipe(to5())
        .pipe(espower())
        .pipe(gulp.dest('./powered-test/'));
});

gulp.task('test', [ 'build', 'powered-test' ], function () {
    return gulp.src(POWERED)
        .pipe(mocha({
            reporter: 'spec',
            timeout: 100000 // 100s
        }));
});

gulp.task('watch', [ 'build' ], function () {
    gulp.watch(SOURCE, [ 'build' ]);
});

gulp.task('travis', [ 'test' ]);
gulp.task('default', [ 'travis' ]);
