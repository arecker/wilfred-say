module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				banner: '/**\n' +
						' * <%= pkg.name %> - v<%= pkg.version %> \n' +
						' * <%= pkg.description %> \n' +
						' * <%= pkg.repository.url %> \n' +
						' **/\n',
				mangle: true
			},
			my_target: {
				files: {
					'wilfred-say.js': ['src/quotes.js', 'src/prototypes.js', 'src/main.js']
				}
			}
		},

		jshint: {
			all: ['src/*'],
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				camelcase: true,
				forin: true,
				funcscope: true,
				latedef: true,
				maxparams: 5,
				futurehostile: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint', 'uglify']);

};
