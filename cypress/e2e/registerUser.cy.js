import { RegisterUserPage } from '../page/RegisterUserPage';
import { faker } from '@faker-js/faker'

describe('Register', () => {

  const nome = faker.person.fullName()
  const email = faker.internet.email().toLowerCase()
  const senha = faker.internet.password({ length: 8 })

  beforeEach(() => {
      cy.visit('/');
      RegisterUserPage.clickCadastrar();
  })

  it('Register Sucess as Administrator', () => {

    RegisterUserPage.fillNome(nome);
    RegisterUserPage.fillEmail(email);
    RegisterUserPage.fillSenha(senha);
    RegisterUserPage.selectAdministrador();
    RegisterUserPage.clickConfirmCadastrar();
    RegisterUserPage.validateNewRegister();
  })

  it('Try to Register as Administrator without nome', () => {

    RegisterUserPage.fillEmail(email);
    RegisterUserPage.fillSenha(senha);
    RegisterUserPage.selectAdministrador();
    RegisterUserPage.clickConfirmCadastrar();
    RegisterUserPage.validateNomeObrigatorio();
  })

  it('Try to Register as Administrator without email', () => {

    RegisterUserPage.fillNome(nome);
    RegisterUserPage.fillSenha(senha);
    RegisterUserPage.selectAdministrador();
    RegisterUserPage.clickConfirmCadastrar();
    RegisterUserPage.validateEmailObrigatorio();
  })

  it('Try to Register as Administrator without senha', () => {

    RegisterUserPage.fillNome(nome);
    RegisterUserPage.fillEmail(email);
    RegisterUserPage.selectAdministrador();
    RegisterUserPage.clickConfirmCadastrar();
    RegisterUserPage.validateSenhaObrigatorio()
  })
})