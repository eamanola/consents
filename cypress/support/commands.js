// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import axios from 'axios';
import consentService from '../../src/services/consent-service';

Cypress.Commands.add('deleteAll', async () => {
  const all = await consentService.getAll();

  const promises = all.map((item) => axios.delete(`${consentService.baseUrl}/${item.id}`));

  try {
    await Promise.all(promises);
  } catch (e) {
    console.log(e);
  }
});
