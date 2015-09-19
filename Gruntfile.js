module.exports = function(grunt) {
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    livereload: true,
                    open: true,
                    keepalive: true,
                    base: "./src/"
                }
            }
        }
    });
     
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-connect');
};