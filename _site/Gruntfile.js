module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        watch: {
            css: {
                files: 'assets/css/*.scss',
                task: 'sass'
            },
        },

        sass: {
            dist: {
                options: {
                    watch: true,
                    style: 'expanded'
                },
                files: {
                    'assets/css/style.scss': 'assets/css/style.css'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass','watch']);
};