import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconWrapper } from './iconWrapper.component';

/** metadata */

export default StoryUtils.createMeta(IconWrapper as any, 'Display', 'Icon Wrapper', {});

/** component template */

const Template = StoryUtils.createTemplate(IconWrapper);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {
  leftIcon: { iconSet: 'LinearIcons', icon: 'gun' },
  rightIcon: { iconSet: 'Icomoon', icon: 'gun' },
  children: <p>Hi there</p>,
});
