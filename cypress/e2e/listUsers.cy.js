import { faker } from '@faker-js/faker';
import { createUserAdm } from '../services/user.service';
import { ListUsersPage } from '../page/ListUsersPage';

describe('List users', () => {

  before(() => {
      createUserAdm().then((user) => {
        Cypress.env('USUARIO_GLOBAL_ADM', user);
        cy.log('Usuário global criado: ' + JSON.stringify(user));
      })
    })
  
  beforeEach(() => {
    cy.loginUIAdmin();
})

  it('List users', () => {
    ListUsersPage.clickListarUsuarios();
    ListUsersPage.validateColumns();    
  })

})