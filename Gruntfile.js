module.exports = function(grunt) {

    // show elapsed time at the end
    require('time-grunt')(grunt);

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    var serveStatic = require('serve-static');

    grunt.loadNpmTasks('@vamship/grunt-typedoc');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-http-download');

    const sass = require('node-sass');

    grunt.initConfig({
        // TODO use https://www.npmjs.com/package/grunt-newer to only process updated files
        watch: {
            sources: {
                files: ['content/**/*.md', 'data/statics.json'],
                //files  : ['views/**/*.pug', 'content/**/*.md', 'data/statics.json'],
                //recompiles everything but doesn't reindex the search
                tasks: [
                    'execute:compileIndex',
                    'execute:compileExamples',
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
                    middleware: function(connect, options) {
                        var middlewares = [];
                        middlewares.push(function(req, res) {
                            //console.log(req);
                        });
                        var middlewares = [];
                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }
                        var directory = options.directory || options.base[options.base.length - 1];
                        options.base.forEach(function(base) {
                            // Serve static files. (use serve-static instead)
                            middlewares.push(serveStatic(base));
                        });

                        // not found? do the html magic!
                        middlewares.push(function(req, res, next) {
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
            dist: {                            // Target
                options: {
                    implementation: sass,
                    sourceMap: false,
                    outputStyle: "compressed"
                },
                files: {
                    './public/html/css/main.css': './public/scss/main.scss',
                }
            }
        },
        download: {
            documentation: {
                src: 'https://raw.githubusercontent.com/BabylonJS/Babylon.js/master/dist/preview%20release/documentation.d.ts',
                dest: './typedoc/babylon.d.ts'
            }
        },
        typedoc: {
            build: {
                options: {
                    target: 'es2015',
                    out: './public/html/api',
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
                    '!public/html/api/**/*.*'
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
            compileExamples: {
                call: function(grunt, options, async) {
                    require('./scripts/compile-html/compile-html-examples')(async());
                }
            },
            compileWhatsNew: {
                options: {
                    module: true
                },
                src: ['./scripts/compile-html/compile-html-whats-new.js']
            },
            compileHtmlStatics: {
                call: function(grunt, options, async) {
                    require('./scripts/compile-html/compile-html-statics')(async());
                }
            },
            indexer: {
                call: function(grunt, options, async) {
                    require('./scripts/helpers/indexer/azure')(async());
                }
            },
            remoteIndexCleanup: {
                call: function(grunt, options, async) {
                    require('./scripts/helpers/indexer/azureCleanup')(async());
                }
            }
        },
        copy: {
            exampleIcons: {
                files: [
                    // includes files within path and its sub-directories
                    {
                        expand: true,
                        src: ['./examples/icons/**'],
                        dest: './public/html/'
                    }
                ],
            },
        }
    });

    grunt.registerTask('serve', 'Start working', [
        //'build',
        'connect:server',
        'open:local',
        'watch'
    ]);

    grunt.registerTask('build', 'Build content and index it', [
        'clean:json',
        'download:documentation',
        'typedoc:build',
        'execute:compileIndex',
        'execute:compileExamples',
        'copy:exampleIcons',
        'execute:compileWhatsNew',
        'execute:compileHtmlStatics',
        'execute:indexer',
        'execute:remoteIndexCleanup',
        'clean:tmp'
    ]);

    grunt.registerTask('examples', 'Build examples page', [
        'execute:compileExamples',
        'copy:exampleIcons'
    ]);

    grunt.registerTask('buildCss', 'Compile SCSS into CSS', [
        'sass'
    ]);
};

