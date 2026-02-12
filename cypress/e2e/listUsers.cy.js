import { faker } from '@faker-js/faker';
import { createUser } from '../services/user.service';
import { ListUsersPage } from '../page/ListUsersPage';

describe('List users', () => {

  before(() => {
      createUser().then((user) => {
        Cypress.env('USUARIO_GLOBAL', user)
        cy.log('Usuário global criado: ' + JSON.stringify(user))
      })
    })
  
  beforeEach(() => {
    cy.loginUI()
})

  it('List users', () => {

    ListUsersPage.clickListarUsuarios();
    ListUsersPage.validateColumns();    
  })

 

})