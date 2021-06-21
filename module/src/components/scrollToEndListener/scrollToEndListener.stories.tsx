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
      {things.map((thing) => (
        <div style={{ marginBottom: '5px', border: '1px solid black', borderRadius: '5px', width: '100%', height: '300px' }} key={thing} />
      ))}

      <ScrollToEndListener onScrollToEnd={() => setPending(true)} pending={pending} />
    </div>
  );
};

export const Error = () => {
  const [things] = React.useState(Arrays.repeat(10, (i) => i));

  return (
    <div className="story-scroll-container" style={{ padding: '5px' }}>
      <ScrollToEndListener error onScrollToEnd={() => ''}>
        {things.map((thing) => (
          <div style={{ marginBottom: '5px', border: '1px solid black', borderRadius: '5px', width: '100%', height: '300px' }} key={thing} />
        ))}
      </ScrollToEndListener>
    </div>
  );
};
