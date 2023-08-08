const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsBuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;


module.exports = defineConfig({
  projectId: 'r2d376',
  env: {
    standardUser: {
      username: 'standard_user',
      password: 'secret_sauce'
    },
    lockedOutUser: {
      username: 'locked_out_user',
      password: 'secret_sauce'
    }
  },
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      const bundler = createBundler({
        plugins: [createEsBuildPlugin(config)],
      });
      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: 'cypress/features/*.feature',
    baseUrl: 'https://www.saucedemo.com/',
    viewportHeight: 1000,
    viewportWidth: 1280,
    retries: {
      runMode: 2,
      openMode: 1
    },
    defaultCommandTimeout: 8000,
    requestTimeout: 6000,
    responseTimeout: 30000,
    experimentalStudio: true,
    chromeWebSecurity: false,
    video: false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      overwrite: true,
      html: true,
      json: true,
      reportDir: 'cypress/reports'
    }
  }
});