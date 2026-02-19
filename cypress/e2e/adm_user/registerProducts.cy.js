import { faker } from '@faker-js/faker';
import { createUserAdm } from '../../services/user.service';
import { RegisterProductPage } from '../../page/RegisterProductPage';

describe('Register product', () => {

  let produto;

  before(() => {
      createUserAdm().then((user) => {
        Cypress.env('USUARIO_GLOBAL_ADM', user);
        cy.log('Usuário global criado: ' + JSON.stringify(user));
      })
    })
  
  beforeEach(() => {
    cy.loginUIAdmin()

    produto = {
      nome: faker.commerce.productName(),
      preco: faker.number.int({ min: 10, max: 1000 }),
      descricao: faker.commerce.productDescription(),
      quantidade: faker.number.int({ min: 1, max: 50 })
    }
})

  it('Register product sucess', () => {

    RegisterProductPage.clickCadastrarProdutos();
    RegisterProductPage.fillNome(produto.nome);
    RegisterProductPage.fillPreco(produto.preco);
    RegisterProductPage.fillDescricao(produto.descricao);
    RegisterProductPage.fillQuantidade(produto.quantidade);
    RegisterProductPage.attachFile();
    RegisterProductPage.clickConfirmCadastro();
    RegisterProductPage.validateNewProduct();
  })

  it('To try Register product without Nome', () => {

    RegisterProductPage.clickCadastrarProdutos();
    RegisterProductPage.fillPreco(produto.preco);
    RegisterProductPage.fillDescricao(produto.descricao);
    RegisterProductPage.fillQuantidade(produto.quantidade);
    RegisterProductPage.attachFile();
    RegisterProductPage.clickConfirmCadastro();
    RegisterProductPage.validateNameObrigario();
  })

  it('To try Register product without Preco', () => {

    RegisterProductPage.clickCadastrarProdutos();
    RegisterProductPage.fillNome(produto.nome);
    RegisterProductPage.fillDescricao(produto.descricao);
    RegisterProductPage.fillQuantidade(produto.quantidade);
    RegisterProductPage.attachFile();
    RegisterProductPage.clickConfirmCadastro();
    RegisterProductPage.validatePrecoObrigario();
  })

  it('To try Register product without Descrição', () => {

    RegisterProductPage.clickCadastrarProdutos();
    RegisterProductPage.fillNome(produto.nome);
    RegisterProductPage.fillPreco(produto.preco);
    RegisterProductPage.fillQuantidade(produto.quantidade);
    RegisterProductPage.attachFile();
    RegisterProductPage.clickConfirmCadastro();
    RegisterProductPage.validateDescricaoObrigaria();
  })

  it('To try Register product without Quantidade', () => {

    RegisterProductPage.clickCadastrarProdutos();
    RegisterProductPage.fillNome(produto.nome);
    RegisterProductPage.fillPreco(produto.preco);
    RegisterProductPage.fillDescricao(produto.descricao);
    RegisterProductPage.attachFile();
    RegisterProductPage.clickConfirmCadastro();
    RegisterProductPage.validateQuantidadeObrigaria();
  })

  it('To try Register product without Nome and Preco', () => {

    RegisterProductPage.clickCadastrarProdutos();
    RegisterProductPage.fillDescricao(produto.descricao);
    RegisterProductPage.fillQuantidade(produto.quantidade);
    RegisterProductPage.attachFile();
    RegisterProductPage.clickConfirmCadastro();
    RegisterProductPage.validateNameObrigario();
    RegisterProductPage.validatePrecoObrigario();
  })

  it('To try Register product without Nome e Descrição', () => {

    RegisterProductPage.clickCadastrarProdutos();
    RegisterProductPage.fillPreco(produto.preco);
    RegisterProductPage.fillQuantidade(produto.quantidade);
    RegisterProductPage.attachFile();
    RegisterProductPage.clickConfirmCadastro();
    RegisterProductPage.validateNameObrigario();
    RegisterProductPage.validateDescricaoObrigaria();
  })

  it('To try Register product without Nome e Quantidade', () => {

    RegisterProductPage.clickCadastrarProdutos();
    RegisterProductPage.fillPreco(produto.preco);
    RegisterProductPage.fillDescricao(produto.descricao);
    RegisterProductPage.attachFile();
    RegisterProductPage.clickConfirmCadastro();
    RegisterProductPage.validateNameObrigario();
    RegisterProductPage.validateQuantidadeObrigaria();
  })

  it('To try Register product without Preço and Descrição', () => {

    RegisterProductPage.clickCadastrarProdutos();
    RegisterProductPage.fillNome(produto.nome);
    RegisterProductPage.fillQuantidade(produto.quantidade);
    RegisterProductPage.attachFile();
    RegisterProductPage.clickConfirmCadastro();
    RegisterProductPage.validatePrecoObrigario();
    RegisterProductPage.validateDescricaoObrigaria();
  })

  it('To try Register product without Preço and Quantidade', () => {

    RegisterProductPage.clickCadastrarProdutos();
    RegisterProductPage.fillNome(produto.nome);
    RegisterProductPage.fillDescricao(produto.descricao);
    RegisterProductPage.attachFile();
    RegisterProductPage.clickConfirmCadastro();
    RegisterProductPage.validatePrecoObrigario();
    RegisterProductPage.validateQuantidadeObrigaria();
  })

  it('To try Register product without Quantidade and Descrição', () => {

    RegisterProductPage.clickCadastrarProdutos();
    RegisterProductPage.fillNome(produto.nome);
    RegisterProductPage.fillPreco(produto.preco);
    RegisterProductPage.attachFile();
    RegisterProductPage.clickConfirmCadastro();
    RegisterProductPage.validateQuantidadeObrigaria();
    RegisterProductPage.validateDescricaoObrigaria();
  })

  it('To try Register product without Preco, Descrição and Quantidade', () => {

    RegisterProductPage.clickCadastrarProdutos();
    RegisterProductPage.fillNome(produto.nome);
    RegisterProductPage.attachFile();
    RegisterProductPage.clickConfirmCadastro();
    RegisterProductPage.validatePrecoObrigario();
    RegisterProductPage.validateDescricaoObrigaria();
    RegisterProductPage.validateQuantidadeObrigaria();
  })

  it('To try Register product without Nome, Descrição and Quantidade', () => {

    RegisterProductPage.clickCadastrarProdutos();
    RegisterProductPage.fillPreco(produto.preco);
    RegisterProductPage.attachFile();
    RegisterProductPage.clickConfirmCadastro();
    RegisterProductPage.validateNameObrigario();
    RegisterProductPage.validateDescricaoObrigaria();
    RegisterProductPage.validateQuantidadeObrigaria();
  })

  it('To try Register product without Nome, Preço and Quantidade', () => {

    RegisterProductPage.clickCadastrarProdutos();
    RegisterProductPage.fillDescricao(produto.descricao);
    RegisterProductPage.attachFile();
    RegisterProductPage.clickConfirmCadastro();
    RegisterProductPage.validateNameObrigario();
    RegisterProductPage.validatePrecoObrigario();
    RegisterProductPage.validateQuantidadeObrigaria();
  })

  it('To try Register product without Nome, Preço and Descrição', () => {

    RegisterProductPage.clickCadastrarProdutos();
    RegisterProductPage.fillQuantidade(produto.quantidade);
    RegisterProductPage.attachFile();
    RegisterProductPage.clickConfirmCadastro();
    RegisterProductPage.validateNameObrigario();
    RegisterProductPage.validatePrecoObrigario();
    RegisterProductPage.validateDescricaoObrigaria();
  })

})