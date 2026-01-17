import { faker } from '@faker-js/faker';
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

    const produto = {
      nome: faker.commerce.productName(),
      preco: faker.number.int({ min: 10, max: 1000 }),
      descricao: faker.commerce.productDescription(),
      quantidade: faker.number.int({ min: 1, max: 50 })
    }

    CadastrarProdutoPage.clickCadastrarProdutos();
    CadastrarProdutoPage.fillNome(produto.nome);
    CadastrarProdutoPage.fillPreco(produto.preco);
    CadastrarProdutoPage.fillDescricao(produto.descricao);
    CadastrarProdutoPage.fillQuantidade(produto.quantidade);
    CadastrarProdutoPage.attachFile();
    CadastrarProdutoPage.clickConfirmCadastro();
    CadastrarProdutoPage.validateNewProduct();
  })
})