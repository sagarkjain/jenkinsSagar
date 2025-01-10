const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Use the JUnit reporter for test results
      on('after:run', (results) => {
        // Custom logic can go here if needed
      });
    },
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'cypress/results/test-output-[hash].xml',  // Path to save XML report
      toConsole: true,  // Print JUnit output to the console
    },
    specPattern: 'cypress/e2e/**/*.cy.js', // Spec pattern for tests
  },
});
