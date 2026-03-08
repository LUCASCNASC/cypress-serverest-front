import { faker } from '@faker-js/faker';
import { ReportsPage } from '../../page/ReportsPage';

describe('Relatórios', () => {
  
  beforeEach(() => {
    cy.loginUIAdmin();
  })

  it('Relatórios', () => {
    ReportsPage.clickRelatorios();
  })
  
})