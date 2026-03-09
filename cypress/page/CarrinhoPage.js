export class CarrinhoPage {

  //clicar no botão Carrinho após logar
  static clickHome() {
    cy.get('[data-testid="carrinho"]').click();
    
    //validar se a página de Lista de compras foi carregada
    cy.get('h1').contains('Em construção aguarde').should('be.visible');
  };
};
