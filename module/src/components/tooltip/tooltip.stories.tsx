import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { Tooltip } from './tooltip.component';

/** metadata */

export default StoryUtils.createMeta(Tooltip, 'Layout', 'Tooltip', {});

/** component template */

// const Template = StoryUtils.createTemplate(Tooltip);

/** stories */

export const Default = () => {
  return (
    <>
      <Tooltip content="HIYA" tooltipPosition={['above']}>
        <p>Hover over me for some cool stuff</p>
      </Tooltip>
    </>
  );
};
