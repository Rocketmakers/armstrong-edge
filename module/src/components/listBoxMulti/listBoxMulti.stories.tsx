import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { ListBoxMulti } from './listBoxMulti.component';

/** metadata */

export default StoryUtils.createMeta(ListBoxMulti, 'Form', 'Listbox Multi', {});

/** component template */

// const Template = StoryUtils.createTemplate(ListBoxMulti as React.FC<IListBoxMultiProps<any, any>>);

/** stories */

export const Default = () => {
  const [value, setValue] = React.useState([]);

  return (
    <ListBoxMulti
      value={value}
      placeholder="Please pick something...."
      onValueChange={setValue}
      options={[
        { id: 'a', name: 'red' },
        { id: 'b', name: 'blue' },
        { id: 'c', name: 'pink' },
        { id: 'd', name: 'brown' },
      ]}
    />
  );
};
export const CustomPreview = () => {
  const [value, setValue] = React.useState([]);

  return (
    <ListBoxMulti
      value={value}
      placeholder="Please pick something...."
      onValueChange={setValue}
      renderPreview={(items) => <p>{items.length} colours selected</p>}
      options={[
        { id: 'a', name: 'red' },
        { id: 'b', name: 'blue' },
        { id: 'c', name: 'pink' },
        { id: 'd', name: 'brown' },
      ]}
    />
  );
};
export const WithCustomDropDownIcon = () => {
  const [value, setValue] = React.useState([]);

  return (
    <ListBoxMulti
      value={value}
      placeholder="Please pick something...."
      onValueChange={setValue}
      options={[
        { id: 'a', name: 'red' },
        { id: 'b', name: 'blue' },
        { id: 'c', name: 'pink' },
        { id: 'd', name: 'brown' },
      ]}
      selectOverlayIcon={IconUtils.getIconDefinition('Icomoon', 'arrow-down13')}
    />
  );
};
export const WithIcons = () => {
  const [value, setValue] = React.useState([]);

  return (
    <ListBoxMulti
      value={value}
      placeholder="Please pick something...."
      leftIcon={IconUtils.getIconDefinition('Icomoon', 'alarm')}
      onValueChange={setValue}
      options={[
        { id: 'a', name: 'red' },
        { id: 'b', name: 'blue' },
        { id: 'c', name: 'pink' },
        { id: 'd', name: 'brown' },
      ]}
    />
  );
};
export const WithValidationError = () => {
  const [value, setValue] = React.useState([]);

  return (
    <ListBoxMulti
      value={value}
      placeholder="Please pick something...."
      leftIcon={IconUtils.getIconDefinition('Icomoon', 'alarm')}
      onValueChange={setValue}
      options={[
        { id: 'a', name: 'red' },
        { id: 'b', name: 'blue' },
        { id: 'c', name: 'pink' },
        { id: 'd', name: 'brown' },
      ]}
      validationErrorMessages={['This colour is actually a bad one sorry']}
    />
  );
};
export const WithGroupsAndIcons = () => {
  const [value, setValue] = React.useState([]);

  return (
    <ListBoxMulti
      value={value}
      placeholder="Please pick something...."
      leftIcon={IconUtils.getIconDefinition('Icomoon', 'alarm')}
      onValueChange={setValue}
      options={[
        { id: 'a', name: 'red', group: 'primary', rightIcon: IconUtils.getIconDefinition('Icomoon', 'cheese') },
        { id: 'b', name: 'blue', group: 'primary' },
        { id: 'c', name: 'pink', group: 'secondary', rightIcon: IconUtils.getIconDefinition('Icomoon', 'heart') },
        { id: 'd', name: 'brown', group: 'secondary' },
      ]}
    />
  );
};
