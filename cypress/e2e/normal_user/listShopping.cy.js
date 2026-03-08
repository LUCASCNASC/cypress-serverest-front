import { faker } from '@faker-js/faker';
import { ListShoppingPage } from '../../page/ListShoppingPage';

describe('List shopping', () => {
  
  beforeEach(() => {
    cy.loginUINormal();
  })

  it('List shopping', () => {
    ListShoppingPage.clickListarCompras();
  })
  
})