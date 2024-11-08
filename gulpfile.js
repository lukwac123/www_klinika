var gulp = require('gulp');
var gulpSass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();

gulp.task('buildcss', function(){
    return gulp.src('./dev-assets/style.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(gulp.dest('./prod-assets'));
});

gulp.task('watch', function(){
    gulp.watch('./dev-assets/**/*.scss', gulp.series('buildcss'));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
