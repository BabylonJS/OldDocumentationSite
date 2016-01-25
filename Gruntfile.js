module.exports = function (grunt) {

    // show elapsed time at the end
    require('time-grunt')(grunt);

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch        : {
            options: {
                livereload: true
            },
            files:[],
            //watches content related changes
            content: {
                files  : ['content/**/*.md', 'data/statics.json', '!data/search/**'],
                //files  : ['views/**/*.jade', 'content/**/*.md', 'data/statics.json'],
                //recompiles everything but doesn't reindex the search
                tasks  : [
                    'clean:json',
                    'execute:compileTagsClasses',
                    'execute:createListClasses',
                    'execute:compileIndex',
                    'execute:compileWhatsNew',
                    'execute:compileHtmlClasses',
                    'execute:compileHtmlStatics',
                    'execute:forwarder'
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
        sass         : {
            options: {
                cacheLocation: '.tmp/.sass-cache'
            },
            dev    : {
                options: {
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd   : 'public/scss',
                    dest  : 'public/css',
                    src   : ['main.scss'],
                    ext   : '.css'
                }]
            }
        },
        // Express Config
        express      : {
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        },
        clean        : {
            json: {
                src    : [
                    'data/**.json',
                    '!data/static-tags.json',
                    '!data/statics.json',
                    'public/html/**',
                    '!public/html'
                ]
            },
            indexes: {
                options:{
                    force: true
                },
                src: [
                    'data/search/**/*'
                ]
            },
            tmp : {
                options:{
                    force: true
                },
                src: [
                    '.tmp/**/*'
                ]
            }
        },
        execute      : {
            compileTagsClasses: {
                options: {
                    module: true
                },
                src    : ['./scripts/compile-tags/compile-tags-classes.js']
            },
            createListClasses : {
                call: function (grunt, options, async) {
                    require('./scripts/create-list/create-list-classes.js')(async());
                }
            },
            compileIndex      : {
                options: {
                    module: true
                },
                src    : ['./scripts/compile-html/compile-html-index.js']
            },
            compileWhatsNew   : {
                options: {
                    module: true
                },
                src    : ['./scripts/compile-html/compile-html-whats-new.js']
            },
            compileHtmlStatics: {
                call: function (grunt, options, async) {
                    require('./scripts/compile-html/compile-html-statics')(async());
                }
            },
            compileHtmlClasses: {
                call: function (grunt, options, async) {
                    require('./scripts/compile-html/compile-html-classes')(async());
                }
            },
            forwarder         : {
                call: function (grunt, options, async) {
                    require('./scripts/create-forward')(async());
                }
            },
            indexer           : {
                call: function (grunt, options, async) {
                    require('./scripts/helpers/indexer/main')(async());
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
        'execute:compileTagsClasses',
        'execute:createListClasses',
        'execute:compileIndex',
        'execute:compileWhatsNew',
        'execute:compileHtmlClasses',
        'execute:compileHtmlStatics',
        'execute:forwarder',
        'clean:indexes',
        'execute:indexer',
        'clean:tmp'
    ]);
};


