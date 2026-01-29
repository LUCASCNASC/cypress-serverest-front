import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'

const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      supportFile: 'cypress/support/e2e.js',
      // Tornar variáveis disponíveis no Cypress
      config.env.EMAIL_USER_VALID = process.env.EMAIL_USER_VALID
      config.env.SENHA_USER_VALID = process.env.SENHA_USER_VALID

      return config
    },

    fixturesFolder: false,
    specPattern: 'cypress/e2e/**/*.feature',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config)
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
      }))

      return config
    },
    
    baseUrl: 'https://front.serverest.dev/'
  },
});
