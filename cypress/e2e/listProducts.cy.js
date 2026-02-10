import { faker } from '@faker-js/faker';
import { createUser } from '../services/user.service';
import { ListProductsPage } from '../page/ListProductsPage';

describe('List products', () => {

  before(() => {
      createUser().then((user) => {
        Cypress.env('USUARIO_GLOBAL', user)
        cy.log('Usuário global criado: ' + JSON.stringify(user))
      })
    })
  
  beforeEach(() => {
    cy.loginUI()
})

  it('List products', () => {

    ListProductsPage.clickListarProdutos();
    ListProductsPage.validateColumns();

    
  })

 

})