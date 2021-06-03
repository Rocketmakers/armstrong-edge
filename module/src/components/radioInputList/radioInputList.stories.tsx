import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { RadioInputList } from './radioInputList.component';

/** metadata */

export default StoryUtils.createMeta(RadioInputList as any, 'Form', 'Radio Input List', {});

/** component template */

const Template = StoryUtils.createTemplate(RadioInputList);

/** stories */

export const Default = () => {
  const [value, setValue] = React.useState('');

  return (
    <RadioInputList
      value={value}
      onChange={setValue}
      options={[
        { id: 'a', name: 'red' },
        { id: 'b', name: 'blue' },
        { id: 'c', name: 'pink' },
        { id: 'd', name: 'brown' },
      ]}
    />
  );
};
export const Grouped = () => {
  const [value, setValue] = React.useState('');

  return (
    <RadioInputList
      value={value}
      onChange={setValue}
      options={[
        { id: 'a', name: 'red', group: 'primary', rightIcon: IconUtils.getIconDefinition('Icomoon', 'cheese') },
        { id: 'b', name: 'blue', group: 'primary' },
        { id: 'c', name: 'pink', group: 'secondary', rightIcon: IconUtils.getIconDefinition('Icomoon', 'heart') },
        { id: 'd', name: 'brown', group: 'secondary' },
      ]}
    />
  );
};
export const CheckedIcon = () => {
  const [value, setValue] = React.useState('');

  return (
    <RadioInputList
      value={value}
      onChange={setValue}
      checkedIcon={IconUtils.getIconDefinition('Icomoon', 'checkmark3')}
      options={[
        { id: 'a', name: 'red', rightIcon: IconUtils.getIconDefinition('Icomoon', 'cheese') },
        { id: 'b', name: 'blue' },
        { id: 'c', name: 'pink', rightIcon: IconUtils.getIconDefinition('Icomoon', 'heart') },
        { id: 'd', name: 'brown' },
      ]}
    />
  );
};
export const UncheckedIcon = () => {
  const [value, setValue] = React.useState('');

  return (
    <RadioInputList
      value={value}
      onChange={setValue}
      checkedIcon={IconUtils.getIconDefinition('Icomoon', 'checkmark3')}
      uncheckedIcon={IconUtils.getIconDefinition('Icomoon', 'cross3')}
      options={[
        { id: 'a', name: 'red', rightIcon: IconUtils.getIconDefinition('Icomoon', 'cheese') },
        { id: 'b', name: 'blue' },
        { id: 'c', name: 'pink', rightIcon: IconUtils.getIconDefinition('Icomoon', 'heart') },
        { id: 'd', name: 'brown' },
      ]}
    />
  );
};
