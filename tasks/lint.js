var eslint = require('gulp-eslint')

module.exports = function (gulp) {
  gulp.task('lint', function () {
    return gulp.src([
      './src/**/*.js',
      './src/**/*.jsx',
      './test/**/*.js',
      './gulpfile.js',
      './tasks/*.js'
    ])
    .pipe(eslint({ configFile: 'eslint.json' }))
    .pipe(eslint.format())
    // .pipe(eslint.failOnError())
  })
}
