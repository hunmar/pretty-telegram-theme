var gulp = require('gulp');
var zip = require('gulp-zip');
var rename = require("gulp-rename");

gulp.task('default', ['compress', 'watch']);

gulp.task('compress', function() {
    gulp.src('./src/*')
        .pipe(zip('kurlik.tdesktop-theme'))
        .pipe(rename("kurlik.tdesktop-theme"))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    gulp.watch('./src/*', ['compress'])
});
