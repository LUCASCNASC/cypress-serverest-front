describe('validate register user page', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('validate register user page', () => {

    //entrar na tela de cadastro
    cy.get('[data-testid="cadastrar"]')
      .click();

    //imagem SERVEREST
    cy.get('.imagem')
        .should("be.visible");

    //titulo Login
    cy.get('.font-robot')
        .should("be.visible")
        .and("contain.text", "Cadastro");

    //campo Digite seu nome
    cy.get('[data-testid="nome"]')
        .should('have.attr', 'placeholder', 'Digite seu nome')
        .and("be.visible")
        .and("have.value", "")
        .type("teste")
        .should("have.value", "teste")
        .clear()
        .and("have.value", "");

    //campo Digite seu email
    cy.get('[data-testid="email"]')
        .should('have.attr', 'placeholder', 'Digite seu email')
        .and("be.visible")
        .and("have.value", "")
        .type("teste")
        .should("have.value", "teste")
        .clear()
        .and("have.value", "");

    //campo Digite sua senha
    cy.get('[data-testid="password"]')
        .should('have.attr', 'placeholder', 'Digite sua senha')
        .and("be.visible")
        .and("have.value", "")
        .type("teste")
        .should("have.value", "teste")
        .clear()
        .and("have.value", "");

    //validar check box 
    cy.get('[data-testid="checkbox"]')
      .should('be.visible')
      .and('not.be.checked');

    cy.get('[data-testid="checkbox"]')
        .check()
        .should('be.checked');

    //validar botão "Cadastrar"
    cy.get('[data-testid="cadastrar"]')
        .should('have.css', 'background-color', 'rgb(96, 57, 133)')
        .and("be.visible")
        .and("not.be.disabled")
        .and('have.text', 'Cadastrar');

    //validar texto "Já é cadastrado?"
    cy.get('.message')
        .should("be.visible")
        .and("contain.text", "Já é cadastrado?");

    //validar botão "Entrar"
    cy.get('[data-testid="entrar"]')
        .should("be.visible")
        .and('not.be.disabled')
        .and('have.text', 'Entrar')
        .and('have.css', 'color', 'rgb(96, 57, 133)');
  });
  
});
