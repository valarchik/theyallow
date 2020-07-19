var gulp = require('gulp');
var less = require('gulp-less');

var paths = {
    styles: {
        src: './less/**/*.less',
        dest: './'
    }
};

/*
 * Define our tasks using plain functions
 */
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(less())
        .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
    gulp.watch(paths.styles.src, styles);
}

exports.styles = styles;
exports.watch = watch;
