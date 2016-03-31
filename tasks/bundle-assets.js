var runSequence = require('run-sequence')

module.exports = function (gulp) {
  gulp.task('bundle-assets', function (done) {
    return runSequence('bundle-assets:vendors', done)
  })

  gulp.task('bundle-assets:vendors', function () {
    var basePath = './node_modules/semantic-ui-css/'
    return gulp.src(basePath + 'themes/default/**/*', { base: basePath })
      .pipe(gulp.dest('./dist'))
  })
}
