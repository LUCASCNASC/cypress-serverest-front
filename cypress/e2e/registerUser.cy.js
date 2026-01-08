import { RegisterUserPage } from '../page/RegisterUserPage';
import { faker } from '@faker-js/faker'

describe('Register', () => {

  const nome = faker.person.fullName()
  const email = faker.internet.email().toLowerCase()
  const senha = faker.internet.password({ length: 8 })

  const registerUserPage = new RegisterUserPage(); // ✅ cria instância

  beforeEach(() => {
      cy.visit('/');
  })

  it('Register Sucess as Administrator', () => {
    
    RegisterUserPage.clickCadastrar();
    RegisterUserPage.fillNome(nome);
    RegisterUserPage.fillEmail(email);
    RegisterUserPage.fillSenha(senha);
    RegisterUserPage.selectAdministrador();
    RegisterUserPage.clickConfirmCadastrar();
    RegisterUserPage.validateNewRegister();
    
  })
})