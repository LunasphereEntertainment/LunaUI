const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

function bundleCss() {
    return gulp.src('./src/index.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(concat('luna.ui.css'))
        .pipe(gulp.dest('./dist'));
}

exports.default = bundleCss;

function watchStyles() {
    return gulp.watch('./src/**.scss', {}, bundleCss);
}

exports.watch = gulp.series(watchStyles);
