import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { AutoCompleteInputMulti } from './autoCompleteInputMulti.component';

/** metadata */

export default StoryUtils.createMeta(AutoCompleteInputMulti, 'Form', 'Auto Complete Input Multi', {
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

// const Template = StoryUtils.createTemplate(AutoCompleteInputMulti);

/** stories */

export const Default = () => {
  const [value, setValue] = React.useState([]);

  return (
    <>
      <AutoCompleteInputMulti
        value={value}
        onChange={setValue}
        options={[
          { id: 1, name: 'red' },
          { id: 2, name: 'blue' },
          { id: 3, name: 'purple' },
        ]}
      />
      <p className="bound-value">bound value: {value.join(', ')}</p>
    </>
  );
};
export const tagsAbove = () => {
  const [value, setValue] = React.useState([]);

  return (
    <>
      <AutoCompleteInputMulti
        value={value}
        onChange={setValue}
        tagPosition="above"
        options={[
          { id: 1, name: 'red' },
          { id: 2, name: 'blue' },
          { id: 3, name: 'purple' },
        ]}
      />
      <p className="bound-value">bound value: {value.join(', ')}</p>
    </>
  );
};
export const AllowFreeText = () => {
  const [value, setValue] = React.useState([]);

  return (
    <>
      <AutoCompleteInputMulti
        value={value}
        onChange={setValue}
        allowFreeText
        options={[
          { id: 1, name: 'red' },
          { id: 2, name: 'blue' },
          { id: 3, name: 'purple' },
        ]}
      />
      <p className="bound-value">bound value: {value.join(', ')}</p>
    </>
  );
};
export const WithIcons = () => {
  const [value, setValue] = React.useState([]);

  return (
    <>
      <AutoCompleteInputMulti
        value={value}
        onChange={setValue}
        leftIcon={IconUtils.getIconDefinition('Icomoon', 'brush')}
        options={[
          { id: 1, name: 'red', leftIcon: IconUtils.getIconDefinition('Icomoon', 'chopper2') },
          { id: 2, name: 'blue', leftIcon: IconUtils.getIconDefinition('Icomoon', 'cherry') },
          { id: 3, name: 'purple', leftIcon: IconUtils.getIconDefinition('Icomoon', 'circle-css') },
        ]}
      />
      <p className="bound-value">bound value: {value.join(', ')}</p>
    </>
  );
};
export const WithGroups = () => {
  const [value, setValue] = React.useState([]);

  return (
    <>
      <AutoCompleteInputMulti
        value={value}
        onChange={setValue}
        leftIcon={IconUtils.getIconDefinition('Icomoon', 'brush')}
        options={[
          { id: 1, name: 'red', leftIcon: IconUtils.getIconDefinition('Icomoon', 'chopper2'), group: 'primary' },
          { id: 2, name: 'blue', leftIcon: IconUtils.getIconDefinition('Icomoon', 'cherry'), group: 'primary' },
          { id: 3, name: 'purple', leftIcon: IconUtils.getIconDefinition('Icomoon', 'circle-css'), group: 'secondary' },
        ]}
      />
      <p className="bound-value">bound value: {value.join(', ')}</p>
    </>
  );
};
export const WithValidationErrors = () => {
  const [value, setValue] = React.useState([]);

  return (
    <>
      <AutoCompleteInputMulti
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
      <p className="bound-value">bound value: {value.join(', ')}</p>
    </>
  );
};
