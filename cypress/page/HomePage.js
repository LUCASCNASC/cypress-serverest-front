export class HomePage {

  //clicar no botão Home após logar
  static clickHome() {
    cy.get('[data-testid="home"]').click();
    
    //validar se a página de Lista de compras foi carregada
    cy.get('h1').contains('Serverest Store').should('be.visible');
  }

  
}