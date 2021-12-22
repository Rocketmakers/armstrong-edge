import { mount } from '@cypress/react';
import { composeStories } from '@storybook/testing-react';
import * as React from 'react';

import * as stories from '../../src/components/button/button.stories';

const { Default, Pending } = composeStories(stories);

it('should render a default button', () => {
  mount(<Default />);
  cy.get('span').should('contain', 'Click me please');
});

it('should render a pending button', () => {
  mount(<Pending />);
  cy.get('span').should('contain', 'Click me please');
});
