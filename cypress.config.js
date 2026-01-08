const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      // Tornar variáveis disponíveis no Cypress
      config.env.EMAIL_USER_VALID = process.env.EMAIL_USER_VALID
      config.env.SENHA_USER_VALID = process.env.SENHA_USER_VALID

      return config
    },
    baseUrl: 'https://front.serverest.dev/'
  },
});
