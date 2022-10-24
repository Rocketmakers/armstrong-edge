import * as React from 'react';

import { useTemporaryState } from '../../hooks';
import { StoryUtils } from '../../stories/storyUtils';
import { Arrays } from '../../utils/arrays';
import { ScrollToEndListener } from './scrollToEndListener.component';

/** metadata */

export default StoryUtils.createMeta(ScrollToEndListener, 'Layout', 'ScrollToEndListener', {});

/** component template */

// const Template = StoryUtils.createTemplate(ScrollToEndListener as React.FC<IScrollToEndListenerProps<any, any>>);

/** stories */

export const Default = () => {
  const [things, setThings] = React.useState(Arrays.repeat(10, (i) => i));

  const [pending, setPending] = useTemporaryState(false, 1000, () => setThings([...things, ...Arrays.repeat(10, (i) => i + things.length)]));

  return (
    <div className="story-scroll-container" style={{ padding: '5px' }}>
      <ScrollToEndListener onScrollToEnd={() => setPending(true)} pending={pending}>
        {things.map((thing) => (
          <div style={{ margin: '0 auto 5px auto', border: '1px solid black', borderRadius: '5px', width: '300px', height: '160px' }} key={thing} />
        ))}
      </ScrollToEndListener>
    </div>
  );
};

export const Error = () => {
  const [things] = React.useState(Arrays.repeat(10, (i) => i));

  return (
    <div className="story-scroll-container" style={{ padding: '5px' }}>
      {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
      <ScrollToEndListener error onScrollToEnd={() => {}}>
        {things.map((thing) => (
          <div style={{ margin: '0 auto 5px auto', border: '1px solid black', borderRadius: '5px', width: '300px', height: '160px' }} key={thing} />
        ))}
      </ScrollToEndListener>
    </div>
  );
};
