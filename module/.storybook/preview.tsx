import React from 'react';
import { withThemes } from 'storybook-addon-themes/react';
import { ModalProvider } from '../src/components/modal/modal.context';
import { themes } from '@storybook/theming';

export const decorators = [
  withThemes,
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

const ThemeDecorator = props => {
  const { children, themeName } = props;
  return (
    <>
      {themeName === 'basic' && <link rel="stylesheet" href="../src/stories/basic-theme.scss" />}
      {themeName === 'prototyping' && <link rel="stylesheet" href="../src/stories/prototyping-theme.scss" />}
      {children}
    </>
  );
};

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
  themes: {
    default: 'prototyping',
    list: [
      { name: 'prototyping', color: '#00aced' },
      { name: 'basic', color: '#3b5998' },
    ],
    Decorator: ThemeDecorator,
  },
  docs: {
    theme: themes.light,
  },
};
