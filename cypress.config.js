const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'r2d376',
  // THE CORRECT WAY
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
    specPattern: 'cypress/e2e',
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
      json: false,
      reportDir: 'cypress/report'
    }
  }
})