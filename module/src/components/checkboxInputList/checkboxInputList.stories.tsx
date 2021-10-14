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
export const Horizontal = () => {
  const [value, setValue] = React.useState([]);

  return (
    <>
      <CheckboxInputList
        value={value}
        onChange={setValue}
        direction="horizontal"
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

export const CustomContentWithoutCheckbox = () => {
  const [value, setValue] = React.useState(['']);

  const content = (checked) => (
    <>
      <img
        width={50}
        src={
          checked
            ? 'https://cdn.pixabay.com/photo/2019/02/19/19/45/thumbs-up-4007573_960_720.png'
            : 'https://www.stylist.co.uk/images/app/uploads/2021/07/02125306/psychology-of-second-hand-sadness-1120x1120.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress'
        }
      />
      <p>I'm {!checked && 'not'} checked</p>
    </>
  );

  return (
    <>
      <CheckboxInputList
        value={value}
        onChange={setValue}
        direction="horizontal"
        hideCheckbox
        options={[
          {
            id: 'a',
            content,
          },
          {
            id: 'b',
            content,
          },
          {
            id: 'c',
            content,
          },
          {
            id: 'd',
            content,
          },
        ]}
      />
      <p className="bound-value">bound value: {value}</p>
    </>
  );
};
