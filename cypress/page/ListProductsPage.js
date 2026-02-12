export class ListProductsPage {

  //clicar no botão Listar Produtos após logar
  static clickListarProdutos() {
    cy.get('[data-testid="listar-produtos"]').click();
    
    //validar se a página de Lista de produtos foi carregada
    cy.get('h1').contains('Lista dos Produtos').should('be.visible');
  }

  //validar colunas na tela de Lista dos Produtos
  static validateColumns() {
    
    //Coluna Nome
    cy.get('thead > tr > :nth-child(1)').contains('Nome').should('be.visible');

    //Coluna Preço
    cy.get('thead > tr > :nth-child(2)').contains('Preço').should('be.visible');

    //Coluna Descrição
    cy.get('thead > tr > :nth-child(3)').contains('Descrição').should('be.visible');

    //Coluna Quantidade
    cy.get('thead > tr > :nth-child(4)').contains('Quantidade').should('be.visible');

    //Coluna Imagem
    cy.get('thead > tr > :nth-child(5)').contains('Imagem').should('be.visible');

    //Coluna Ações
    cy.get('thead > tr > :nth-child(6)').contains('Ações').should('be.visible');
  }

  
}