import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { Button } from './button.component';

/** metadata */

export default StoryUtils.createMeta(Button, 'Button', 'Button', {});

/** component template */

const Template = StoryUtils.createTemplate(Button);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, { children: 'Click me please' });
export const WithIcons = StoryUtils.cloneTemplate(Template, { leftIcon: { icon: 'weather-rain2', iconSet: 'Icomoon' }, children: 'Click me please' });
export const Disabled = StoryUtils.cloneTemplate(Template, {
  leftIcon: { icon: 'cogs', iconSet: 'Icomoon' },
  disabled: true,
  children: 'Click me please',
});
export const Pending = StoryUtils.cloneTemplate(Template, {
  leftIcon: { icon: 'eye-blocked2', iconSet: 'Icomoon' },
  children: 'Click me please',
  pending: true,
});
export const PendingOnLeft = StoryUtils.cloneTemplate(Template, {
  leftIcon: { icon: 'eye-blocked2', iconSet: 'Icomoon' },
  children: 'Click me please',
  pending: true,
  statusPosition: 'left',
});
export const PendingAnimation = () => {
  const [pending, setPending] = React.useState(false);

  return (
    <Button pending={pending} onClick={() => setPending(!pending)}>
      Click me to pend...
    </Button>
  );
};
export const Error = StoryUtils.cloneTemplate(Template, {
  leftIcon: { icon: 'eye-blocked2', iconSet: 'Icomoon' },
  children: 'Click me please',
  error: true,
});
export const Minimal = StoryUtils.cloneTemplate(Template, {
  leftIcon: { icon: 'weather-rain2', iconSet: 'Icomoon' },
  children: 'Click me please',
  minimalStyle: true,
});
export const RenderDiv = StoryUtils.cloneTemplate(Template, { children: 'Use me inside a tags and such', elementTag: 'div' });
export const RenderDivWithOtherStuff = StoryUtils.cloneTemplate(Template, {
  children: 'Use me inside a tags and such',
  elementTag: 'div',
  leftIcon: { icon: '8ball', iconSet: 'Icomoon' },
  rightIcon: { icon: 'eye-blocked2', iconSet: 'Icomoon' },
  hideIconOnStatus: false,
  pending: true,
  statusPosition: 'left',
});
