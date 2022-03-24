import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { Tail } from './tail.component';

/** metadata */

export default StoryUtils.createMeta(Tail, 'Display', 'Tail', {});

/** component template */

// const Template = StoryUtils.createTemplate(Tooltip);

/** stories */

export const Default = () => {
  return (
    <div style={{ '--arm-tail-colour': 'black' } as React.CSSProperties}>
      <Tail position="above">
        <p>Check out my fun tail</p>
      </Tail>
    </div>
  );
};

export const OtherDirections = () => {
  return (
    <div style={{ '--arm-tail-colour': 'black' } as React.CSSProperties}>
      <Tail position="above">
        <p>Check out my fun tail</p>
      </Tail>
      <Tail position="below">
        <p>Check out my fun tail</p>
      </Tail>
      <Tail position="left">
        <p>Check out my fun tail</p>
      </Tail>
      <Tail position="right">
        <p>Check out my fun tail</p>
      </Tail>
    </div>
  );
};
