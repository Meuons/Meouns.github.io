const {src, dest, watch, series, parallel} = require("gulp");
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const terser = require('gulp-terser');
const livereload = require('gulp-livereload');

const options = {
    html: {
        removeAttributeQuotes: false,
        removeOptionalTags: false,
    },
};




livereload({ start: true })
//Filepaths
const files = { 
    htmlPath: "src/**/*.html",
    cssPath: "src/css/*.css",
    jsPath: "src/**/*.js",
    imgPath: "src/**/*.jpg"
}

//HTML-task, duplicate files
function htmlTask() {
return src(files.htmlPath)

.pipe(dest('pub'))

}
//Img-task, duplicate files
function imgTask() {
    return src(files.imgPath)
    
    .pipe(dest('pub'))
    }
//CSS-task, minify, concat
function cssTask() {
    return src(files.cssPath)
    .pipe(concat('styles.css'))
    .pipe(minifyCSS())
    .pipe(dest('pub/css'))
    .pipe(livereload());
}
//JS-task,  minify, concat
function jsTask() {
    return src(files.jsPath)
    .pipe(concat('scripts.js'))
    .pipe(terser())
    .pipe(dest('pub/js'))
    .pipe(livereload());
}
//Watch
function watchTask(){
    livereload.listen();
  watch([files.htmlPath, files.jsPath, files.cssPath, files.imgPath], parallel(htmlTask, jsTask, cssTask, imgTask)).on('change', livereload.changed);
}


exports.default = series (
    parallel(htmlTask, jsTask, imgTask, cssTask),
    watchTask
);
