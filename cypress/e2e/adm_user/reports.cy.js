import { ReportsPage } from '../../page/ReportsPage';

describe('Reports', () => {
  
  beforeEach(() => {
    cy.loginUIAdmin();
  })

  it('Reports', () => {
    ReportsPage.clickRelatorios();
  });

  
});
