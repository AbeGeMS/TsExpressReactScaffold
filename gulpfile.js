var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var clean = require("gulp-rimraf");
var flatten = require("gulp-flatten");

gulp.task("clean", function () {
    console.log("Clean all files in debug folder");
    return gulp.src("debug/*", { read: false }).pipe(clean());
});

gulp.task("build-server", function () {
    console.log("build typscript");
    gulp.src(["src/*.{ts,tsx}","src/router/*.{ts,tsx}"])
    .pipe(tsProject())
    .js.pipe(flatten())
    .pipe(gulp.dest("debug"));
});

gulp.task("build-staticResource",function(){
    console.log("build staticResource");
    gulp.src('src/public/!(less|script)/*').pipe(gulp.dest("debug/public"));
});

gulp.task("build-client",function(){
    console.log("build client react");
    return gulp.src("src/public/script/*.{ts,tsx}")
    .pipe(ts.createProject("tsconfig.json")())
    .js.pipe(gulp.dest("debug/public/script"));
});

gulp.task('default',['clean'],function(){
    return gulp.run("build-server","build-staticResource","build-client");
});