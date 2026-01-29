import { faker } from '@faker-js/faker';
import { createUser } from '../services/user.service';
import { CadastrarProdutoPage } from '../page/CadastrarProdutoPage';

describe('Register product', () => {

  let produto;

  before(() => {
      createUser().then((user) => {
        Cypress.env('USUARIO_GLOBAL', user)
        cy.log('Usuário global criado: ' + JSON.stringify(user))
      })
    })
  
  beforeEach(() => {
    cy.loginUI()

    produto = {
      nome: faker.commerce.productName(),
      preco: faker.number.int({ min: 10, max: 1000 }),
      descricao: faker.commerce.productDescription(),
      quantidade: faker.number.int({ min: 1, max: 50 })
    }
})

  it('Register product sucess', () => {

    CadastrarProdutoPage.clickCadastrarProdutos();
    CadastrarProdutoPage.fillNome(produto.nome);
    CadastrarProdutoPage.fillPreco(produto.preco);
    CadastrarProdutoPage.fillDescricao(produto.descricao);
    CadastrarProdutoPage.fillQuantidade(produto.quantidade);
    CadastrarProdutoPage.attachFile();
    CadastrarProdutoPage.clickConfirmCadastro();
    CadastrarProdutoPage.validateNewProduct();
  })

  it('To try Register product without Nome', () => {

    CadastrarProdutoPage.clickCadastrarProdutos();
    CadastrarProdutoPage.fillPreco(produto.preco);
    CadastrarProdutoPage.fillDescricao(produto.descricao);
    CadastrarProdutoPage.fillQuantidade(produto.quantidade);
    CadastrarProdutoPage.attachFile();
    CadastrarProdutoPage.clickConfirmCadastro();
    CadastrarProdutoPage.validateNameObrigario();
  })
})