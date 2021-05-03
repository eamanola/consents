import consentService from '../../src/services/consent-service';

describe('consent-list.js', () => {
  before(async () => {
    const consent = {
      name: 'foo',
      email: 'bar',
      consents: {
        newsletter: false,
        ads: false,
        statistics: false,
      },
    };
    await consentService.createNew(consent);
    await consentService.createNew(consent);
    await consentService.createNew(consent);
  });

  after(() => cy.deleteAll());

  it('show only 2 rows', () => {
    cy.visit('http://localhost:3000/consents')
      .then(() => {
        cy.get('.cypress-consents-list tbody tr')
          .should('have.length.lte', 2);
      });
  });
});
