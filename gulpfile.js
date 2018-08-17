var gulp = require("gulp");
var ts = require("gulp-typescript");
var clean = require("gulp-rimraf");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var webpack = require("webpack");
var webpack_config = require("./webpack.config.js");
var webpack_stream = require("webpack-stream");
var exec = require("child_process").exec;

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
        .js.pipe(gulp.dest("debug/public/script"));
});

gulp.task("webpack", ["clean"], function () {
    exec("webpack --color --config webpack.config.js",function(err,stdout,stderr){
        console.log(stdout);
        console.log(stderr);
    });
});

gulp.task('move-test-config', ['clean'], function () {
    console.log('run move jasmine config');
    return gulp.src('src/test/**/jasmine.json')
        .pipe(gulp.dest('debug/test'));
});

gulp.task('default',
    ["build-server", "build-staticResource", "webpack", "move-test-config"],
    function () {
        console.info("\x1b[32m%s\x1b[0m", ">>>>>>>>>>Done>>>>>>>>");
    });

gulp.task("watch", function () {
    gulp.watch("src/**/*.{ts,tsx,less,html}", ['default'], function () {
        console.log("detect code change,start building...");
    });
});