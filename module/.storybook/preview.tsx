import * as React from 'react';

import './showCode';

import { ToastProvider, ModalProvider } from '../src';
// import { addParameters } from '@storybook/react';

export const decorators = [
  (Story) => {
    return (
      <div id="host">
        <ToastProvider>
          <ModalProvider>
            <div className="story-wrapper">
              <Story />
            </div>
          </ModalProvider>
        </ToastProvider>
      </div>
    );
  },
];

export const parameters = {
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
  a11y: {
    options: {
      runOnly: {
        type: 'tag',
        values: ['wcag2a'],
      },
    },
  },
};

// haven't been able to get this working, but should be revisited - should add a toggle between stylesheets

// addParameters({
//   stylesheetToggle: {
//     stylesheets: [
//       {
//         id: 'test',
//         title: 'Test',
//         url: '../src/stories/test.css',
//       },
//       {
//         id: 'basic',
//         title: 'Basic',
//         url: '../src/stories/basic-theme.scss',
//       },
//       {
//         id: 'prototyping',
//         title: 'Prototyping',
//         url: '../src/stories/prototyping-theme.scss',
//       },
//     ],
//   },
// });
