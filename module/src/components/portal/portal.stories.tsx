import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { Portal } from './portal.component';

/** metadata */

export default StoryUtils.createMeta(Portal, 'Layout', 'Tab Control', {});

/** component template */

// const Template = StoryUtils.createTemplate(TabControl);

/** stories */

export const PortalIntoBody = () => {
  return (
    <>
      <p>I'm in a normal p tag</p>

      <Portal portalToSelector="body">
        <p>I've been portaled to the end of the body</p>
      </Portal>
    </>
  );
};

export const PortalIntoDiv = () => {
  return (
    <>
      <div id="#one">I'm in a div</div>
      <div id="#two">I'm in another div</div>

      <Portal portalToSelector="#two">
        <p>I'm portaled into #two despite being elsewhere in the virtual DOM</p>
      </Portal>
    </>
  );
};

export const PortalUsingRef = () => {
  const div = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={div}>I'm a div</div>

      <Portal portalTo={div.current}>
        <p>I'm portaled into the div using a ref</p>
      </Portal>
    </>
  );
};
