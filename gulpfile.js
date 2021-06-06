// import the plugins
const gulp = require('gulp');
const minifyCss = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const gp_concat = require('gulp-concat');
const gp_rename = require('gulp-rename');
const gp_uglify = require('gulp-uglify');
const path = require('path');

// minify the script to single one 
gulp.task('css-main',function(){
    return gulp.src(
        [
            './public/css/open-iconic-bootstrap.min.css',
            './public/css/animate.css',
            './public/css/owl.carousel.min.css',
            './public/css/owl.theme.default.min.css',

            './public/css/magnific-popup.css',
            './public/css/aos.css',
            './public/css/ionicons.min.css',
            
            './public/css/jquery.timepicker.css',
            './public/css/flaticon.css',
            './public/css/icomoon.css', 
            './public/css/style.css',
            './public/css/ajax-loader.gif',
            './public/css/bootstrap-datepicker.css',

            './public/css/css/mixins',
            './public/css/css/bootstrap-reboot.css',

            './public/css/bootstrap/bootstrap-grid.css',
            './public/css/bootstrap/bootstrap-reboot.css',
            
        ]
    )
    .pipe(minifyCss())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(gp_concat('style.min.css'))
    .pipe(gulp.dest('./public/dist/css'))
})

gulp.task('copy-fonts', function(){
    return gulp.src(
        ['./public/fonts/**']
    )
    .pipe(gulp.dest('./public/dist/fonts/'))
})

//exports both of module
//gulp.task('style',['css-main', 'copy-fonts'], function(){})