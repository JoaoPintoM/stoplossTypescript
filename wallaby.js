module.exports = function () {

  return {
    files: [
      '__tests__/*/*.ts',
      '!__tests__/**/*.spec.ts',
      '__tests__/tools/index.ts',
      'src/**',
      'package.json' // <--
       ],

    tests: [
      '__tests__/*.spec.ts',
      '__tests__/**/*.spec.ts'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    setup: function (wallaby) {
      var jestConfig = require('./package.json').jest;
      jestConfig.globals = { "__DEV__": true };
      wallaby.testFramework.configure(jestConfig);
    }
  };
};
