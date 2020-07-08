var gulp = require('gulp');

gulp.task('css', () => {
  const postcss      = require('gulp-postcss')
  const autoprefixer = require('autoprefixer')

  return gulp.src('css/styles.css')
    .pipe( postcss([ autoprefixer() ]) )
    .pipe( gulp.dest('build/') )
})
