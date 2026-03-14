import { CarrinhoPage } from '../../page/CarrinhoPage';

describe('Acess menu carrinho', () => {
  
  beforeEach(() => {
    cy.loginUINormal();
  })

  it('menu carrinho', () => {
    CarrinhoPage.clickHome();
  });
  
});
