const {src, dest, watch, series, parallel} = require("gulp");
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const terser = require('gulp-terser');
var browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));


const options = {
    html: {
        removeAttributeQuotes: false,
        removeOptionalTags: false,
    },
};

const gulp = require('gulp');


//Filepaths
const files = { 
    htmlPath: "src/**/*.html",
    jsPath: "src/**/*.js",
    imgPath: "src/**/*.jpg",
    cssPath: "src/**/*.css"
}

function cssTask() {
    return src(files.cssPath)
    .pipe(concat('styles.css'))
        .pipe(minifyCSS())
        .pipe(dest("pub/css"))
        .pipe(browserSync.stream());
}
        
//HTML-task, duplicate files
function htmlTask() {
return src(files.htmlPath)
.pipe(dest('pub'))
.pipe(browserSync.stream());

}
//Img-task, duplicate files
function imgTask() {
    return src(files.imgPath)
    .pipe(dest('pub'))
    .pipe(browserSync.stream());
    }

//JS-task,  minify, concat
function jsTask() {
    return src(files.jsPath)
    .pipe(concat('scripts.js'))
    .pipe(terser())
    .pipe(dest('pub/js'))
    .pipe(browserSync.stream());
}

//Watch

function watchTask(){
    browserSync.init({
      server: "./pub"
    });
    watch([files.htmlPath, files.jsPath, files.imgPath, files.cssPath], parallel(htmlTask, jsTask, imgTask, cssTask)).on("change", browserSync.reload);
  }
exports.default = series (
    parallel(htmlTask, jsTask, imgTask, cssTask),
    watchTask
);
