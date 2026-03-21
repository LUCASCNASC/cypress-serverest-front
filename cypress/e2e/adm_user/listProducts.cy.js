import { ListProductsPage } from '../../page/ListProductsPage';

describe('List products registered', () => {
  
  beforeEach(() => {
    cy.loginUIAdmin();
  })

  it('List products', () => {
    ListProductsPage.clickListarProdutos();
    ListProductsPage.validateColumns();  
  });
  
});
