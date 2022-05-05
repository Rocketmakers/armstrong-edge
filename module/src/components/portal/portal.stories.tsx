import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { Portal } from './portal.component';

/** metadata */

export default StoryUtils.createMeta(Portal, 'Layout', 'Portal', {});

/** component template */

// const Template = StoryUtils.createTemplate(TabControl);

/** stories */

export const PortalIntoBody = () => {
  return (
    <>
      <p>I'm in a normal p tag</p>

      <Portal>
        <p>I've been portaled to the end of the body</p>
      </Portal>
    </>
  );
};

export const PortalIntoDiv = () => {
  return (
    <>
      <div id="one">I'm in a div</div>
      <div id="two">I'm in another div</div>

      <Portal portalToSelector="#two">
        <p>I'm portaled into #two despite being elsewhere in the virtual DOM</p>
      </Portal>
    </>
  );
};

export const PortalUsingReferenceToDiv = () => {
  // in this example, this must be done using a useState rather than a useRef, as the ref callback runs after the initial render, meaning it would
  // be undefined when the Portal's logic is first run
  const [div, setDiv] = React.useState<HTMLDivElement>(null);

  return (
    <>
      <div ref={(r) => setDiv(r)}>I'm a div</div>

      <Portal portalTo={div}>
        <p>I'm portaled into the div using a reference</p>
      </Portal>
    </>
  );
};
