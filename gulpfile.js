// gulpfile.js

var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');

// List of .js libs.
var jsLibFiles = [
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular2/bundles/router.dev.js',
    'node_modules/angular2/bundles/http.dev.js'
];

// List of .css libs.
var cssLibFiles = [
    'app/styles/angular2crud.css'
];

// Concat all .js libs.
gulp.task('js', function() {
    return gulp.src(jsLibFiles)
               .pipe(concat('angular2crud.js'))
               .pipe(gulp.dest('./dist'));
});

// Concat all .css libs.
gulp.task('css', function() {
    return gulp.src(cssLibFiles)
               .pipe(concat('angular2crud.css'))
               .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function(cb){
    del('./dist/**/*',cb);
});


// Default build task (run by typing 'gulp').
gulp.task('default', ['clean','js', 'css']);