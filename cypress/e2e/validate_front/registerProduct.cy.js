import { RegisterProductPage } from '../../page/RegisterProductPage';

describe('validate register product page', () => {
  
  beforeEach(() => {
    cy.loginUIAdmin();
    RegisterProductPage.clickCadastrarProdutos();
})

  it('validate register product page', () => {

    //imagem SERVEREST
    cy.get('.imagem')
        .should("be.visible");

    //validar menu Home
    cy.get('[data-testid="home"]')
      .should("be.visible")
      .and("not.be.disabled")
      .and('have.text', 'Home');

    //validar menu Cadastrar Usuários
    cy.get('[data-testid="cadastrar-usuarios"]')
      .should("be.visible")
      .and("not.be.disabled")
      .and('have.text', 'Cadastrar Usuários');

    //validar menu Listar Usuários
    cy.get('[data-testid="listar-usuarios"]')
      .should("be.visible")
      .and("not.be.disabled")
      .and('have.text', 'Listar Usuários');

    //validar menu Cadastrar Produtos
    cy.get('[data-testid="cadastrar-produtos"]')
      .should("be.visible")
      .and("not.be.disabled")
      .and('have.text', 'Cadastrar Produtos');

    //validar menu Listar Produtos
    cy.get('[data-testid="listar-produtos"]')
      .should("be.visible")
      .and("not.be.disabled")
      .and('have.text', 'Listar Produtos');

    //validar menu Relatórios
    cy.get('[data-testid="link-relatorios"]')
      .should("be.visible")
      .and("not.be.disabled")
      .and('have.text', 'Relatórios');

    //validar botão "Logout"
    cy.get('[data-testid="logout"]')
      .should("be.visible")
      .and("not.be.disabled")
      .and('have.text', 'Logout');

    //validar título "Cadastro de Produtos"
    cy.get('h1')
      .should("be.visible")
      .and('have.text', 'Cadastro de Produtos');

    //validar campo "Nome:*"
    cy.get(':nth-child(3) > .mb-3 > .form-label')
      .should("be.visible")
      .and("contain.text", "Nome: *");

    cy.get('[data-testid="nome"]')
        .should('have.attr', 'placeholder', 'Digite o nome do produto')
        .and("be.visible")
        .and("have.value", "")
        .type("teste")
        .should("have.value", "teste")
        .clear()
        .and("have.value", "");

    //validar campo "Preço:*"
    cy.get(':nth-child(4) > .mb-3 > .form-label')
      .should("be.visible")
      .and("contain.text", "Preço: *");

    cy.get('[data-testid="preco"]')
        .should('have.attr', 'placeholder', 'Digite o valor do produto')
        .and("be.visible")
        .and("have.value", "")
        .type("123")
        .should("have.value", "123")
        .clear()
        .and("have.value", "");

    //validar campo "Descrição:*"
    cy.get(':nth-child(5) > .mb-3 > .form-label')
      .should("be.visible")
      .and("contain.text", "Descrição: *");

    cy.get('[data-testid="descricao"]')
        .should('have.attr', 'placeholder', 'Digite a descrição do produto')
        .and("be.visible")
        .and("have.value", "")
        .type("teste")
        .should("have.value", "teste")
        .clear()
        .and("have.value", "");
      
    //validar campo "Quantidade:*"
    cy.get(':nth-child(6) > .mb-3 > .form-label')
      .should("be.visible")
      .and("contain.text", "Quantidade: *");

    cy.get('[data-testid="quantity"]')
        .should('have.attr', 'placeholder', 'Digite aquantidade do produto')
        .and("be.visible")
        .and("have.value", "")
        .type("123")
        .should("have.value", "123")
        .clear()
        .and("have.value", "");

    //validar campo "Imagem:*"
    cy.get(':nth-child(7) > .mb-3 > .form-label')
      .should("be.visible")
      .and("contain.text", "Imagem: *");

    cy.get('[data-testid="imagem"]')
        .should("be.visible");
        // .and("have.value", "")
        // .type("123")
        // .should("have.value", "123")
        // .clear()
        // .and("have.value", "")

  })
  
})
