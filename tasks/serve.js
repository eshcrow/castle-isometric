var connect = require('gulp-connect')

module.exports = function (gulp) {
  gulp.task('serve', function () {
    connect.server({
      root: 'dist'
    })
  })
}
