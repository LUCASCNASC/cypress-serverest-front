import { LoginPage } from '../page/LoginPage';

const email = Cypress.env('EMAIL_USER_VALID');
const senha = Cypress.env('SENHA_USER_VALID');

describe('Login', () => {

  beforeEach(() => {
      cy.visit('/');
  })

  it.only('Login Sucess with Administrator User', () => {
    
    LoginPage.fillEmail(email);
    LoginPage.fillSenha(senha);
    LoginPage.clickEntrar();
    LoginPage.validateLoginSucess();
  })

  it('Try to Login Administrator User without Email', () => {
    
    LoginPage.fillSenha(senha);
    LoginPage.clickEntrar();
    LoginPage.validateEmailObrigatorio();
  })

  it('Try to Login Administrator User without Senha', () => {
    
    LoginPage.fillEmail(email);
    LoginPage.clickEntrar();
    LoginPage.validateSenhaObrigatorio();
  })
})