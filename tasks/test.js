var runSequence = require('run-sequence')
var mocha = require('gulp-mocha')

module.exports = function (gulp) {
  gulp.task('test', function (done) {
    return runSequence('test:unit', 'test:integration', done)
  })

  gulp.task('test:unit', function () {
    return gulp.src('test/unit/**/*.js')
      .pipe(mocha())
  })

  gulp.task('test:integration', function () {
    return gulp.src('test/integration/**/*.js')
      .pipe(mocha())
  })
}
