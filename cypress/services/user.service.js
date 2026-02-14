export function createUserAdm() {
  const timestamp = Date.now()

  const user = {
    nome: `User Cypress Admin ${timestamp}`,
    email: `user_${timestamp}@qa.com`,
    password: '123456',
    administrador: 'true'
  }

  return cy.request('POST', 'https://serverest.dev/usuarios', user)
    .then((response) => {
      expect(response.status).to.eq(201)

      return {
        email: user.email,
        password: user.password
      }
    })
}

export function createUserNormal() {
  const timestamp = Date.now()

  const user = {
    nome: `User Cypress Normal ${timestamp}`,
    email: `user_${timestamp}@qa.com`,
    password: '123456',
    administrador: 'false'
  }

  return cy.request('POST', 'https://serverest.dev/usuarios', user)
    .then((response) => {
      expect(response.status).to.eq(201)

      return {
        email: user.email,
        password: user.password
      }
    })
}
