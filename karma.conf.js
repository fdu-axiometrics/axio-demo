// Karma configuration
// Generated on Mon Feb 22 2016 15:10:14 GMT-0600 (Central Standard Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'www/vendor/js/jquery.js',
            'www/vendor/js/angular.js',
            'www/vendor/js/angular-mocks.js',
            'www/vendor/js/angular-animate.js',
            'www/vendor/js/angular-sanitize.js',
            'www/vendor/js/angular-ui-router.js',

            'www/vendor/js/bootstrap.js',
            'www/vendor/js/moment.js',
            'www/vendor/js/toastr.js',

            'www/app/app.module.js',
            'www/app/**/*.module.js',
            'www/app/**/*.js',

            'www/test/**/*.spec.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'www/app/**/*.js': 'coverage'
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],//, 'html', 'coverage'],

        htmlReporter: {
            outputFile: 'tests_reports/unit/unit_testing.html',

            // Optional
            pageTitle: 'Unit Tests',
            subPageTitle: 'Axiometrics XX Project Unit Testing Results'
        },

        coverageReporter: {
            type : 'html',
            dir : 'tests_reports/coverage/'
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-htmlfile-reporter'
        ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
