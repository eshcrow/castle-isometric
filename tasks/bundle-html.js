var runSequence = require('run-sequence')
var minifyHtml = require('gulp-minify-html')

module.exports = function (gulp) {
  gulp.task('bundle-html', function (done) {
    return runSequence('bundle-html:project', done)
  })

  gulp.task('bundle-html:project', function () {
    return gulp.src(['./src/**/*.html'])
      .pipe(minifyHtml())
      .pipe(gulp.dest('./dist'))
  })
}
