module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            one: {options: {
                banner: "/*\n* grrd's Puzzle\n* Copyright (c) 2012 Gerard Tyedmers, grrd@gmx.net\n* Licensed under the MPL License\n*/\n",
                mangle: true,
                compress: true
            },
                files: {
                    '../../2_Build/Puzzle/Scripts/puzzle.js': ['Scripts/puzzle.js']
                }
            },
            two: {
                options: {
                    banner: "/*\n* grrd's Puzzle\n* Copyright (c) 2012 Gerard Tyedmers, grrd@gmx.net\n* Licensed under the MPL License\n*/\n",
                    mangle: true,
                    compress: true
                },
                files: {
                    '../../2_Build/Puzzle/sw.js': ['sw.js']
                }
            },
            three: {
                options: {
                    banner: "/*\n* Copyright (c) 2011-2013 Fabien Cazenave, Mozilla.\n*/\n",
                    mangle: true,
                    compress: true
                },
                files: {
                    '../../2_Build/Puzzle/Scripts/l10n.js': ['Scripts/l10n.js']
                }
            },
            four: {
                options: {
                    banner: "/*\n* Javascript EXIF Reader 0.1.4\n* Copyright (c) 2008 Jacob Seidelin, cupboy@gmail.com, http://blog.nihilogic.dk/\n* Licensed under the MIT License (MIT) [https://github.com/exif-js/exif-js/blob/master/LICENSE.md]\n*/\n",
                    mangle: true,
                    compress: true
                },
                files: {
                    '../../2_Build/Puzzle/Scripts/exif.js': ['Scripts/exif.js']
                }
            }
        },
        svgmin: {
            options: {
                plugins: [
                    {removeUnknownsAndDefaults: false},
                    {removeViewBox: false}
                ]
            },
            dist: {
                files: [
                    {'../../2_Build/Puzzle/Images/4inarow.svg': 'Images/4inarow.svg'},
                    {'../../2_Build/Puzzle/Images/bullets0.svg': 'Images/bullets0.svg'},
                    {'../../2_Build/Puzzle/Images/bullets0o.svg': 'Images/bullets0o.svg'},
                    {'../../2_Build/Puzzle/Images/bullets1.svg': 'Images/bullets1.svg'},
                    {'../../2_Build/Puzzle/Images/bullets1o.svg': 'Images/bullets1o.svg'},
                    {'../../2_Build/Puzzle/Images/dice.svg': 'Images/dice.svg'},
                    {'../../2_Build/Puzzle/Images/easy.svg': 'Images/easy.svg'},
                    {'../../2_Build/Puzzle/Images/easy_gold.svg': 'Images/easy_gold.svg'},
                    {'../../2_Build/Puzzle/Images/hard.svg': 'Images/hard.svg'},
                    {'../../2_Build/Puzzle/Images/hard_gold.svg': 'Images/hard_gold.svg'},
                    {'../../2_Build/Puzzle/Images/info.svg': 'Images/info.svg'},
                    {'../../2_Build/Puzzle/Images/lock.svg': 'Images/lock.svg'},
                    {'../../2_Build/Puzzle/Images/mail.svg': 'Images/mail.svg'},
                    {'../../2_Build/Puzzle/Images/medal1.svg': 'Images/medal1.svg'},
                    {'../../2_Build/Puzzle/Images/medal2.svg': 'Images/medal2.svg'},
                    {'../../2_Build/Puzzle/Images/medal3.svg': 'Images/medal3.svg'},
                    {'../../2_Build/Puzzle/Images/medium.svg': 'Images/medium.svg'},
                    {'../../2_Build/Puzzle/Images/medium_gold.svg': 'Images/medium_gold.svg'},
                    {'../../2_Build/Puzzle/Images/next.svg': 'Images/next.svg'},
                    {'../../2_Build/Puzzle/Images/photo.svg': 'Images/photo.svg'},
                    {'../../2_Build/Puzzle/Images/prev.svg': 'Images/prev.svg'},
                    {'../../2_Build/Puzzle/Images/puzzle.svg': 'Images/puzzle.svg'},
                    {'../../2_Build/Puzzle/Images/settings.svg': 'Images/settings.svg'},
                    {'../../2_Build/Puzzle/Images/tictactoe.svg': 'Images/tictactoe.svg'}
                ]
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: 'Images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '../../2_Build/Puzzle/Images/'
                }]
            },
            dist2: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: 'Scripts/images',
                    src: ['*.{png,jpg,gif}'],
                    dest: '../../2_Build/Puzzle/Scripts/images/'
                }]
            }
        },
        cssmin: {
            dist: {
                options: {
                    banner: "/*\n* grrd's Puzzle\n* Copyright (c) 2012 Gerard Tyedmers, grrd@gmx.net\n* Licensed under the MPL License\n*/\n"
                },
                files: {
                    '../../2_Build/Puzzle/Scripts/puzzle.css': ['Scripts/puzzle.css']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    src: 'index.html',
                    dest: '../../2_Build/Puzzle'
                }]
            }
        },
        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: /\<\!DOCTYPE html\>/g,
                            replacement: function () {
                                return "<!DOCTYPE html>\n<!-- \n* grrd's Puzzle \n* Copyright (c) 2012 Gerard Tyedmers, grrd@gmx.net \n* Licensed under the MPL License\n-->\n";
                            }
                        }
                    ]
                },
                files: [
                    {expand: true, flatten: true, src: ['../../2_Build/Puzzle/index.html'], dest: '../../2_Build/Puzzle/'}
                ]
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, src: ['Locales/**'], dest: '../../2_Build/Puzzle/'},
                    {expand: true, flatten: true, src: ['Manifest/*'], dest: '../../2_Build/Puzzle/Manifest/'},
                    {expand: true, flatten: true, src: ['Images/*.ico'], dest: '../../2_Build/Puzzle/Images/'},
                    {expand: true, flatten: true, src: ['Scripts/jquery*.*'], dest: '../../2_Build/Puzzle/Scripts/'},
                    {expand: true, flatten: true, src: ['Scripts/swipe*.*'], dest: '../../2_Build/Puzzle/Scripts/'},
                    {expand: true, flatten: true, src: ['Scripts/kinetic*.*'], dest: '../../2_Build/Puzzle/Scripts/'},
                    {expand: true, flatten: true, src: ['Sounds/*'], dest: '../../2_Build/Puzzle/Sounds/'},
                    {expand: true, flatten: true, src: ['**.txt'], dest: '../../2_Build/Puzzle/'},
                    {expand: true, flatten: true, src: ['**.md'], dest: '../../2_Build/Puzzle/'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', [
        'uglify',
        'svgmin',
        'imagemin',
        'cssmin',
        'htmlmin',
        'replace',
        'copy'
    ]);


};