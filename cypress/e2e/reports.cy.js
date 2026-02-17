import { faker } from '@faker-js/faker';
import { createUserAdm } from '../services/user.service';
import { ReportsPage } from '../page/ReportsPage';

describe('Relatórios', () => {

  before(() => {
      createUserAdm().then((user) => {
        Cypress.env('USUARIO_GLOBAL_ADM', user);
        cy.log('Usuário global criado: ' + JSON.stringify(user));
      })
    })
  
  beforeEach(() => {
    cy.loginUIAdmin();
})

  it('Relatórios', () => {

    ReportsPage.clickRelatorios();
  })
})