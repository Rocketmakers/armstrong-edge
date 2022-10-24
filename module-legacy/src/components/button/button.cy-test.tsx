import { mount } from '@cypress/react';
import { composeStories } from '@storybook/testing-react';
import { cy, describe, it } from 'local-cypress';
import * as React from 'react';

import * as stories from './button.stories';

const { Default, WithIcons, Disabled, Pending, PendingOnLeft, PendingAnimation, Error, Minimal } = composeStories(stories);

describe('Button', () => {
  it('should render a default button', () => {
    mount(<Default onClick={cy.stub().as('click')} />);
    cy.get('[data-cy=button]').as('button').should('have.text', Default.args?.children).and('not.have.attr', 'data-disabled');
    cy.get('@button').click();
    cy.get('@click').should('have.been.calledOnce');
  });

  it('should render a button with a left icon', () => {
    mount(<WithIcons />);
    cy.get('[data-cy=button]').should('have.text', Default.args?.children).find('[data-cy=icon-left]').should('have.attr', 'data-i', 'weather-rain2');
  });

  it('should render a button with a left icon', () => {
    mount(<WithIcons rightIcon={{ icon: 'eye-blocked2', iconSet: 'Icomoon' }} />);
    cy.get('[data-cy=button]').find('[data-cy=icon-right]').should('have.attr', 'data-i', 'eye-blocked2');
  });

  it('should render a disabled button', () => {
    mount(<Disabled />);
    cy.get('[data-cy=button]').should('contain', Disabled.args?.children).and('be.disabled').and('have.attr', 'data-disabled', 'true');
  });

  it('should render a pending button', () => {
    mount(<Pending />);
    cy.get('[data-cy=button]')
      .should('contain', Pending.args?.children)
      .and('be.disabled')
      .and('have.attr', 'data-disabled', 'true')
      .find('[data-cy=status-right]')
      .should('have.attr', 'data-pending', 'true')
      .find('[data-cy=spinner]')
      .should('have.attr', 'data-i', 'spinner2');
  });

  it('should render a pending button with the spinner on the left', () => {
    mount(<PendingOnLeft />);
    cy.get('[data-cy=button]').find('[data-cy=status-left]').find('[data-cy=spinner]').should('have.attr', 'data-i', 'spinner2');
  });

  it('should render a pending button that demos pending being set', () => {
    mount(<PendingAnimation />);
    cy.get('[data-cy=button]').as('button').find('[data-cy=status-right]').should('not.exist');
    cy.get('@button').click();
    cy.get('@button').find('[data-cy=status-right]').should('exist').and('have.attr', 'data-pending', 'true');
  });

  it('should render a button in an error state', () => {
    mount(<Error />);
    cy.get('[data-cy=button]').find('[data-cy=status-right]').should('have.attr', 'data-error', 'true');
  });

  it('should render a minimal button', () => {
    mount(<Minimal onClick={cy.stub().as('click')} />);
    cy.get('[data-cy=button]').as('button').should('have.text', Minimal.args?.children).and('have.class', 'arm-button-minimal');
    cy.get('@button').click();
    cy.get('@click').should('have.been.calledOnce');
  });
});
