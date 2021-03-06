import * as React from 'react';

import { Form } from '../../hooks';
import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { ListBox } from './listBox.component';

/** metadata */

export default StoryUtils.createMeta(ListBox, 'Form', 'Listbox', {});

/** component template */

// const Template = StoryUtils.createTemplate(ListBox as React.FC<IListBoxProps<any, any>>);

/** stories */

export const Default = () => {
  const { formProp } = Form.use<{ value: number }>();

  return (
    <ListBox
      bind={formProp('value').bind()}
      placeholder="Please pick something...."
      options={[
        { id: 1, name: 'red' },
        { id: 2, name: 'blue' },
        { id: 3, name: 'pink' },
        { id: 4, name: 'brown' },
      ]}
    />
  );
};
export const WithCustomDropDownIcon = () => {
  const { formProp } = Form.use<{ value: number }>();

  return (
    <ListBox
      bind={formProp('value').bind()}
      placeholder="Please pick something...."
      options={[
        { id: 1, name: 'red' },
        { id: 2, name: 'blue' },
        { id: 3, name: 'pink' },
        { id: 4, name: 'brown' },
      ]}
      selectOverlayIcon={IconUtils.getIconDefinition('Icomoon', 'arrow-down13')}
    />
  );
};
export const WithIcons = () => {
  const { formProp } = Form.use<{ value: number }>();

  return (
    <ListBox
      bind={formProp('value').bind()}
      placeholder="Please pick something...."
      leftIcon={IconUtils.getIconDefinition('Icomoon', 'alarm')}
      options={[
        { id: 1, name: 'red' },
        { id: 2, name: 'blue' },
        { id: 3, name: 'pink' },
        { id: 4, name: 'brown' },
      ]}
    />
  );
};
export const WithValidationError = () => {
  const { formProp } = Form.use<{ value: number }>();

  return (
    <ListBox
      bind={formProp('value').bind()}
      placeholder="Please pick something...."
      leftIcon={IconUtils.getIconDefinition('Icomoon', 'alarm')}
      options={[
        { id: 1, name: 'red' },
        { id: 2, name: 'blue' },
        { id: 3, name: 'pink' },
        { id: 4, name: 'brown' },
      ]}
      validationErrorMessages={['This colour is actually a bad one sorry']}
    />
  );
};
export const WithGroupsAndIcons = () => {
  const { formProp } = Form.use<{ value: number }>();

  return (
    <ListBox
      bind={formProp('value').bind()}
      placeholder="Please pick something...."
      leftIcon={IconUtils.getIconDefinition('Icomoon', 'alarm')}
      options={[
        { id: 1, name: 'red', group: 'primary', rightIcon: IconUtils.getIconDefinition('Icomoon', 'cheese') },
        { id: 2, name: 'blue', group: 'primary' },
        { id: 3, name: 'pink', group: 'secondary', rightIcon: IconUtils.getIconDefinition('Icomoon', 'heart') },
        { id: 4, name: 'brown', group: 'secondary' },
      ]}
    />
  );
};

export const Above = () => {
  const { formProp } = Form.use<{ value: number }>();

  return (
    <ListBox
      bind={formProp('value').bind()}
      placeholder="Please pick something...."
      options={[
        { id: 1, name: 'red' },
        { id: 2, name: 'blue' },
        { id: 3, name: 'pink' },
        { id: 4, name: 'brown' },
      ]}
      position="above"
    />
  );
};
