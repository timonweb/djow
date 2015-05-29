/* file: gulpfile.js */
var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename');

var paths = {
  sass: ['./static/scss/**/*.scss']
};

gulp.task('default', ['watch']);

gulp.task('build-css', function() {
  return gulp.src(paths.sass)
    .pipe(sass())
    .pipe(gulp.dest('./static/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./static/css/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['build-css']);
});