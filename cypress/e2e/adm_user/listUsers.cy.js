import { faker } from '@faker-js/faker';
import { ListUsersPage } from '../../page/ListUsersPage';

describe('List users', () => {
  
  beforeEach(() => {
    cy.loginUIAdmin();
  })

  it('List users', () => {
    ListUsersPage.clickListarUsuarios();
    ListUsersPage.validateColumns();    
  });
  
});