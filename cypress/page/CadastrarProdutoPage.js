export class CadastrarProdutoPage {

  //clicar no botão Cadastrar Produtos após logar
  static clickCadastrarProdutos() {
    cy.get('[data-testid="cadastrar-produtos"]').click();
    
    //validar se a página de cadastro de produtos foi carregada
    cy.get('h1').contains('Cadastro de Produtos').should('be.visible');
  }

  
}