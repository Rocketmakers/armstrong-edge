import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { CheckboxInput } from './checkboxInput.component';

/** metadata */

export default StoryUtils.createMeta(CheckboxInput, 'Form', 'Checkbox Input', {
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

const Template = StoryUtils.createTemplate(CheckboxInput);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, { label: 'Check me for cool fun time' });
export const Pending = StoryUtils.cloneTemplate(Template, { pending: true, label: 'Include thing' });
export const CustomIcon = StoryUtils.cloneTemplate(Template, {
  label: 'Use light theme?',
  checkedIcon: IconUtils.getIconDefinition('Icomoon', 'sun'),
});
export const UncheckedIcon = StoryUtils.cloneTemplate(Template, {
  label: 'Theme',
  checkedIcon: IconUtils.getIconDefinition('Icomoon', 'sun'),
  uncheckedIcon: IconUtils.getIconDefinition('Icomoon', 'moon'),
});
export const SwitchingLabel = StoryUtils.cloneTemplate(Template, {
  label: (checked) => (checked ? 'Wow now it is cool fun time' : 'Check me for cool fun time'),
});
export const UsingState = () => {
  const [checked, setChecked] = React.useState(true);
  return <CheckboxInput checked={checked} onValueChange={setChecked} label="I'm the thing" />;
};
