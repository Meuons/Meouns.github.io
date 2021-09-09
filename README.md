

# Packages and tools used
gulp-concat is used to concat separate css and javascript files.

gulp-terser puts all javascipt code on one row so that it is harder to read and harder to steal.

gulp-livereload automatically reloads the page when changes are made to the files.

minifyCSS minfies the css file so that it takes upp less space.

# Description
The system I have created is a system for automatic copying, updating and catalogizing of html, css, js and jpeg files.

The taks used in the system is one for copying and minifying javascript files.

One for copying and minifying css files.

One for copying html files and one for copying jpg files.

The watch task automatically activates the other tasks when a file is changed

The liverload task reloads the page when a file is changed



# Installaltion

Write the follwing commands in the terminal
1. npm install --save-dev gulp-concat
2. npm install gulp-terser --save-dev
3. npm install --save-dev gulp-livereload
4. npm install --save-dev minify-css
5. gulp
