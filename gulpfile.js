var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css');

gulp.task('compile-scss', function () {
    return gulp.src('src/styles/scss/**/*.scss')
        .pipe(sass())
        .on('error', handleError)
        .pipe(minifycss())
        .pipe(gulp.dest('src/styles/css'));
});

gulp.task('watch-scss', function () {
    gulp.watch('./src/styles/scss/**/*.scss', ['compile-scss']);
});

gulp.task('default', [
    'watch-scss', 'compile-scss',
]);

gulp.task('compile', [
    'compile-scss'
]);

function handleError (error) {
    console.log(error.toString());
    this.emit('end');
}