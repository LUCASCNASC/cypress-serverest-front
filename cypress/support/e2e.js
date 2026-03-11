import './commands'
import { createUserAdm, createUserNormal } from '../services/user.service'

before(() => {
  const email = `global_${Date.now()}@qa.com`

  cy.request('POST', 'https://serverest.dev/usuarios', {
    nome: 'Usuario Global QA Adm',
    email,
    password: '123456',
    administrador: 'true'
  }).then(() => {
    Cypress.env('USUARIO_GLOBAL_ADM', {
      email,
      password: '123456'
    })
  })
})

before(() => {
  createUserAdm().then((user) => {
    Cypress.env('USUARIO_GLOBAL_ADM', user)
  })
})

before(() => {
  const email = `global_${Date.now()}@qa.com`

  cy.request('POST', 'https://serverest.dev/usuarios', {
    nome: 'Usuario Global QA Normal',
    email,
    password: '123456',
    administrador: 'false'
  }).then(() => {
    Cypress.env('USUARIO_GLOBAL_NORMAL', {
      email,
      password: '123456'
    })
  })
})

before(() => {
  createUserNormal().then((user) => {
    Cypress.env('USUARIO_GLOBAL_NORMAL', user)
  })
})
