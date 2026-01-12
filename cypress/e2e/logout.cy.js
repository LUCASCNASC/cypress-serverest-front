import { LogoutPage } from '../page/LogoutPage';

describe('Logout', () => {

  beforeEach(() => {
      cy.visit('/');
      cy.login(
        Cypress.env('EMAIL_USER_VALID'),
        Cypress.env('SENHA_USER_VALID')
      );
  })

  it('Logout sucess', () => {
    
    LogoutPage.clickLogout();
    LogoutPage.validateLogout();
  })
})