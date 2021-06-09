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
  const [value, setValue] = React.useState<number>();

  return (
    <>
      <AutoCompleteInput
        value={value}
        onChange={setValue}
        options={[
          { id: 1, name: 'red' },
          { id: 2, name: 'blue' },
          { id: 3, name: 'purple' },
        ]}
      />
      <p className="bound-value">bound value: {value}</p>
    </>
  );
};
export const AllowFreeText = () => {
  const [value, setValue] = React.useState('');

  return (
    <>
      <AutoCompleteInput
        value={value}
        onChange={setValue}
        allowFreeText
        options={[
          { id: '1', name: 'red' },
          { id: '2', name: 'blue' },
          { id: '3', name: 'purple' },
        ]}
      />
      <p className="bound-value">bound value: {value}</p>
    </>
  );
};
export const DontFilter = () => {
  const [value, setValue] = React.useState('');

  return (
    <>
      <AutoCompleteInput
        value={value}
        onChange={setValue}
        options={[
          { id: '1', name: 'red' },
          { id: '2', name: 'blue' },
          { id: '3', name: 'purple' },
        ]}
        filterOptions={false}
      />
      <p className="bound-value">bound value: {value}</p>
    </>
  );
};
export const WithIcons = () => {
  const [value, setValue] = React.useState(2);

  return (
    <>
      <AutoCompleteInput
        value={value}
        onChange={setValue}
        leftIcon={IconUtils.getIconDefinition('Icomoon', 'brush')}
        options={[
          { id: 1, name: 'red', leftIcon: IconUtils.getIconDefinition('Icomoon', 'chopper2') },
          { id: 2, name: 'blue', leftIcon: IconUtils.getIconDefinition('Icomoon', 'cherry') },
          { id: 3, name: 'purple', leftIcon: IconUtils.getIconDefinition('Icomoon', 'circle-css') },
        ]}
      />
      <p className="bound-value">bound value: {value}</p>
    </>
  );
};
export const WithGroups = () => {
  const [value, setValue] = React.useState(2);

  return (
    <>
      <AutoCompleteInput
        value={value}
        onChange={setValue}
        leftIcon={IconUtils.getIconDefinition('Icomoon', 'brush')}
        options={[
          { id: 1, name: 'red', leftIcon: IconUtils.getIconDefinition('Icomoon', 'chopper2'), group: 'primary' },
          { id: 2, name: 'blue', leftIcon: IconUtils.getIconDefinition('Icomoon', 'cherry'), group: 'primary' },
          { id: 3, name: 'purple', leftIcon: IconUtils.getIconDefinition('Icomoon', 'circle-css'), group: 'secondary' },
        ]}
      />
      <p className="bound-value">bound value: {value}</p>
    </>
  );
};
export const WithValidationErrors = () => {
  const [value, setValue] = React.useState(2);

  return (
    <>
      <AutoCompleteInput
        value={value}
        onChange={setValue}
        leftIcon={IconUtils.getIconDefinition('Icomoon', 'brush')}
        options={[
          { id: 1, name: 'red', leftIcon: IconUtils.getIconDefinition('Icomoon', 'chopper2'), group: 'primary' },
          { id: 2, name: 'blue', leftIcon: IconUtils.getIconDefinition('Icomoon', 'cherry'), group: 'primary' },
          { id: 3, name: 'purple', leftIcon: IconUtils.getIconDefinition('Icomoon', 'circle-css'), group: 'secondary' },
        ]}
        validationErrorMessages={['your taste in colours is terrible']}
      />
      <p className="bound-value">bound value: {value}</p>
    </>
  );
};
