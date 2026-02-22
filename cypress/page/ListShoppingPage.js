export class ListShoppingPage {

  //clicar no botão Listar de Compras após logar
  static clickListarCompras() {
    cy.get('[data-testid="lista-de-compras"]').click();
    
    //validar se a página de Lista de compras foi carregada
    cy.get('h1').contains('Lista de Compras').should('be.visible');
    cy.get('[data-testid="shopping-cart-empty-message"]').should('be.visible').and('contain', 'Seu carrinho está vazio');
  }

  
}