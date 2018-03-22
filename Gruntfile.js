module.exports = function (grunt) {

    // show elapsed time at the end
    require('time-grunt')(grunt);

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-typedoc');

    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            files: [],
            //watches content related changes
            content: {
                files: ['content/**/*.md', 'data/statics.json', '!data/search/**'],
                //files  : ['views/**/*.pug', 'content/**/*.md', 'data/statics.json'],
                //recompiles everything but doesn't reindex the search
                tasks: [
                    'clean:json',
                    'execute:compileIndex',
                    'execute:compileWhatsNew',
                    'typedoc:build',
                    'execute:compileHtmlStatics'
                ],
                //As a very heavy task, put a little debounce of two seconds
                options: {
                    //debounceDelay: 2000
                    interval: 5007,
                    interrupt: true
                }
            }
            //watches code related changes
            //express: {
            //    files  : ['server.js', 'app.js', 'scripts/router/**/*.js', '!**/node_modules/**', '!Gruntfile.js'],
            //    tasks  : ['express:dev'],
            //    options: {
            //        nospawn: true // Without this option specified express won't be reloaded
            //    }
            //}
        },
        // Open Config
        open: {
            local: {
                path: 'http://localhost:3000'
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
        // Express Config
        express: {
            dev: {
                options: {
                    script: 'server.js'
                }
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
            json:
            {
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
            indexes: {
                options: {
                    force: true
                },
                src: [
                    'data/search/**/*'
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
            },
            indexer: {
                call: function (grunt, options, async) {
                    require('./scripts/helpers/indexer/azure')(async());
                }
            }
        }
    });

    grunt.registerTask('serve', 'Start working', [
        'express:dev',
        'open:local',
        'watch'
    ]);

    grunt.registerTask('build', 'Build content and index it', [
        'clean:json',
        'execute:compileIndex',
        'execute:compileWhatsNew',
        'typedoc:build',
        'execute:compileHtmlStatics',
        'clean:indexes',
        'execute:indexer',
        'clean:tmp'
    ]); 
};


