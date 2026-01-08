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
  static clickCadastrar() {
    cy.get('[data-testid="entrar"]').click()
  }
  
}