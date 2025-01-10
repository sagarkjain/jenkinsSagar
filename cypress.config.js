const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      specPattern: "cypress/e2e/**/*.cy.js"
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'mocha-junit-reporter',
    reporterOptions:{
      mochaFile: 'cypress/reports/junit/test-results-[hash].xml',
      toConsole: true,
    }
  },
});
