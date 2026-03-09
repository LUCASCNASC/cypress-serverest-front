import { LogoutPage } from '../page/LogoutPage';

describe('Logout', () => {

  beforeEach(() => {
    cy.loginUIAdmin();
  })

  it('Logout admin user success', () => {
    LogoutPage.clickLogout();
    LogoutPage.validateLogout();
  });
  
});