export class RegisterUserPage {
  
  //clicar em Cadastrar, na tela de Login.
  static clickCadastrar() {
    cy.get('[data-testid="cadastrar"]').click()
  }

  //preencher "Digite seu nome" 
  static fillNome(nome) {
    cy.get('[data-testid="nome"]').type(nome)
  }

  //preencher "Digite seu email" 
  static fillEmail(email) {
    cy.get('[data-testid="email"]').type(email)
  }

  //preencher "Digite sua senha" 
  static fillSenha(senha) {
    cy.get('[data-testid="password"]').type(senha)
  }

  //marcar checkbox "Cadastrar como administrador?"
  static selectAdministrador() {
    cy.get('#administrador').check()
  }

  //clicar em Cadastrar, na tela de Cadastro, confirmando novo cadastro.
  static clickConfirmCadastrar() {
    cy.get('[data-testid="cadastrar"]').click()
  }

  //após cadastrar, validar que cadastrou com sucesso e que houve o login
  static validateNewRegister() {
    cy.get('.alert-link')
      .should("be.visible")
      .and("contain.text", "Cadastro realizado com sucesso")

    cy.intercept('GET', '**/usuarios').as('apiUsuarios');
    cy.wait('@apiUsuarios', { timeout: 40000 });

    cy.get('.lead')
        .should("be.visible")
        .and("contain.text", "Este é seu sistema para administrar seu ecommerce.")
  }

  //validar tentativa de cadastro de usuário sem nome
  static validateNomeObrigatorio() {
    cy.get('.alert > :nth-child(2)')
        .should("be.visible")
        .and("contain.text", "Nome é obrigatório")
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