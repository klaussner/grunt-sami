/*
 * grunt-sami
 * https://github.com/christianklaussner/grunt-sami
 *
 * Copyright (c) 2016 Christian Klaussner
 * Licensed under the MIT license
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove previously created files
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested)
    sami: {
      test: {
        options: {
          verbose: false
        },
        src: 'test/fixtures/config.php'
      }
    },

    // Unit tests
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Load this plugin's task(s)
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result
  grunt.registerTask('test', ['clean', 'sami', 'nodeunit']);

  // By default, lint and run all tests
  grunt.registerTask('default', ['jshint', 'test']);
};
