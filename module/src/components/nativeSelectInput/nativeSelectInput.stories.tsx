import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { INativeSelectInputProps, NativeSelectInput } from './nativeSelectInput.component';

/** metadata */

export default StoryUtils.createMeta(NativeSelectInput, 'Form', 'Native Select Input', {});

/** component template */

const Template = StoryUtils.createTemplate(NativeSelectInput as React.FC<INativeSelectInputProps<any, any>>);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {
  options: [
    { id: 'a', name: 'red' },
    { id: 'b', name: 'blue' },
  ],
});
export const WithCustomDropDownIcon = StoryUtils.cloneTemplate(Template, {
  options: [
    { id: 'a', name: 'red' },
    { id: 'b', name: 'blue' },
  ],
  selectOverlayIcon: IconUtils.getIconDefinition('Icomoon', 'arrow-down13'),
});
export const WithIcons = StoryUtils.cloneTemplate(Template, {
  leftIcon: IconUtils.getIconDefinition('Icomoon', 'alarm'),
  options: [
    { id: 'a', name: 'Noon' },
    { id: 'b', name: 'Dawn' },
  ],
});
export const WithOverlayText = StoryUtils.cloneTemplate(Template, {
  leftIcon: { icon: 'cash', iconSet: 'Icomoon' },
  leftOverlay: '£',
  rightOverlay: 'GBP',
  options: [
    { id: 'a', name: '100' },
    { id: 'b', name: '200' },
  ],
});
export const WithValidationError = StoryUtils.cloneTemplate(Template, {
  options: [
    { id: 'a', name: 'red' },
    { id: 'b', name: 'blue' },
  ],
  validationErrorMessages: ['This colour is actually a bad one sorry'],
});