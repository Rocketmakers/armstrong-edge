import * as React from 'react';
import { ToastProvider } from '../src';

import { ModalProvider } from '../src/components/modal/modal.context';

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
