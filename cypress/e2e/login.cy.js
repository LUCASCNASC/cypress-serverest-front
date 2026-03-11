import { LoginPage } from '../page/LoginPage';

describe('Login - Administrator User', () => {

  let usuario_admin;
  let usuario_normal;

  before(() => {
    const email = `admin_${Date.now()}@qa.com`;

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
      expect(response.status).to.eq(201);

      usuario_admin = {
        email: email,
        password: '123456'
      };
    })

    // cy.request({
    //   method: 'POST',
    //   url: 'https://serverest.dev/usuarios',
    //   body: {
    //     nome: 'Normal QA',
    //     email: email,
    //     password: '123456',
    //     administrador: 'false'
    //   }
    // }).then((response) => {
    //   expect(response.status).to.eq(201)

    //   usuario_normal = {
    //     email: email,
    //     password: '123456'
    //   }
    // })
  })

  beforeEach(() => {
    cy.visit('/')
  });

  it('Login Administrator User with success', () => {
    LoginPage.fillEmail(usuario_admin.email);
    LoginPage.fillSenha(usuario_admin.password);
    LoginPage.clickEntrar();
    LoginPage.validateLoginSucess();
  });

  it('Try to Login Administrator User without Email', () => {
    LoginPage.fillSenha(usuario_admin.password);
    LoginPage.clickEntrar();
    LoginPage.validateEmailObrigatorio();
  });

  it('Try to Login Administrator User without Senha', () => {
    LoginPage.fillEmail(usuario_admin.email);
    LoginPage.clickEntrar();
    LoginPage.validateSenhaObrigatorio();
  });

  // it('Login Normal User with success', () => {

  //   LoginPage.fillEmail(usuario_normal.email)
  //   LoginPage.fillSenha(usuario_normal.password)
  //   LoginPage.clickEntrar()
  //   LoginPage.validateLoginSucess()
  // })
});
