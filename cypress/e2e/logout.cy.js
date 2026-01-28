import { LogoutPage } from '../page/LogoutPage'

describe('Logout', () => {

  beforeEach(() => {
    const user = Cypress.env('USUARIO_GLOBAL')
    cy.loginUI(user.email, user.password)
  })

  it('Logout success', () => {
    LogoutPage.clickLogout()
    LogoutPage.validateLogout()
  })
})
