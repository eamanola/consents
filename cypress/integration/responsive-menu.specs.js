describe('responsive-menu.js', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('menu should be visible on big screen', () => {
    cy.viewport(960, 600)
      .then(() => {
        cy.get('.cypress-menu').should('be.visible');
        cy.get('.cypress-menu-button').should('not.exist');
      });
  });

  it('menu button should be visible on small screen', () => {
    cy.viewport(500, 600)
      .then(() => {
        cy.get('.cypress-menu-button').should('be.visible');
        cy.get('.cypress-menu').should('not.exist');
      });
  });

  it('menu should open from menu button', () => {
    cy.viewport(500, 600)
      .then(() => cy.get('.cypress-menu-button').click())
      .then(() => {
        cy.get('.cypress-menu').should('be.visible');
      });
  });

  it('menu should close on link click', () => {
    cy.viewport(500, 600)
      .then(() => cy.get('.cypress-menu-button').click())
      .then(() => cy.get('.cypress-give-consent-link').click())
      .then(() => {
        cy.get('.cypress-menu').should('not.exist');
      });
  });
});
