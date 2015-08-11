module.exports = function(grunt) {

    grunt.initConfig({

        protractor: {
            options: {
                keepAlive: true,
                noColor: false,
                args: {}
            },
            cucumber: {
                configFile: "protractor-conf-cucumber.js"
            },
            jasmine: {
                configFile: "protractor-conf-jasmine.js"
            }
        },

        jsdoc : {
            dist : {
                src: ['features/**/*.js'],
                options: {
                    destination: 'doc'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.registerTask('protractor-cucumber', ['protractor:cucumber']);
    grunt.registerTask('protractor-jasmine', ['protractor:jasmine']);

};