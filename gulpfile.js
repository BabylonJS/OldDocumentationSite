var gulp = require("gulp");
var webserver = require("gulp-webserver");

/**
 * Embedded webserver for test convenience.
 */
gulp.task("run", function () {
    var options = {
        port: 1338,
        livereload: false
    };

    gulp.src(".").pipe(webserver(options));
});