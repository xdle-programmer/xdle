var gulp = require('gulp'),
    sass = require('gulp-sass'),
    path = require('path'),
    glob = require('glob'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    livereload = require('gulp-livereload'),
    replace = require('gulp-replace');

var components = glob.sync('./Content/blocks/**/*.scss').map(function (componentDir) {
    return path.dirname(componentDir);
});

components.forEach(function (name) {

    gulp.task(name, function () {
        return gulp.src(name + '/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./Content/cache/' + name));
    });

});


gulp.task('build-components', components.map(function (name) {
    return name;
}));


gulp.task('concat', ['build-components'], function () {
    return gulp.src(['Content/cache/Content/blocks/to_bottom/**/*.css', '!./base/**/*.scss'])
        .pipe(concat('styles.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(replace('url(../../../', 'url(../'))
        .pipe(gulp.dest('Content/css'))
        .pipe(livereload());
});

gulp.task('concat_to_head', ['build-components'], function () {
    return gulp.src(['Content/cache/Content/blocks/to_head/**/*.css', '!./base/**/*.scss'])
        .pipe(concat('styles_to_head.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(replace('url(../../../', 'url(../'))
        .pipe(gulp.dest('Content/css'));
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['./**/*.scss'], ['concat_to_head', 'concat']);
});