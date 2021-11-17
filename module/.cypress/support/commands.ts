import 'cypress-localstorage-commands';

Cypress.Commands.add('getByCy', (value) => {
  return cy.get(`[data-cy=${value}]`);
});
