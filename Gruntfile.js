module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        typescript: {
            base: {
                src: ['src/**/*.ts'],
                dest: 'out/tunnel.js',
                options: {
                    module: 'amd', //or commonjs 
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'out/tunnel.min.js': ['out/tunnel.js']
                }
            }
        },
        jade: {
            html: {
                files: {
                    'out/docs/': ['src/docs/*.jade']
                },
                options: {
                    client: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jade');

    grunt.registerTask('default', ['typescript:base', 'uglify', 'jade']);

};