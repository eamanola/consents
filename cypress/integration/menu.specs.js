describe('menu.js', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('"Give consent" Link should redirect to /give-consents', () => {
    cy.get('.cypress-give-consent-link').click().url()
      .then((url) => {
        expect(url).to.eq('http://localhost:3000/give-consent');
      });
  });

  it('"Consents" Link should redirect to /consents', () => {
    cy.get('.cypress-consents-link').click().url()
      .then((url) => {
        expect(url).to.eq('http://localhost:3000/consents');
      });
  });
});
