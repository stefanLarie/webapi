module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'node_modules/angular/angular.js',
      'node_modules/ui-router/release/angular-ui-router.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'dist/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
