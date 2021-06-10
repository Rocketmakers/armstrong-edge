import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { CheckboxInputList } from './checkboxInputList.component';

/** metadata */

export default StoryUtils.createMeta(CheckboxInputList as any, 'Form', 'Checkbox Input List', {});

/** component template */

// const Template = StoryUtils.createTemplate(CheckboxInputList);

/** stories */

export const Default = () => {
  const [value, setValue] = React.useState([]);

  return (
    <>
      <CheckboxInputList
        value={value}
        onChange={setValue}
        options={[
          { id: 1, name: 'red' },
          { id: 2, name: 'blue' },
          { id: 3, name: 'pink' },
          { id: 4, name: 'brown' },
        ]}
      />
      <br />
      <br />
      <br />
      <p className="bound-value">bound value: {value.join(', ')}</p>
    </>
  );
};
export const Grouped = () => {
  const [value, setValue] = React.useState([]);

  return (
    <>
      <CheckboxInputList
        value={value}
        onChange={setValue}
        options={[
          { id: 1, name: 'red', group: 'primary', rightIcon: IconUtils.getIconDefinition('Icomoon', 'cheese') },
          { id: 2, name: 'blue', group: 'primary' },
          { id: 3, name: 'pink', group: 'secondary', rightIcon: IconUtils.getIconDefinition('Icomoon', 'heart') },
          { id: 4, name: 'brown', group: 'secondary' },
        ]}
      />
      <br />
      <br />
      <br />
      <p className="bound-value">bound value: {value.join(', ')}</p>
    </>
  );
};
export const CheckedIcon = () => {
  const [value, setValue] = React.useState([]);

  return (
    <>
      <CheckboxInputList
        value={value}
        onChange={setValue}
        checkedIcon={IconUtils.getIconDefinition('Icomoon', 'checkmark3')}
        options={[
          { id: 1, name: 'red', rightIcon: IconUtils.getIconDefinition('Icomoon', 'cheese') },
          { id: 2, name: 'blue' },
          { id: 3, name: 'pink', rightIcon: IconUtils.getIconDefinition('Icomoon', 'heart') },
          { id: 4, name: 'brown' },
        ]}
      />
      <br />
      <br />
      <br />
      <p className="bound-value">bound value: {value.join(', ')}</p>
    </>
  );
};
export const UncheckedIcon = () => {
  const [value, setValue] = React.useState([]);

  return (
    <>
      <CheckboxInputList
        value={value}
        onChange={setValue}
        checkedIcon={IconUtils.getIconDefinition('Icomoon', 'checkmark3')}
        uncheckedIcon={IconUtils.getIconDefinition('Icomoon', 'cross3')}
        options={[
          { id: 1, name: 'red', rightIcon: IconUtils.getIconDefinition('Icomoon', 'cheese') },
          { id: 2, name: 'blue' },
          { id: 3, name: 'pink', rightIcon: IconUtils.getIconDefinition('Icomoon', 'heart') },
          { id: 4, name: 'brown' },
        ]}
      />
      <br />
      <br />
      <br />
      <p className="bound-value">bound value: {value.join(', ')}</p>
    </>
  );
};
export const NumericIds = () => {
  const [value, setValue] = React.useState<number[]>([]);

  return (
    <>
      <CheckboxInputList
        value={value}
        onChange={setValue}
        checkedIcon={IconUtils.getIconDefinition('Icomoon', 'checkmark3')}
        uncheckedIcon={IconUtils.getIconDefinition('Icomoon', 'cross3')}
        options={[
          { id: 1, name: 'red', rightIcon: IconUtils.getIconDefinition('Icomoon', 'cheese') },
          { id: 2, name: 'blue' },
          { id: 3, name: 'pink', rightIcon: IconUtils.getIconDefinition('Icomoon', 'heart') },
          { id: 4, name: 'brown' },
        ]}
      />
      <br />
      <br />
      <br />
      <p className="bound-value">bound value: {value.join(', ')}</p>
    </>
  );
};