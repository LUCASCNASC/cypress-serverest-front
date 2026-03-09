export class ReportsPage {

  //clicar no botão Relatórios após logar
  static clickRelatorios() {
    cy.get('[data-testid="link-relatorios"]').click();
    
    //validar se a página de Relatórios foi carregada
    cy.get('h1').contains('Em construção aguarde').should('be.visible');
  };
};
