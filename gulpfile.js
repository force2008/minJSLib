var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    rjs = require('requirejs');

gulp.task('default', function() {
    return gulp.src('app/*.html')
        .pipe(useref.assets())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(useref.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('build', function(cb) {
    rjs.optimize({
        appDir: 'app',
        baseUrl: 'js/lib/nejmin',
        paths: {
            app: '../../app'
        },
        dir: 'app-built',
        modules: [{
            name: '../../test',
            include: ['event']
        }]
        // ... more require.js options
    }, function(buildResponse) {
        cb();
    }, cb)
});
gulp.task('default', ['build']);