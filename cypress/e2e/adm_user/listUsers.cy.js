import { ListUsersPage } from '../../page/ListUsersPage';

describe('List users registered', () => {
  
  beforeEach(() => {
    cy.loginUIAdmin();
  })

  it('List users', () => {
    ListUsersPage.clickListarUsuarios();
    ListUsersPage.validateColumns();    
  });
  
});
