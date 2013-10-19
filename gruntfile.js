module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        qunit: {
            files: ['test/validate-jsons.js']
        }
    });

    // Task to run tests
    grunt.registerTask('test', 'qunit');
};