/*!
 * Winfield Criterium's Gruntfile
 * http://www.winfieldcriterium.com
 * Copyright 2014 Athletes By Design
 * Licensed under WTFPL (http://www.wtfpl.net/txt/copying/)
 */

module.exports = function (grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    RegExp.quote = function (string) {
        return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: '*'
            },
            core: {
                src: '_assets/css/style.css',
                dest: 'assets/css/style.min.css'
            }
        },
        csscomb: {
            core: {
                options: {
                    config: '.csscomb.json'
                },
                files: {
                    '_assets/css/style.css': '_assets/css/style.css'
                }
            }
        }
    });
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
    require('time-grunt')(grunt);
    grunt.registerTask('css', ['csscomb', 'cssmin']);
    grunt.registerTask('default', ['css']);
};
