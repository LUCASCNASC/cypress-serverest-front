export class LogoutPage {

  //clicar no botão Logout
  static clickLogout() {
    cy.get('[data-testid="logout"]').click();
  }

  //validar Logout
  static validateLogout() {
    cy.get('[data-testid="email"]').should("be.visible");
    cy.get('[data-testid="senha"]').should("be.visible");
    cy.get('[data-testid="entrar"]').should("be.visible");
  }
  
}