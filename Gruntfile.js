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
            }
        }
    });

    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.registerTask('protractor-cucumber', ['protractor:cucumber']);
};