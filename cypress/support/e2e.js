import './commands'
import { createUser } from '../services/user.service'

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

before(() => {
  createUser().then((user) => {
    Cypress.env('USUARIO_GLOBAL', user)
  })
})