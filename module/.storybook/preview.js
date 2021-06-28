import * as React from 'react';

import { ModalProvider } from '../src/components/modal/modal.context';

export const decorators = [
  (Story) => {
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
  options: {
    storySort: {
      order: ['Setup', 'Migration Guides', 'Form', 'FormUtils', 'Button', 'Layout', 'Display', 'Utilities', 'Armstrong Development'],
    },
  },
};
