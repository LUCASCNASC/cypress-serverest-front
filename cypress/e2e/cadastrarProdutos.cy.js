import { CadastrarProdutoPage } from '../page/CadastrarProdutoPage';

describe('Register product', () => {

  beforeEach(() => {
      cy.visit('/');
      cy.login(
        Cypress.env('EMAIL_USER_VALID'),
        Cypress.env('SENHA_USER_VALID')
      );
  })

  it('Register product sucess', () => {

    CadastrarProdutoPage.clickCadastrarProdutos();
  })
})