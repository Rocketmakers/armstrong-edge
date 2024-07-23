import React from 'react';
import { themes } from '@storybook/theming';

import '../src/theme/variables.css';
import '../src/theme/animations.css';
import '../src/theme/theme.css';
import './storybook-theme.css';

export const decorators = [
  Story => {
    return (
      <div id="host">
        <div className="story-wrapper">
          <Story />
        </div>
      </div>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Introduction', 'Config', 'Form', 'Components', 'Hooks', 'Modals', 'Utilities'],
    },
  },
  docs: {
    theme: themes.light,
  },
  backgrounds: {
    default: 'light',
  },
};
