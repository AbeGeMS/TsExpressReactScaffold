var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var fs = require("fs");

gulp.task("build",function(){
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("debug"));
});