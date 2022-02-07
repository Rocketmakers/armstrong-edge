import { mount } from '@cypress/react';
import { composeStories } from '@storybook/testing-react';
import * as React from 'react';

import * as stories from '../../src/components/button/button.stories';

const { Default, Pending } = composeStories(stories);

it('should render a default button', () => {
  mount(<Default onClick={cy.stub().as('click')} />);
  cy.get('button').should('have.text', Default.args?.children).click();
  cy.get('@click').should('have.been.calledOnce');
});

it('should render a pending button', () => {
  mount(<Pending />);
  cy.get('button').should('contain', Pending.args?.children).and('be.disabled');
});
