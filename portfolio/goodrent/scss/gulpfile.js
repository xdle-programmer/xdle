var gulp = require('gulp'),
    sass = require('gulp-sass'),
    path = require('path'),
    glob = require('glob'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    replace = require('gulp-replace');



var components = glob.sync('./**/*.scss').map(function (componentDir) {
    return path.dirname(componentDir);
});


components.forEach(function (name) {

    gulp.task(name, function () {
        return gulp.src(name + '/*.scss')


        // Собственно компиляция
            .pipe(sass())

            // Путь компиляции
            .pipe(gulp.dest('./cache/' + name));
    });

});


gulp.task('build-components', components.map(function (name) {
    return name;
}));


gulp.task('concat', ['build-components'], function () {
    return gulp.src(['cache/blocks/to_bottom/**/*.css', '!./base/**/*.scss'])

    // Канкатенация
        .pipe(concat('styles.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(replace('url(../../../../', 'url(../../'))

        // Путь компиляции
        .pipe(gulp.dest('styles'));


});

gulp.task('concat_to_head', ['build-components'], function () {
    return gulp.src(['cache/blocks/to_head/**/*.css', '!./base/**/*.scss'])

    // Канкатенация
        .pipe(concat('styles_to_head.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(replace('url(../../../../', 'url(../../'))

        // Путь компиляции
        .pipe(gulp.dest('styles'));

});

gulp.task('concat_to_head_html', ['build-components'], function () {
    return gulp.src(['styles/styles_to_head.css'])

    // Замена пути
        .pipe(concat('styles_to_head_html.css'))
        .pipe(replace('url(../../', 'url('))

        // Путь компиляции
        .pipe(gulp.dest('styles'));

});

gulp.task('watch', function () {
    gulp.watch(['./**/*.scss'], ['concat_to_head', 'concat', 'concat_to_head_html']);
});