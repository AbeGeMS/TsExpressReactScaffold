var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var clean = require("gulp-rimraf");
var flatten = require("gulp-flatten");

gulp.task("clean", function () {
    console.log("Clean all files in debug folder");
    return gulp.src("debug/*", { read: false }).pipe(clean());
});

gulp.task("build", ["clean"], function () {
    console.log("build typscript");
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(flatten())
        .pipe(gulp.dest("debug"));
});
