import { faker } from '@faker-js/faker';
import { createUser } from '../services/user.service';
import { ReportsPage } from '../page/ReportsPage';

describe('Relatórios', () => {

  before(() => {
      createUser().then((user) => {
        Cypress.env('USUARIO_GLOBAL', user)
        cy.log('Usuário global criado: ' + JSON.stringify(user))
      })
    })
  
  beforeEach(() => {
    cy.loginUI()
})

  it('Relatórios', () => {

    ReportsPage.clickRelatorios();
  })
})