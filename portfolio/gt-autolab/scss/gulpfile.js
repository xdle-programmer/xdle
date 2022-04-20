var gulp = require('gulp'),
    sass = require('gulp-sass'),
    path = require('path'),
    glob = require('glob'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    livereload = require('gulp-livereload'),
    replace = require('gulp-replace');



var components = glob.sync('./**/*.scss').map(function (componentDir) {
    return path.dirname(componentDir);
});

components.forEach(function (name) {
    gulp.task(name, function () {
        return gulp.src(name + '/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./cache/' + name));
    });
});

gulp.task('build-components', components.map(function (name) {
    return name;
}));

gulp.task('concat', ['build-components'], function () {
    return gulp.src(['cache/**/*.css', '!./base/**/*.scss'])
        .pipe(concat('styles.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(replace('url(../../../', 'url(../../'))
        .pipe(gulp.dest('styles'))
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['./**/*.scss'], ['concat']);
});