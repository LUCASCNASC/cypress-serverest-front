import { LogoutPage } from '../page/LogoutPage';
import { createUser } from '../services/user.service';

describe('Logout', () => {

  before(() => {
    createUser().then((user) => {
      Cypress.env('USUARIO_GLOBAL', user)
      cy.log('Usuário global criado: ' + JSON.stringify(user))
    })
  })

  beforeEach(() => {
    cy.loginUI()
  })

  it('Logout success', () => {
    
    LogoutPage.clickLogout()
    LogoutPage.validateLogout()
  })
})
