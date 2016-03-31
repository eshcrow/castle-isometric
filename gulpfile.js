var gulp = require('gulp');

[
  'clean',
  'bundle',
  'bundle-js',
  'bundle-css',
  'bundle-assets',
  'bundle-html',
  'test',
  'lint',
  'check',
  'serve'
].forEach(function (module) {
  require('./tasks/' + module)(gulp)
})
