export class CadastrarProdutoPage {

  //clicar no botão Cadastrar Produtos após logar
  static clickCadastrarProdutos() {
    cy.get('[data-testid="cadastrar-produtos"]').click();
    
    //validar se a página de cadastro de produtos foi carregada
    cy.get('h1').contains('Cadastro de Produtos').should('be.visible');
  }

  //preencher campo Nome
  static fillNome(nome) {
    cy.get('[data-testid="nome"]').type(nome)
  }

  //preencher campo Preço
  static fillPreco(preco) {
    cy.get('[data-testid="preco"]').type(preco)
  }

  //preencher campo Descrição
  static fillDescricao(descricao) {
    cy.get('[data-testid="descricao"]').type(descricao)
  }

  //preencher campo Quantidade
  static fillQuantidade(quantidade) {
    cy.get('[data-testid="quantity"]').type(quantidade)
  }

  //preencher campo Anexar arquivo
  static attachFile() {
    cy.get('[data-testid="imagem"]').attachFile('pdf_teste_cypress.pdf')
  }

  //clicar para confirmar cadastro, salvando o produto
  static clickConfirmCadastro() {
    cy.get('[data-testid="cadastarProdutos"]').click()
  }

  //validar cadastro de produto, redirecionando para a lista de produtos
  static validateNewProduct() {
    cy.contains('Lista dos Produtos').should('be.visible')
  }

  //validar mensagem de erro ao tentar cadastrar produto sem nome
  static validateNameObrigario() {
    cy.contains('Nome é obrigatório').should('be.visible')
  }
}