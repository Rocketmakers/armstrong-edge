import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { TextInput } from './textInput.component';

/** metadata */

export default StoryUtils.createMeta(TextInput, 'Form', 'Text Input', {
  placeholder: {
    control: { type: 'text' },
    description: 'Adds placeholder text to the input',
    table: { category: 'Text' },
  },
  disabled: {
    control: { type: 'boolean' },
    description: 'Disable inputs',
    table: { category: 'Boolean' },
  },
});

/** component template */

const Template = StoryUtils.createTemplate(TextInput);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {});
export const WithIcons = StoryUtils.cloneTemplate(Template, {
  leftIcon: { icon: 'user', iconSet: 'Icomoon' },
  rightIcon: { icon: 'user-check', iconSet: 'Icomoon' },
});
export const Pending = StoryUtils.cloneTemplate(Template, {
  leftIcon: { icon: 'user', iconSet: 'Icomoon' },
  rightIcon: { icon: 'user-check', iconSet: 'Icomoon' },
  pending: true,
});
export const ElementsBelow = StoryUtils.cloneTemplate(Template, {
  leftIcon: { icon: 'user', iconSet: 'Icomoon' },
  rightIcon: { icon: 'user-check', iconSet: 'Icomoon' },
  below: <p>Hello there</p>,
});
