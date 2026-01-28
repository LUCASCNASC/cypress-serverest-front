// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

before(() => {
  const email = `global_${Date.now()}@qa.com`

  cy.request('POST', 'https://serverest.dev/usuarios', {
    nome: 'Usuario Global QA',
    email,
    password: '123456',
    administrador: 'true'
  }).then(() => {
    Cypress.env('USUARIO_GLOBAL', {
      email,
      password: '123456'
    })
  })
})