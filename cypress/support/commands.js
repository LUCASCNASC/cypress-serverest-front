import 'cypress-file-upload';

Cypress.Commands.add('login', (email, senha) => { 

  cy.get('[data-testid="email"]').type(email)
  cy.get('[data-testid="senha"]').type(senha)
  cy.get('[data-testid="entrar"]').click()

  cy.intercept('GET', '**/usuarios').as('apiUsuarios')
  cy.wait('@apiUsuarios', { timeout: 40000 })
 })
