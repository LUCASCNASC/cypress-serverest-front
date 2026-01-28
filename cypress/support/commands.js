import 'cypress-file-upload';

//comando personalizado para login
Cypress.Commands.add('login', (email, senha) => { 

  cy.get('[data-testid="email"]').type(email)
  cy.get('[data-testid="senha"]').type(senha)
  cy.get('[data-testid="entrar"]').click()

  cy.intercept('GET', '**/usuarios').as('apiUsuarios')
  cy.wait('@apiUsuarios', { timeout: 40000 })
 })

//comando personalizado para criar usuario via API, para ser usado em testes que necessitam de um usuario novo
Cypress.Commands.add('criarUsuarioGlobal', () => {
  const email = `global_${Date.now()}@qa.com`

  return cy.request('POST', 'https://serverest.dev/usuarios', {
    nome: 'Usuario Global QA',
    email,
    password: '123456',
    administrador: 'true'
  }).then(() => ({ email, password: '123456' }))
})

Cypress.Commands.add('loginViaAPI', (email, password) => {
  cy.request({
    method: 'POST',
    url: 'https://serverest.dev/login',
    body: {
      email,
      password
    }
  }).then((response) => {
    expect(response.status).to.eq(200)

    const token = response.body.authorization

    cy.visit('/', {
      onBeforeLoad(win) {
        win.localStorage.setItem('serverest/userToken', token)
      }
    })
  })
})

Cypress.Commands.add('loginUI', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('/login')

    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type(password)
    cy.get('[data-testid="entrar"]').click()

    cy.url().should('include', '/home')
    cy.get('[data-testid="logout"]').should('be.visible')
  })
})