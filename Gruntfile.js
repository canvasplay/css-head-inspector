module.exports = function(grunt) {


    grunt.initConfig({
      
        sass: {
          options: {
            style: 'expanded',
            sourceMap: true
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
    
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    
    grunt.registerTask('default', ['styles', 'watch']);
    grunt.registerTask('styles', ['sass']);
    

};