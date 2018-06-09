var gulp = require("gulp");
var ts = require("gulp-typescript");
var clean = require("gulp-rimraf");
var flatten = require("gulp-flatten");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

gulp.task("clean", function () {
    console.log("Clean all files in debug folder");
    return gulp.src("debug/*", { read: false }).pipe(clean());
});

gulp.task("build-server", ["clean"], function () {
    console.log("build typscript");
    return gulp.src(["src/**/*.{ts,tsx}", "!src/public", "!src/public/**"]) // Build all ts/tsx file under src folder and exclude public
        .pipe(ts.createProject("tsconfig.json")())
        .pipe(gulp.dest("debug"));
});

gulp.task("build-staticResource", ["clean"], function () {
    console.log("build staticResource");
    gulp.src('src/public/!(less|script)/*').pipe(gulp.dest("debug/public"));
});

gulp.task("build-client", ["clean"], function () {
    console.log("build client react");
    return gulp.src("src/public/script/**/*.{ts,tsx}")
        .pipe(ts.createProject("tsconfig.json")())
        .js.pipe(concat('client.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest("debug/public/script"));
});

gulp.task('default', ["build-server", "build-staticResource", "build-client"], function () {
    console.info("\x1b[32m%s\x1b[0m","Done");
});

gulp.watch("src/**/*.{ts,tsx,less,html}", ['default'], function () {
    console.log("detect code change,start building...");
});