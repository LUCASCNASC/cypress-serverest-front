import { LoginPage } from '../page/LoginPage';

describe('Login - Administrator User', () => {

  let usuario

  before(() => {
    const email = `admin_${Date.now()}@qa.com`

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: 'Administrador QA',
        email: email,
        password: '123456',
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)

      usuario = {
        email: email,
        password: '123456'
      }
    })
  })

  beforeEach(() => {
    cy.visit('/')
  })

  it('Login Administrator User with success', () => {

    LoginPage.fillEmail(usuario.email)
    LoginPage.fillSenha(usuario.password)
    LoginPage.clickEntrar()
    LoginPage.validateLoginSucess()
  })

  it('Try to Login Administrator User without Email', () => {

    LoginPage.fillSenha(usuario.password)
    LoginPage.clickEntrar()
    LoginPage.validateEmailObrigatorio()
  })

  it('Try to Login Administrator User without Senha', () => {

    LoginPage.fillEmail(usuario.email)
    LoginPage.clickEntrar()
    LoginPage.validateSenhaObrigatorio()
  })
})
