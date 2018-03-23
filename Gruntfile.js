module.exports = function (grunt) {

    // show elapsed time at the end
    require('time-grunt')(grunt);

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    var serveStatic = require('serve-static');

    grunt.loadNpmTasks('grunt-typedoc');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        // TODO use https://www.npmjs.com/package/grunt-newer to only process updated files
        watch: {
            sources: {
                files: ['content/**/*.md', 'data/statics.json'],
                //files  : ['views/**/*.pug', 'content/**/*.md', 'data/statics.json'],
                //recompiles everything but doesn't reindex the search
                tasks: [
                    'execute:compileIndex',
                    'execute:compileWhatsNew',
                    'execute:compileHtmlStatics'
                ],
                //As a very heavy task, put a little debounce of two seconds
                options: {
                    //debounceDelay: 2000
                    interval: 5007,
                    interrupt: true,
                    livereload: true
                }
            },
            typedoc: {
                files: './typedoc/babylon.d.ts',
                tasks: ['typedoc:build'],
            }
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: 'public/html',
                    livereload: true,
                    hostname: 'localhost',
                    middleware: function (connect, options) {
                        var middlewares = [];
                        middlewares.push(function (req, res) {
                            //console.log(req);
                        });
                        var middlewares = [];
                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }
                        var directory = options.directory || options.base[options.base.length - 1];
                        options.base.forEach(function (base) {
                            // Serve static files. (use serve-static instead)
                            middlewares.push(serveStatic(base));
                        });

                        // not found? do the html magic!
                        middlewares.push(function (req, res, next) {
                            for (var file, i = 0; i < options.base.length; i++) {
                                file = options.base/* './public/html'*/ + req.url + ".html";
                                if (grunt.file.exists(file)) {
                                    require('fs').createReadStream(file).pipe(res);
                                    return;
                                }
                            }
                            //not found ? 
                            res.statusCode = 404;
                            res.end(req.url + ' not found');
                        });
                        return middlewares;
                    }
                }
            }
        },
        // Open Config
        open: {
            local: {
                path: 'http://localhost:8080'
            }
        },
        // Sass Config
        sass: {
            options: {
                cacheLocation: '.tmp/.sass-cache'
            },
            dev: {
                options: {
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: 'public/scss',
                    dest: 'public/html/css',
                    src: ['main.scss'],
                    ext: '.css'
                }]
            }
        },
        typedoc: {
            build: {
                options: {
                    target: 'es5',
                    out: './public/html/classes',
                    name: 'Babylon.js classes documentation',
                    excludeExternals: true,
                    excludePrivate: true,
                    excludeProtected: true,
                    includeDeclarations: true,
                    entryPoint: `BABYLON`,
                    mode: "file",
                    theme: './typedoc/default'
                },
                src: './typedoc/babylon.d.ts'
            }
        },
        clean: {
            json: {
                options: {
                    force: true
                },
                src: [
                    'data/**.json',
                    '!data/static-tags.json',
                    '!data/statics.json',
                    'public/html/**/*.html',
                    '!public/html',
                    '!public/html/classes/**/*.*'
                ]
            },
            tmp: {
                options: {
                    force: true
                },
                src: [
                    '.tmp/**/*'
                ]
            }
        },
        execute: {
            compileIndex: {
                options: {
                    module: true
                },
                src: ['./scripts/compile-html/compile-html-index.js']
            },
            compileWhatsNew: {
                options: {
                    module: true
                },
                src: ['./scripts/compile-html/compile-html-whats-new.js']
            },
            compileHtmlStatics: {
                call: function (grunt, options, async) {
                    require('./scripts/compile-html/compile-html-statics')(async());
                }
            }
        }
    });

    grunt.registerTask('serve', 'Start working', [
        'build',
        'connect:server',
        'open:local',
        'watch'
    ]);

    grunt.registerTask('build', 'Build content and index it', [
        'clean:json',
        'typedoc:build',
        'execute:compileIndex',
        'execute:compileWhatsNew',
        'execute:compileHtmlStatics',
        'clean:tmp'
    ]);
};


