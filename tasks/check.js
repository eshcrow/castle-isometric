var runSequence = require('run-sequence')

module.exports = function (gulp) {
  gulp.task('check', function (done) {
    return runSequence('lint', 'test', done)
  })
}
