describe('content.js', () => {
  it('/consents should open consents-list', () => {
    cy.visit('http://localhost:3000/consents')
      .then(() => {
        cy.get('.cypress-consents-list').should('be.visible');
        cy.get('.cypress-consents-form').should('not.exist');
      });
  });
  it('/give-consent should open consents-form', () => {
    cy.visit('http://localhost:3000/give-consent')
      .then(() => {
        cy.get('.cypress-consents-form').should('be.visible');
        cy.get('.cypress-consents-list').should('not.exist');
      });
  });
  it('/random url should default to consents-form', () => {
    cy.visit('http://localhost:3000/foobar')
      .then(() => cy.url())
      .then((url) => {
        expect(url).to.eq('http://localhost:3000/give-consent');
      });
  });
});
