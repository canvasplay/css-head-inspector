module.exports = function(grunt) {


    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        'regex-replace':{
          'version':{
            src: 'head.scss',
            actions: [
              {
                name: 'version',
                search: /\$version:\s*\S*;/g,
                replace: "$version: '<%= pkg.version %>';"
              }
            ]
          }
        },

        sass: {
          options: {
            outputStyle: 'expanded',
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



        bump: {
          options: {
            files: ['package.json'],
            commit: false,
            createTag: false,
            push: false
          }
        }
        
    });
    
    //grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-regex-replace');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-sass');
    
    grunt.registerTask('version', ['bump', 'regex-replace']);
    grunt.registerTask('styles', ['sass']);
    grunt.registerTask('default', ['styles']);
    
    

};