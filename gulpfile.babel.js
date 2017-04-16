var gulp        = require('gulp');

var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
var livereload  = require('gulp-livereload');

const Tasks = Object.freeze({
  BUILD:   'build',
  DEFAULT: 'default',
  WATCH:   'watch'
});

const Paths = Object.freeze({
  SRC: './index.js',
  SOURCE: 'index.js',
  DIST: './build',
  MAPS: './maps',
  SCRIPTS: '/**/**/*.js'
});

const BabelConfig = Object.freeze({
  only: /^(?:.*\/node_modules\/(?:a|b)\/|(?!.*\/node_modules\/)).*$/,
  presets: ['es2015'],
  plugins: ['transform-object-rest-spread'],
  global: true
});

const BrowserifyConfig = Object.freeze({
  entries: Paths.SRC,
  debug: true
});

const Transforms = Object.freeze({
  BABELIFY: 'babelify'
});

gulp.task(Tasks.BUILD, function () {
    return browserify(BrowserifyConfig)
      .transform(Transforms.BABELIFY, BabelConfig)
      .bundle()
      .pipe(source(Paths.SOURCE))
      .pipe(buffer())
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write(Paths.MAPS))
      .pipe(gulp.dest(Paths.DIST))
      .pipe(livereload());
});

gulp.task(Tasks.WATCH, [Tasks.BUILD], function () {
    livereload.listen();
    gulp.watch([Paths.SOURCE, Paths.SCRIPTS], [Tasks.BUILD]);
});

gulp.task(Tasks.DEFAULT, [Tasks.WATCH]);
