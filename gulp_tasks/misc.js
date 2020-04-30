const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');

const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('other', other);
gulp.task('oneTrust', oneTrust);

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function other() {
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join(`!${conf.paths.src}`, '/oneTrust{,/**}'),
    path.join(`!${conf.paths.src}`, '/**/*.{scss,js,html}'),
    path.join(`${conf.paths.src}`, '/sf.analytics.js')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.dist));
}

function oneTrust() {
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
    path.join(`${conf.paths.src}`, '/oneTrust/79a259f2-a572-43a3-997e-57ccda252e80.js'),
    path.join(`${conf.paths.src}`, '/oneTrust/jquery.min.js'),
    path.join(`${conf.paths.src}`, '/oneTrust/salesforce.js'),
    path.join(`${conf.paths.src}`, '/oneTrust/**/*')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(path.join(conf.paths.dist, '/oneTrust')));
}
