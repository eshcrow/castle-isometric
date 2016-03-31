var gulp = require('gulp')
var runSequence = require('run-sequence')
var uglify = require('gulp-uglify')
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream')
var browserify = require('browserify')
var babelify = require('babelify')
var watchify = require('watchify')

function bundleProject (watch) {
  var bundler = browserify('./src/app.jsx')
    // .external('react')
    .transform(babelify)

  function bundle () {
    return bundler.bundle()
      .pipe(source('bundle-project.min.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest('./dist'))
  }

  if (watch) {
    bundler = watchify(bundler)
    bundler.on('update', function () {
      bundle()
    })
  }

  return bundle()
}

module.exports = function (gulp) {
  gulp.task('bundle-js', function (done) {
    return runSequence('bundle-js:vendors', 'bundle-js:project', done)
  })

  gulp.task('bundle-js:project', function () {
    return bundleProject()
  })

  gulp.task('bundle-js:vendors', function () {
    var bundler = browserify()
      // .require('react')

    return bundler.bundle()
      .pipe(source('bundle-vendors.min.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest('./dist'))
  })

  gulp.task('bundle-js:watch', ['bundle-js:vendors'], function () {
    return bundleProject(true)
  })
}
