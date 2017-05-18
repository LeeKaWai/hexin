'use strict';

module.exports = {
  coverage: {
    src: ['test/*.js', 'test/**/*.js'],
    options: {
      coverage: true,
      reporter: 'spec',
      istanbulOptions: ['--include-all-sources', '-x', '**/grunt-config/**', '-x', 'Gruntfile.js'],
      timeout: 5000,
    },
  },
};
