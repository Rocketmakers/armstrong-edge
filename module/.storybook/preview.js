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
};

// Show code in Docs view by default, from https://github.com/storybookjs/storybook/issues/10430

window.addEventListener('load', () => {
  let loc = window.location.href;
  showCodeSamples();

  window.setInterval(() => {
    let newLoc = window.location.href;

    if (newLoc !== loc) {
      loc = newLoc;
      showCodeSamples();
    }
  }, 300);
});

function showCodeSamples() {
  try {
    const docs = document.querySelectorAll('.sbdocs');

    [].forEach.call(docs, (el) => {
      const buttons = el.querySelectorAll('button');
      const codeButton = [].find.call(buttons, (el) => el.textContent === 'Show code');
      if (codeButton) {
        codeButton.click();
      }
    });
  } catch (e) {
    console.warn(e);
  }
}
