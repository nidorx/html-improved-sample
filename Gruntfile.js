/* global require, module */

'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-html-improved');

    grunt.initConfig({
        htmlImproved: {
            compile: {
                options: {
                    data: {
                        //
                        defaultVars: {

                        }
                    }
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: [
                            '**/*.html',
                            // ignore includes
                            '!includes/**/*.html'
                        ],
                        dest: 'dest'
                    }
                ]
            }
        }
    });

    grunt.registerTask('build', [
        'htmlImproved'
    ]);
};
