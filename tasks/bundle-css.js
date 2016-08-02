var runSequence = require('run-sequence')
var concat = require('gulp-concat')
var clean = require('gulp-clean-css')

module.exports = function (gulp) {
  gulp.task('bundle-css', function (done) {
    return runSequence('bundle-css:project', 'bundle-css:vendors', done)
  })

  gulp.task('bundle-css:project', function () {
    return gulp.src([
      './src/**/*.css'
    ])
    .pipe(concat('bundle-project.min.css'))
    .pipe(clean())
    .pipe(gulp.dest('./dist'))
  })

  gulp.task('bundle-css:vendors', function () {
    return gulp.src([
      // './node_modules/semantic-ui-css/semantic.min.css'
    ])
    .pipe(concat('bundle-vendors.min.css'))
    .pipe(clean())
    .pipe(gulp.dest('./dist'))
  })
}
