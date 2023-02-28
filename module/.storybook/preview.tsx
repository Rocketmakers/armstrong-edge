import React from 'react';
import { ModalProvider } from '../src/components/modal/modal.context';
import { themes } from '@storybook/theming';

import '../src/stories/theme.scss';

export const decorators = [
  Story => {
    return (
      <div id="host">
        <ModalProvider>
          <div className="story-wrapper">
            <Story />
          </div>
        </ModalProvider>
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
      order: [
        'Setup',
        'Migration Guides',
        'Form',
        'FormUtils',
        'Button',
        'Layout',
        'Display',
        'Hooks',
        'SCSS Utilities',
        'Utilities',
        'Armstrong Development',
      ],
    },
  },
  docs: {
    theme: themes.light,
  },
  backgrounds: {
    default: 'light',
  },
};
