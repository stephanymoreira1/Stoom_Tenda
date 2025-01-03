const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://marketplace-alpha.tendaatacado.com.br/",
    setupNodeEvents(on, config) {
      config.defaultCommandTimeout = 10000;
      config.requestTimeout = 10000;
    },
  },
});
