'use strict'

var shell = require('gulp-shell')
var runSequence = require('run-sequence')

module.exports = function (gulp) {
  gulp.task('bundle', function (done) {
    runSequence('clean', 'bundle-js', 'bundle-css', 'bundle-assets', 'bundle-html', done)
  })

  gulp.task('clear-terminal', shell.task([
    'clear'
  ]))

  gulp.task('bundle:watch', function () {
    gulp.watch(['src/**/*.html'], ['bundle-html:project'])
    gulp.watch(['src/**/*.css'], ['bundle-css:project'])
    gulp.watch(['src/**/*.jsx', 'src/**/*.js'], ['clear-terminal', 'bundle-js:project'])
  })
}
