import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { AutoCompleteInput } from './autoCompleteInput.component';

/** metadata */

export default StoryUtils.createMeta(AutoCompleteInput, 'Form', 'Auto Complete Input', {
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

// const Template = StoryUtils.createTemplate(AutoCompleteInput);

/** stories */

export const Default = () => {
  const [value, setValue] = React.useState('');

  return (
    <AutoCompleteInput
      value={value}
      onChange={setValue}
      options={[
        { id: 'a', name: 'red' },
        { id: 'b', name: 'blue' },
        { id: 'c', name: 'purple' },
      ]}
    />
  );
};
export const AllowFreeText = () => {
  const [value, setValue] = React.useState('');

  return (
    <AutoCompleteInput
      value={value}
      onChange={setValue}
      allowFreeText
      options={[
        { id: 'a', name: 'red' },
        { id: 'b', name: 'blue' },
        { id: 'c', name: 'purple' },
      ]}
    />
  );
};
export const WithIcons = () => {
  const [value, setValue] = React.useState('b');

  return (
    <AutoCompleteInput
      value={value}
      onChange={setValue}
      leftIcon={IconUtils.getIconDefinition('Icomoon', 'brush')}
      options={[
        { id: 'a', name: 'red', leftIcon: IconUtils.getIconDefinition('Icomoon', 'chopper2') },
        { id: 'b', name: 'blue', leftIcon: IconUtils.getIconDefinition('Icomoon', 'cherry') },
        { id: 'c', name: 'purple', leftIcon: IconUtils.getIconDefinition('Icomoon', 'circle-css') },
      ]}
    />
  );
};
export const WithGroups = () => {
  const [value, setValue] = React.useState('b');

  return (
    <AutoCompleteInput
      value={value}
      onChange={setValue}
      leftIcon={IconUtils.getIconDefinition('Icomoon', 'brush')}
      options={[
        { id: 'a', name: 'red', leftIcon: IconUtils.getIconDefinition('Icomoon', 'chopper2'), group: 'primary' },
        { id: 'b', name: 'blue', leftIcon: IconUtils.getIconDefinition('Icomoon', 'cherry'), group: 'primary' },
        { id: 'c', name: 'purple', leftIcon: IconUtils.getIconDefinition('Icomoon', 'circle-css'), group: 'secondary' },
      ]}
    />
  );
};
export const WithValidationErrors = () => {
  const [value, setValue] = React.useState('b');

  return (
    <AutoCompleteInput
      value={value}
      onChange={setValue}
      leftIcon={IconUtils.getIconDefinition('Icomoon', 'brush')}
      options={[
        { id: 'a', name: 'red', leftIcon: IconUtils.getIconDefinition('Icomoon', 'chopper2'), group: 'primary' },
        { id: 'b', name: 'blue', leftIcon: IconUtils.getIconDefinition('Icomoon', 'cherry'), group: 'primary' },
        { id: 'c', name: 'purple', leftIcon: IconUtils.getIconDefinition('Icomoon', 'circle-css'), group: 'secondary' },
      ]}
      validationErrorMessages={['your taste in colours is terrible']}
    />
  );
};
