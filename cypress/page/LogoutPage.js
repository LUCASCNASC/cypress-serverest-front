export class LogoutPage {

  static clickLogout() {
    cy.get('[data-testid="logout"]').should('be.visible').click()
  }

  static validateLogout() {
    cy.url().should('include', '/login')

    cy.get('[data-testid="email"]').should('be.visible')
    cy.get('[data-testid="senha"]').should('be.visible')

    cy.window().then(win => {
      expect(win.localStorage.getItem('serverest/userToken')).to.be.null
    })
  }
}
