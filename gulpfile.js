const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () =>
  gulp
    .src('src/assets/icons/**')
    .pipe(
      babel({
        presets: ['@babel/preset-env']
      })
    )
    .pipe(gulp.dest('src/assets'))
);

gulp.on('close', () => {
  console.log('gulp done');
});

// var gulp = require('gulp');
// var react = require('gulp-react');
// var concat = require('gulp-concat');
// gulp.task('default', function() {
//   return gulp
//     .src('src/assets/icons/**')
//     .pipe(concat('all-icons.js'))
//     .pipe(react())
//     .pipe(gulp.dest('src/assets/'));
// });
