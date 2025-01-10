const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Clean up old JUnit reports before running tests
      on('before:run', () => {
        const resultsDir = path.join(__dirname, 'cypress/results');
        
        try {
          // Check if the results directory exists
          if (fs.existsSync(resultsDir)) {
            // Get all files in the results directory
            const files = fs.readdirSync(resultsDir);
            
            // Loop through the files and delete any old result files (.xml, .json)
            files.forEach((file) => {
              const filePath = path.join(resultsDir, file);
              // Only delete .xml and .json files (JUnit and other result files)
              if (file.endsWith('.xml') || file.endsWith('.json')) {
                fs.unlinkSync(filePath);  // Delete the file
                console.log(`Deleted old report: ${file}`);
              }
            });
          }

        } catch (err) {
          console.error('Error cleaning old result files:', err);
        }
      });

      // Other Cypress setup events can be added here
      on('after:run', (results) => {
        // Custom logic after tests run (if needed)
      });
    },

    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'cypress/results/test-output-[hash].xml',  // Path to save the new JUnit XML report
      toConsole: true,  // Print the JUnit output to the console
    },
    specPattern: 'cypress/e2e/**/*.cy.js',  // Spec pattern for tests
  },
});
