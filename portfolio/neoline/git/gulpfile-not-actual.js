var gulp = require('gulp');
    browserSync = require('browser-sync'),
    less = require('gulp-less'),
    path = require('path'),
    postcss = require('gulp-postcss'),
    gutil = require('gulp-util'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('autoprefixer'),
    buffer = require('vinyl-buffer'),
    merge = require('merge-stream'),
    twig = require("gulp-twig"),
    beautify = require('gulp-html-beautify'),
    spritesmith = require('gulp.spritesmith'),
    plumber = require('gulp-plumber'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    svgSprite = require("gulp-svg-sprites"),
    print = require("gulp-print"),
    reload = browserSync.reload,
    concat = require('gulp-concat'),
    svgCss = require('postcss-inline-svg'),
    cssnano = require('cssnano'),
    portfinder = require('portfinder'),
    dependencies = require("gulp-dependents"),
    gulpIgnore = require("gulp-ignore"),
    cache = require("gulp-cached"),
    minify = require('gulp-minify'),
    paths = {
        css: './css/',
        js: './js/',
        img: './img/',
        sourceimg: './source/img/',
        styles: './source/stylesheets/',
        scripts: './source/scripts/',
        plugins: './source/scripts/plugins/',
        pngIcons: './source/img/pngSprite/',
        svgIcons: './source/img/svgSprite/',
        templates: 'source/templates/',
        root: './'
    };

gulp.task('styleConcat', function() {
  return gulp.src(paths.styles + '*.css')
    .pipe(concat('main.css'))
    .pipe(
        postcss([ 
            autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }),
            svgCss(),
            cssnano()
        ]))
    .on('error', onError)
    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.stream());
});


gulp.task('svgstore', function () {
    return gulp
        .src('img/svgsprite/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgSprite({
            mode: "symbols",
            svg : {
                symbols: "icons.svg"
            }

        }))
        .pipe(gulp.dest('img'));
});
gulp.task('scriptPluginsConcat', function() {
  return gulp.src(paths.plugins + '*.js')
    .pipe(concat('plugins.js'))
    .pipe(minify({
        noSource: true
    }))
    .on('error', onError)
    .pipe(gulp.dest(paths.js));
});

gulp.task('scriptMin', function() {
  return gulp.src(paths.scripts + '*.js')
    
    .pipe(minify({
        noSource: true
    }))
    .on('error', onError)
    .pipe(gulp.dest(paths.js));
});

gulp.task('svgmin', function() {
  return gulp.src(paths.svgIcons + "*.svg")
    
    .pipe(gulp.dest(paths.js));
});
gulp.task('sprite', function () {
  var spriteData = gulp.src(paths.pngIcons + '*.png').pipe(spritesmith({
    imgName: 'pngsprite.png',
    cssName: 'pngsprite.css',
    imgPath : '.'+ paths.img + 'pngsprite.png'
  }));
  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest(paths.img));
  var cssStream = spriteData.css
    .pipe(gulp.dest(paths.styles));
  return merge(imgStream, cssStream);
});

gulp.task('imagemin', function(){
    console.log('imgmin')
    gulp.src(paths.sourceimg + '/**/*.{png,jpg,gif,svg,mp4}')

        .pipe(imagemin())
        .pipe(gulp.dest(paths.img))
});

// Сборка HTML'a
gulp.task("twig", function() {
  gulp.src(paths.templates + "**/*.html")
    .pipe(plumber({errorHandler: onError}))
    .pipe(cache("twig"))
    .pipe(dependencies({
      ".html": {
        parserSteps: [
          /{%\s*include\s+"(.+?)"/gm
        ],
        basePaths: ["partials"]
      }
    }, { logDependents: true }))
    .pipe(gulpIgnore.include('**.html'))
    .pipe(print())
    .pipe(twig())
    .pipe(beautify())
    .pipe(gulp.dest(paths.root))
    .pipe(reload({stream: true}));
});

gulp.task('serve', ['gulp-less'], function() {

    browserSync.init({
         server: {
            baseDir: ".", 
        }
    });
    gulp.watch(paths.styles + "*.less", ['gulp-less']);
    gulp.watch(paths.styles + "*.css", ['styleConcat']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch(paths.templates + '**/*.html', ['twig']);
    gulp.watch(paths.js + '*.js').on('change', browserSync.reload);
    gulp.watch(paths.plugins + "*.js",['scriptPluginsConcat'])
    gulp.watch(paths.scripts + "*.js",['scriptMin'])
    gulp.watch(paths.pngIcons + "*.png", ['sprite']);
    gulp.watch(paths.sourceimg + '/**/*.{png,jpg,gif,svg,mp4}', ['imagemin']);
    //gulp.watch(paths.svgIcons + "*.svg", ['svgmin']);
});



gulp.task('gulp-less', function() {
    console.log(paths.styles + "*.less");
    return gulp.src(paths.styles + "*.less")
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(less())
        
        .pipe(gulp.dest(paths.styles))
});
var onError = function(error) {
  gutil.log([
    (error.name + ' in ' + error.plugin).bold.red,
    '',
    error.message,
    ''
  ].join('\n'));
  gutil.beep();
  this.emit('end');
};
gulp.task('default', [ 'twig','serve', 'gulp-less','imagemin','sprite','styleConcat','scriptPluginsConcat','scriptMin']);
gulp.task('const', ['gulp-less','imagemin','sprite','styleConcat','scriptPluginsConcat','scriptMin']);
