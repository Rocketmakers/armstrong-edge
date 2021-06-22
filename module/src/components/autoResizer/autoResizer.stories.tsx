import * as React from 'react';

import { Button } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { AutoResizer } from './autoResizer.component';

/** metadata */

export default StoryUtils.createMeta(AutoResizer, 'Layout', 'AutoResizer', {});

/** component template */

// const Template = StoryUtils.createTemplate(AutoResizer);

/** stories */

export const Default = () => {
  const [bigger, setBigger] = React.useState(false);

  return (
    <>
      <AutoResizer>
        <div style={{ width: bigger ? '200px' : '170px', height: bigger ? '150px' : '70px', backgroundColor: 'red', padding: '5px' }}>
          <Button onClick={() => setBigger(!bigger)}>Change Size</Button>
        </div>
      </AutoResizer>
    </>
  );
};
