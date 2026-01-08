export class LoginPage {

  //preencher "Digite seu email" 
  static fillEmail(email) {
    cy.get('[data-testid="email"]').type(email)
  }

  //preencher "Digite sua senha" 
  static fillSenha(nome) {
    cy.get('[data-testid="senha"]').type(nome)
  }

  //clicar em Entrar, para efetuar o Login
  static clickEntrar() {
    cy.get('[data-testid="entrar"]').click()
  }

  //validar que login ocorreu corretamente
  static validateLoginSucess() {
    cy.intercept('GET', '**/usuarios').as('apiUsuarios');
    cy.wait('@apiUsuarios', { timeout: 40000 });

    cy.get('.lead')
        .should("be.visible")
        .and("contain.text", "Este é seu sistema para administrar seu ecommerce.")
  }

  //validar tentativa de cadastro de usuário sem email
  static validateEmailObrigatorio() {
    cy.get('.alert > :nth-child(2)')
        .should("be.visible")
        .and("contain.text", "Email é obrigatório")
  }

  //validar tentativa de cadastro de usuário sem senha
  static validateSenhaObrigatorio() {
    cy.get('.alert > :nth-child(2)')
        .should("be.visible")
        .and("contain.text", "Password é obrigatório")
  }
  
}