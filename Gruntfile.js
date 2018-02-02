module.exports = function(grunt) {


	grunt.initConfig({

		'regex-replace': {
			'foo': {
				src: ['index.html', 'head.scss', 'head.css'],
				actions: [{
					name: 'version',
					search: /v(\d+\.\d+\.\d+)/gm,
					replace: "v<%= grunt.file.readJSON('package.json').version %>"
				}]
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

	grunt.loadNpmTasks('grunt-regex-replace');
	grunt.loadNpmTasks('grunt-bump');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('version', ['bump', 'regex-replace']);
	grunt.registerTask('styles', ['sass']);
	grunt.registerTask('default', ['styles']);
	grunt.registerTask('regex', ['regex-replace']);

};