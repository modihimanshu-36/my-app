module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['qunit', 'esm'],
      files: [
        { pattern: 'src/test/js/**/*.test.js', type: 'module' }
      ],
      plugins: [
        'karma-qunit',
        'karma-chrome-launcher',
        require('@open-wc/karma-esm')
      ],
      esm: {
        nodeResolve: true,
        coverage: false
      },
      browsers: ['ChromeHeadless'],
      reporters: ['progress'],
      singleRun: true,
      autoWatch: false
    });
  };