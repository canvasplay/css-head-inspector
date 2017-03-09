module.exports = function(grunt) {


    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
          options: {
            outputStyle: 'compressed',
            sourceMap: false
          },
          dist: {
            files: [{
                expand: true,
                cwd: './',
                src: 'head.scss',
                dest: './',
                ext: '.css'
            }]
          }
        },

        'regex-replace':{
          'version':{
            src: 'head.css',
            actions: [
              {
                name: 'version',
                search: '@version',
                replace: '<%= pkg.version %>'
              }
            ]
          }
        },

        bump: {
          options: {
            files: ['package.json'],
            commit: false,
            createTag: false,
            push: false
          }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-regex-replace');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-sass');
    
    grunt.registerTask('version', ['bump']);
    grunt.registerTask('styles', ['sass', 'regex-replace']);
    grunt.registerTask('default', ['styles']);
    
    

};