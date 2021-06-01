import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { InputWrapper } from './inputWrapper.component';

/** metadata */

export default StoryUtils.createMeta(InputWrapper, 'FormUtils', 'Input Wrapper', {});

/** component template */

const Template = StoryUtils.createTemplate(InputWrapper);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {});
export const WithValidationErrors = StoryUtils.cloneTemplate(Template, {
  validationErrorMessages: ['Uh oh sinky'],
  children: <div style={{ flexGrow: 1, height: '30px' }} />,
});
export const WithEverything = StoryUtils.cloneTemplate(Template, {
  validationErrorMessages: ['Uh oh something bad', 'wow your input sure was wrong'],
  leftIcon: IconUtils.getIconDefinition('Icomoon', 'chess-bishop'),
  rightIcon: IconUtils.getIconDefinition('Icomoon', 'chicken'),
  rightOverlay: "I'm some text",
  children: <div style={{ flexGrow: 1, height: '30px' }} />,
  above: <p style={{ padding: '5px' }}>I'm above</p>,
  below: <p style={{ padding: '5px' }}>I'm below</p>,
  hideIconOnStatus: false,
  validationErrorIcon: IconUtils.getIconDefinition('LinearIcons', 'alarm'),
});
