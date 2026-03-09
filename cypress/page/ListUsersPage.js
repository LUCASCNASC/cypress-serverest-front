export class ListUsersPage {

  //clicar no botão Listar Usuários após logar
  static clickListarUsuarios() {
    cy.get('[data-testid="listar-usuarios"]').click();
    
    //validar se a página de Lista de usuários foi carregada
    cy.get('h1').contains('Lista dos usuários').should('be.visible');
  };

  //validar colunas na tela de Lista dos Usuários
  static validateColumns() {
    
    //Coluna Nome
    cy.get('thead > tr > :nth-child(1)').contains('Nome').should('be.visible');

    //Coluna Email
    cy.get('thead > tr > :nth-child(2)').contains('Email').should('be.visible');

    //Coluna Senha
    cy.get('thead > tr > :nth-child(3)').contains('Senha').should('be.visible');

    //Coluna Administrador
    cy.get('thead > tr > :nth-child(4)').contains('Administrador').should('be.visible');

    //Coluna Ações
    cy.get('thead > tr > :nth-child(5)').contains('Ações').should('be.visible');
  };
};
