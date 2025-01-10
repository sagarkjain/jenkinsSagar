const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      specPattern: "cypress/e2e/**/*.cy.js"
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "Cypress Test Report",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    }
  },
});
