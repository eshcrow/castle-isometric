var runSequence = require('run-sequence')

module.exports = function (gulp) {
  gulp.task('bundle', function (done) {
    runSequence('clean', 'bundle-js', 'bundle-css', 'bundle-assets', 'bundle-html', done)
  })
}
