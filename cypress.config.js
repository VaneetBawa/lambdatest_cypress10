const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    baseUrl: "https://bestbuy.com/",
    chromeWebSecurity: false,
    defaultCommandTimeout: 20000
  },
});
