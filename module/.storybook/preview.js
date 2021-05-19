import * as React from 'react';

export const decorators = [
  (Story) => {
    return (
      <div id="host">
        <div className="story-wrapper">
          <Story />
        </div>
      </div>
    );
  },
];
