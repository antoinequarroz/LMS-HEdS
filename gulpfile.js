'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import rtlcss from 'gulp-rtlcss';
import gulpif from 'gulp-if';

// Votre code reste inchangé...


// RTL
var enableRTL     = false; // TODO: RTL CSS will be only generated if this is TRUE

// Paths
var Paths = {
    TEMPLATE: 'src/assets',
    SCSS: 'src/assets/scss/**/*.scss',
    CSS: 'src/assets/css/',
    JS: 'src/assets/js/*.js',
}

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(Paths.SCSS)
      .pipe(sourcemaps.init())
      .pipe(sass.sync({
          outputStyle: 'expanded'
      }).on('error', sass.logError)) 
      .pipe(autoprefixer({
          overrideBrowserslist: ['last 2 versions']
      }))
      .pipe(gulp.dest(Paths.CSS))
      .pipe(gulpif(enableRTL, rtlcss()))
      .pipe(gulpif(enableRTL, rename({ suffix: '-rtl' })))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(Paths.CSS))
      .pipe(browserSync.stream());
});


// Static Server
gulp.task('serve', function(done) {
    browserSync.init({
      server: Paths.TEMPLATE
    });
    done();
});

// watching files
gulp.task('watch', function(done) {
    gulp.watch(Paths.SCSS).on('change', gulp.series('sass'));
    gulp.watch(Paths.HTML).on('change', browserSync.reload);
    gulp.watch(Paths.JS).on('change', browserSync.reload);
    done();
});

gulp.task('default', gulp.series('sass', 'serve', 'watch'));