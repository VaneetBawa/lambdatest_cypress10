const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
  requestTimeout: 360000,
  responseTimeout: 360000,
  pageLoadTimeout: 360000
    },
  },
});
