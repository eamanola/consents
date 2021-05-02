import axios from 'axios';
import consentService from '../../src/services/consent-service';

describe('consent-form.js', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/give-consent');
  });

  it('expect empty form', () => {
    cy.get('.cypress-name input[type="text"]')
      .should('have.value', '');
    cy.get('.cypress-email input[type="text"')
      .should('have.value', '');
    cy.get('.cypress-newsletter input[type="checkbox"')
      .should('not.be.checked');
    cy.get('.cypress-ads input[type="checkbox"')
      .should('not.be.checked');
    cy.get('.cypress-statistics input[type="checkbox"')
      .should('not.be.checked');
    cy.get('button[type="submit"]')
      .should('be.disabled');
  });

  it('name is required to submit', () => {
    cy.get('.cypress-name input[type="text"]')
      .should('have.value', '');
    cy.get('.cypress-email input[type="text"').type('foo');
    cy.get('.cypress-newsletter input[type="checkbox"').check();
    cy.get('.cypress-ads input[type="checkbox"').check();
    cy.get('.cypress-statistics input[type="checkbox"').check();
    cy.get('button[type="submit"]')
      .should('be.disabled');
  });

  it('email is required to submit', () => {
    cy.get('.cypress-name input[type="text"]').type('foo');
    cy.get('.cypress-email input[type="text"')
      .should('have.value', '');
    cy.get('.cypress-newsletter input[type="checkbox"').check();
    cy.get('.cypress-ads input[type="checkbox"').check();
    cy.get('.cypress-statistics input[type="checkbox"').check();
    cy.get('button[type="submit"]')
      .should('be.disabled');
  });

  describe('one, any of, consents is required to submit', () => {
    it('newsletter is enough to submit', () => {
      cy.get('.cypress-name input[type="text"]').type('foo');
      cy.get('.cypress-email input[type="text"').type('bar');
      cy.get('.cypress-newsletter input[type="checkbox"').check();
      cy.get('.cypress-ads input[type="checkbox"')
        .should('not.be.checked');
      cy.get('.cypress-statistics input[type="checkbox"')
        .should('not.be.checked');
      cy.get('button[type="submit"]')
        .should('not.be.disabled');
    });
    it('ads is enough to submit', () => {
      cy.get('.cypress-name input[type="text"]').type('foo');
      cy.get('.cypress-email input[type="text"').type('bar');
      cy.get('.cypress-newsletter input[type="checkbox"')
        .should('not.be.checked');
      cy.get('.cypress-ads input[type="checkbox"').check();
      cy.get('.cypress-statistics input[type="checkbox"')
        .should('not.be.checked');
      cy.get('button[type="submit"]')
        .should('not.be.disabled');
    });
    it('statistics is enough to submit', () => {
      cy.get('.cypress-name input[type="text"]').type('foo');
      cy.get('.cypress-email input[type="text"').type('bar');
      cy.get('.cypress-newsletter input[type="checkbox"')
        .should('not.be.checked');
      cy.get('.cypress-ads input[type="checkbox"')
        .should('not.be.checked');
      cy.get('.cypress-statistics input[type="checkbox"').check();
      cy.get('button[type="submit"]')
        .should('not.be.disabled');
    });
  });

  describe('submit', () => {
    after(async () => {
      const all = await consentService.getAll();
      if (all.length > 0) {
        all.forEach(async (item) => {
          await axios.delete(`${consentService.baseUrl}/${item.id}`);
        });
      }
    });
    it('will empty the form', () => {
      cy.get('.cypress-name input[type="text"]').type('foo');
      cy.get('.cypress-email input[type="text"').type('bar');
      cy.get('.cypress-newsletter input[type="checkbox"').check();
      cy.get('button[type="submit"]').click();

      cy.get('.cypress-name input[type="text"]')
        .should('have.value', '');
      cy.get('.cypress-email input[type="text"')
        .should('have.value', '');
      cy.get('.cypress-newsletter input[type="checkbox"')
        .should('not.be.checked');
      cy.get('.cypress-ads input[type="checkbox"')
        .should('not.be.checked');
      cy.get('.cypress-statistics input[type="checkbox"')
        .should('not.be.checked');
      cy.get('button[type="submit"]')
        .should('be.disabled');
    });
    it('will add a new record', async () => {
      const before = await consentService.getAll();

      cy.get('.cypress-name input[type="text"]').type('foo');
      cy.get('.cypress-email input[type="text"').type('bar');
      cy.get('.cypress-newsletter input[type="checkbox"').check();
      cy.get('button[type="submit"]').click().then(async () => {
        const after = await consentService.getAll();
        expect(after.length).to.eq(before.length + 1);
      });
    });
  });
});
