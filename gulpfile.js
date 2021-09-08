const {src, dest, watch, series, parallel} = require("gulp");
const concat = require('gulp-concat');
const uglify = require ('gulp-uglify-es').default;
const minifyCSS = require('gulp-minify-css');
const livereload = require('gulp-livereload');
const options = {
    html: {
        removeAttributeQuotes: false,
        removeOptionalTags: false,
    },
};

livereload({ start: true })
//Sökvägar 
const files = { 
    htmlPath: "src/**/*.html",
    cssPath: "src/css/*.css",
    jsPath: "src/**/*.js"
}

//HTML-task, kopiera filer
function copyHTML() {
return src(files.htmlPath)

.pipe(dest('pub'))

}


//CSS-task, konkatinera, minifiera
function cssTask() {
    return src(files.cssPath)
    .pipe(concat('main.css'))
    .pipe(dest('pub/css'))
    .pipe(minifyCSS())
    
}
//JS-task, konkatinera, minifiera
function jsTask() {
    return src(files.jsPath)
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(dest('pub/js'));
}
//Watch
function watchTask(){
  watch([files.htmlPath, files.jsPath, files.cssPath], parallel(copyHTML, jsTask, cssTask));
}


exports.default = series(
    parallel(copyHTML, jsTask, cssTask),
    watchTask
);