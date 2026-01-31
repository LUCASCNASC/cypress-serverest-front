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

//comando personalizado para login via API
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

//comando personalizado para login via UI, utilizando usuario global definido em cypress.env.json
Cypress.Commands.add('loginUI', () => {
  const user = Cypress.env('USUARIO_GLOBAL')

  cy.log('Login com: ' + JSON.stringify(user))

  expect(user).to.not.be.undefined
  expect(user.email).to.exist
  expect(user.password).to.exist

  cy.visit('/login')

  cy.get('[data-testid="email"]').type(user.email)
  cy.get('[data-testid="senha"]').type(user.password)
  cy.get('[data-testid="entrar"]').click()

  cy.url().should('not.include', '/login')
})