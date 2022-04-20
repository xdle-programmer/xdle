var gulp = require('gulp'),
    sass = require('gulp-sass'),
    path = require('path'),
    glob = require('glob'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    livereload = require('gulp-livereload'),
    replace = require('gulp-replace')


var components = glob.sync('./**/*.scss').map(function (componentDir) {
    return path.dirname(componentDir);
});

components.forEach(function (name) {

    gulp.task(name, function () {
        return gulp.src(name + '/*.scss')

            // Собственно компиляция
            .pipe(sass())

            // Путь компиляции
            .pipe(gulp.dest('./scss/cache/' + name));
    });

});

gulp.task('build-components', components.map(function (name) {
    return name;
}));

gulp.task('concat', ['build-components'], function () {
    return gulp.src(['scss/cache/**/*.css', '!scss/blocks/base/**/*.scss'])

        // Канкатенация
        .pipe(concat('main.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(replace('url(../../../', 'url(../'))

        // Путь компиляции
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});
//
// gulp.task('scriptPluginsConcat', function () {
//     return gulp.src('./js/sourcesJS/plugins/*.js')
//         .pipe(concat('plugins.js'))
//         .pipe(gulp.dest('./js/sourcesJS/'));
// });
// gulp.task('scriptConcat', ['scriptPluginsConcat'], function () {
//     return gulp.src(['./js/sourcesJS/jquery-3.2.0.min.js', './js/sourcesJS/plugins.js', './js/sourcesJS/main.js'])
//         .pipe(concat('main.js'))
//         .on('error', onError)
//         .pipe(gulp.dest('./js/'));
// });
//
// gulp.task('scriptMinify', ['scriptConcat'], function () {
//     return gulp.src(['./js/main.js'])
//         .pipe(minify())
//         .on('error', onError)
//         .pipe(gulp.dest('./js/'));
// });
//
// var onError = function (error) {
//     gutil.log([
//         (error.name + ' in ' + error.plugin).bold.red,
//         '',
//         error.message,
//         ''
//     ].join('\n'));
//     gutil.beep();
//     this.emit('end');
// };

gulp.task('watch', function () {
    // gulp.watch(['./**/*.scss'], ['scriptConcat', 'concat']);
    livereload.listen();
    gulp.watch(['./**/*.scss'], ['concat']);
});