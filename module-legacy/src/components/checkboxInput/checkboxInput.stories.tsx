import * as React from 'react';

import { Form } from '../../hooks';
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

export const Default = StoryUtils.cloneTemplate(Template, { content: 'Check me for cool fun time' });
export const Pending = StoryUtils.cloneTemplate(Template, { pending: true, content: 'Include thing' });
export const CustomIcon = StoryUtils.cloneTemplate(Template, {
  content: 'Use light theme?',
  checkedIcon: IconUtils.getIconDefinition('Icomoon', 'sun'),
});
export const UncheckedIcon = StoryUtils.cloneTemplate(Template, {
  content: 'Theme',
  checkedIcon: IconUtils.getIconDefinition('Icomoon', 'sun'),
  uncheckedIcon: IconUtils.getIconDefinition('Icomoon', 'moon'),
});
export const SwitchingLabel = StoryUtils.cloneTemplate(Template, {
  content: (checked) => (checked ? 'Wow now it is cool fun time' : 'Check me for cool fun time'),
});
export const UsingState = () => {
  const [checked, setChecked] = React.useState(true);
  return <CheckboxInput checked={checked} onValueChange={setChecked} content="I'm the thing" />;
};
export const UsingForm = () => {
  const { formProp } = Form.use({ value: false });
  return <CheckboxInput bind={formProp('value').bind()} content="I'm the thing" />;
};
