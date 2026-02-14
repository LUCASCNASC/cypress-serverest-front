describe('validate login page', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('validate login page', () => {

    //imagem SERVEREST
    cy.get('.imagem')
        .should("be.visible")

    //titulo Login
    cy.get('.font-robot')
        .should("be.visible")
        .and("contain.text", "Login")

    //campo Digite seu email
    cy.get('[data-testid="email"]')
        .should('have.attr', 'placeholder', 'Digite seu email')
        .and("be.visible")
        .and("have.value", "")
        .type("teste")
        .should("have.value", "teste")
        .clear()
        .and("have.value", "")

    //campo Digite sua senha
    cy.get('[data-testid="senha"]')
        .should('have.attr', 'placeholder', 'Digite sua senha')
        .and("be.visible")
        .and("have.value", "")
        .type("teste")
        .should("have.value", "teste")
        .clear()
        .and("have.value", "")

    //validar botão "Entrar"
    cy.get('[data-testid="entrar"]')
        .should('have.css', 'background-color', 'rgb(96, 57, 133)')
        .and("be.visible")
        .and("not.be.disabled")
        .and('have.text', 'Entrar')

    //validar texto "Não é cadastrado?"
    cy.get('.message')
        .should("be.visible")
        .and("contain.text", "Não é cadastrado?")

    //validar botão "Cadastre-se"
    cy.get('[data-testid="cadastrar"]')
        .should("be.visible")
        .and('not.be.disabled')
        .and('have.text', 'Cadastre-se')
        .and('have.css', 'color', 'rgb(96, 57, 133)')
  })
  
})
