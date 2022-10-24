declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.getByCy('greeting')
     */
    getByCy(value: string): Chainable<JQuery<HTMLElement>>;
  }
}
