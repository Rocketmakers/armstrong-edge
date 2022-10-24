import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { ISelectProps, Select } from './select.component';

/** metadata */

export default StoryUtils.createMeta(Select, 'Form', 'Select', {});

/** component template */

const Template = StoryUtils.createTemplate(Select as React.FC<ISelectProps<any, any>>);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {
  options: [
    { id: 1, name: 'red' },
    { id: 2, name: 'blue' },
  ],
});
export const WithCustomDropDownIcon = StoryUtils.cloneTemplate(Template, {
  options: [
    { id: 1, name: 'red' },
    { id: 2, name: 'blue' },
  ],
  selectOverlayIcon: IconUtils.getIconDefinition('Icomoon', 'arrow-down13'),
});
export const WithIcons = StoryUtils.cloneTemplate(Template, {
  leftIcon: IconUtils.getIconDefinition('Icomoon', 'alarm'),
  options: [
    { id: 1, name: 'Noon' },
    { id: 2, name: 'Dawn' },
  ],
});
export const WithOverlayText = StoryUtils.cloneTemplate(Template, {
  leftIcon: { icon: 'cash', iconSet: 'Icomoon' },
  leftOverlay: '£',
  rightOverlay: 'GBP',
  options: [
    { id: 1, name: '100' },
    { id: 2, name: '200' },
  ],
});
export const WithValidationError = StoryUtils.cloneTemplate(Template, {
  options: [
    { id: 1, name: 'red' },
    { id: 2, name: 'blue' },
  ],
  validationErrorMessages: ['This colour is actually a bad one sorry'],
});

export const WithPlaceholder = StoryUtils.cloneTemplate(Template, {
  placeholderOption: 'Select a color...',
  options: [
    { id: 1, name: 'red' },
    { id: 2, name: 'blue' },
  ],
});
