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
        },
        watch: {
            scripts: {
                files: '**/*.html',
                tasks: ['notify:livereload'],
                options: {
                    interrupt: true,
                  },
              },
          },
          notify: {
              livereload: {
                  options: {
                      title: 'Live Reload',
                      message: 'Files updated'
                  }
              }
          },
    });

    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
};
