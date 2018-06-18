var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var connect = require("gulp-connect");

//convert sass to css
gulp.task("sass", function() {
  return gulp
    .src("./style/scss/main.scss") // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest("./style/css"))
    .pipe(connect.reload());
});

// Watch
gulp.task("watch", function() {
  // Watch .scss files
  return gulp.watch("./style/scss/main.scss", ["sass"]);
});

//first delete old css file, then run sass and watch
gulp.task("default", function() {
  gulp.start("sass", "watch");
});
