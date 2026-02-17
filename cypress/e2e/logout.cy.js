import { LogoutPage } from '../page/LogoutPage';
import { createUserAdm } from '../services/user.service';

describe('Logout', () => {

  before(() => {
    createUserAdm().then((user) => {
      Cypress.env('USUARIO_GLOBAL_ADM', user);
      cy.log('Usuário global criado: ' + JSON.stringify(user));
    })
  })

  beforeEach(() => {
    cy.loginUIAdmin();
  })

  it('Logout admin user success', () => {
    LogoutPage.clickLogout();
    LogoutPage.validateLogout();
  })
})
