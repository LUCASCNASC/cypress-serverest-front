import { faker } from '@faker-js/faker';
import { HomePage } from '../../page/HomePage';

describe('Acess home page', () => {
  
  beforeEach(() => {
    cy.loginUINormal();
  })

  it('home page', () => {
    HomePage.clickHome();
  });
  
});