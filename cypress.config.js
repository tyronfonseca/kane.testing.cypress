const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.baseUrl = "https://kane-customer.web.app"

      //Cellphone
      config.viewportHeight = 858
      config.viewportWidth = 425

      return config
    },
  },
});
