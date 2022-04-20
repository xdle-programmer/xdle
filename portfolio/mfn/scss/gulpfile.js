var gulp = require('gulp'),
    sass = require('gulp-sass'),
    path = require('path'),
    glob = require('glob'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css');



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

// gulp.task('js-concat', function () {
//     return gulp.src('blocks/**/*.js')
//
//     // Канкатенация
//         .pipe(concat('scripts.js'))
//
//         // Путь компиляции
//         .pipe(gulp.dest('js'));
// });


// gulp.task('concat', ['build-components', 'js-concat'], function () {
gulp.task('concat', ['build-components'], function () {
    return gulp.src(['cache/**/*.css', '!./base/**/*.scss'])

    // Канкатенация
        .pipe(concat('styles.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))

        // Путь компиляции
        .pipe(gulp.dest('styles'));


});

gulp.task('watch', function () {
    // gulp.watch(['./**/*.scss', './**/*.js'], ['concat']);
    gulp.watch(['./**/*.scss'], ['concat']);
});