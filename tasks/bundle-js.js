var runSequence = require('run-sequence')
var uglify = require('gulp-uglify')
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream')
var browserify = require('browserify')
var babelify = require('babelify')
var util = require('gulp-util')

module.exports = function (gulp) {
  gulp.task('bundle-js', function (done) {
    return runSequence('bundle-js:vendors', 'bundle-js:project', done)
  })

  gulp.task('bundle-js:project', function () {
    var bundler = browserify('./src/app.jsx')
      .external('react')
      .external('react-dom')
      .external('reflux')
      .transform(babelify)

    return bundler.bundle()
      .on('error', function (error) {
        util.log(error.toString())
        this.emit('end')
      })
      .pipe(source('bundle-project.min.js'))
      .pipe(buffer())
      // .pipe(uglify())
      .pipe(gulp.dest('./dist'))
  })

  gulp.task('bundle-js:vendors', function () {
    var bundler = browserify()
      .require('react')
      .require('react-dom')
      .require('reflux')

    return bundler.bundle()
      .pipe(source('bundle-vendors.min.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest('./dist'))
  })
}
