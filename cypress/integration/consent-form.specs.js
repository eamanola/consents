import consentService from '../../src/services/consent-service';

describe('consent-form.js', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/give-consent');
  });

  it('expect empty form', () => {
    cy.get('.cypress-name input[type="text"]').should('have.value', '');
    cy.get('.cypress-email input[type="text"').should('have.value', '');
    cy.get('.cypress-newsletter input[type="checkbox"')
      .should('not.be.checked');
    cy.get('.cypress-ads input[type="checkbox"').should('not.be.checked');
    cy.get('.cypress-statistics input[type="checkbox"')
      .should('not.be.checked');
    cy.get('button[type="submit"]').should('be.disabled');
    cy.get('.cypress-notification').should('not.exist');
  });

  it('name is required to submit', () => {
    cy.get('.cypress-name input[type="text"]').should('have.value', '');
    cy.get('.cypress-email input[type="text"').type('foo')
      .then(() => cy.get('.cypress-newsletter input[type="checkbox"').check())
      .then(() => cy.get('.cypress-ads input[type="checkbox"').check())
      .then(() => cy.get('.cypress-statistics input[type="checkbox"').check())
      .then(() => cy.get('button[type="submit"]').should('be.disabled'));
  });

  it('email is required to submit', () => {
    cy.get('.cypress-email input[type="text"').should('have.value', '');
    cy.get('.cypress-name input[type="text"]').type('foo')
      .then(() => cy.get('.cypress-newsletter input[type="checkbox"').check())
      .then(() => cy.get('.cypress-ads input[type="checkbox"').check())
      .then(() => cy.get('.cypress-statistics input[type="checkbox"').check())
      .then(() => cy.get('button[type="submit"]').should('be.disabled'));
  });

  describe('one, any of, consents is required to submit', () => {
    beforeEach(() => {
      cy.get('.cypress-name input[type="text"]').type('foo')
        .then(() => cy.get('.cypress-email input[type="text"').type('bar'));
    });
    it('newsletter is enough to submit', () => {
      cy.get('.cypress-ads input[type="checkbox"').should('not.be.checked');
      cy.get('.cypress-statistics input[type="checkbox"')
        .should('not.be.checked');

      cy.get('.cypress-newsletter input[type="checkbox"').check()
        .then(() => cy.get('button[type="submit"]').should('not.be.disabled'));
    });
    it('ads is enough to submit', () => {
      cy.get('.cypress-newsletter input[type="checkbox"')
        .should('not.be.checked');
      cy.get('.cypress-statistics input[type="checkbox"')
        .should('not.be.checked');

      cy.get('.cypress-ads input[type="checkbox"').check()
        .then(() => cy.get('button[type="submit"]').should('not.be.disabled'));
    });
    it('statistics is enough to submit', () => {
      cy.get('.cypress-newsletter input[type="checkbox"')
        .should('not.be.checked');
      cy.get('.cypress-ads input[type="checkbox"').should('not.be.checked');

      cy.get('.cypress-statistics input[type="checkbox"').check()
        .then(() => cy.get('button[type="submit"]').should('not.be.disabled'));
    });
  });

  describe('submit', () => {
    after(() => cy.deleteAll());
    beforeEach(() => {
      cy.get('.cypress-name input[type="text"]').type('foo')
        .then(() => cy.get('.cypress-email input[type="text"').type('bar'))
        .then(() => cy.get('.cypress-newsletter input[type="checkbox"').check())
        .then(() => cy.get('button[type="submit"]').click());
    });
    it('will add a new record', async () => {
      const before = await consentService.getAll();

      cy.get('.cypress-name input[type="text"]').type('foo')
        .then(() => cy.get('.cypress-email input[type="text"').type('bar'))
        .then(() => cy.get('.cypress-newsletter input[type="checkbox"').check())
        .then(() => cy.get('button[type="submit"]').click())
        .then(async () => {
          const after = await consentService.getAll();
          expect(after.length).to.eq(before.length + 1);
        });
    });
    it('will show a feedback', () => {
      cy.get('.cypress-notification').should('be.visible');
    });
    it('will redirect to /consents', () => {
      cy.url()
        .then((url) => {
          expect(url).to.eq('http://localhost:3000/consents');
        });
    });
  });
});
