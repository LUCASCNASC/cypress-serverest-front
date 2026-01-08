import { LoginPage } from '../page/LoginPage';
import { faker } from '@faker-js/faker'

describe('Login', () => {

  const email = Cypress.env('EMAIL');

  beforeEach(() => {
      cy.visit('/');
  })

  it('Login Sucess with Administrator User', () => {
    
    LoginPage.fillEmail(email)
    
  })

 
})