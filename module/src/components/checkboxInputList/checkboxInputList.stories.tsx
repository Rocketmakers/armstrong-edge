import * as React from 'react';

import { Form } from '../../hooks';
import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { CheckboxInputList } from './checkboxInputList.component';

/** metadata */

export default StoryUtils.createMeta(CheckboxInputList as any, 'Form', 'Checkbox Input List', {});

/** component template */

// const Template = StoryUtils.createTemplate(CheckboxInputList);

/** stories */

export const Default = () => {
  const { formProp, formState } = Form.use({ value: [] });

  return (
    <>
      <CheckboxInputList
        bind={formProp('value').bind()}
        options={[
          { id: 1, content: 'red' },
          { id: 2, content: 'blue' },
          { id: 3, content: 'pink' },
          { id: 4, content: 'brown' },
        ]}
      />
      <br />
      <br />
      <br />
      <p className="bound-value">bound value: {formState?.value.join(', ')}</p>
    </>
  );
};
export const Horizontal = () => {
  const { formProp, formState } = Form.use({ value: [] });

  return (
    <>
      <CheckboxInputList
        bind={formProp('value').bind()}
        direction="horizontal"
        options={[
          { id: 1, content: 'red' },
          { id: 2, content: 'blue' },
          { id: 3, content: 'pink' },
          { id: 4, content: 'brown' },
        ]}
      />
      <br />
      <br />
      <br />
      <p className="bound-value">bound value: {formState?.value.join(', ')}</p>
    </>
  );
};
export const Grouped = () => {
  const { formProp, formState } = Form.use({ value: [] });

  return (
    <>
      <CheckboxInputList
        bind={formProp('value').bind()}
        options={[
          { id: 1, content: 'red', group: 'primary', rightIcon: IconUtils.getIconDefinition('Icomoon', 'cheese') },
          { id: 2, content: 'blue', group: 'primary' },
          { id: 3, content: 'pink', group: 'secondary', rightIcon: IconUtils.getIconDefinition('Icomoon', 'heart') },
          { id: 4, content: 'brown', group: 'secondary' },
        ]}
      />
      <br />
      <br />
      <br />
      <p className="bound-value">bound value: {formState?.value.join(', ')}</p>
    </>
  );
};
export const CheckedIcon = () => {
  const { formProp, formState } = Form.use({ value: [] });

  return (
    <>
      <CheckboxInputList
        bind={formProp('value').bind()}
        checkedIcon={IconUtils.getIconDefinition('Icomoon', 'checkmark3')}
        options={[
          { id: 1, content: 'red', rightIcon: IconUtils.getIconDefinition('Icomoon', 'cheese') },
          { id: 2, content: 'blue' },
          { id: 3, content: 'pink', rightIcon: IconUtils.getIconDefinition('Icomoon', 'heart') },
          { id: 4, content: 'brown' },
        ]}
      />
      <br />
      <br />
      <br />
      <p className="bound-value">bound value: {formState?.value.join(', ')}</p>
    </>
  );
};
export const UncheckedIcon = () => {
  const { formProp, formState } = Form.use({ value: [] });

  return (
    <>
      <CheckboxInputList
        bind={formProp('value').bind()}
        checkedIcon={IconUtils.getIconDefinition('Icomoon', 'checkmark3')}
        uncheckedIcon={IconUtils.getIconDefinition('Icomoon', 'cross3')}
        options={[
          { id: 1, content: 'red', rightIcon: IconUtils.getIconDefinition('Icomoon', 'cheese') },
          { id: 2, content: 'blue' },
          { id: 3, content: 'pink', rightIcon: IconUtils.getIconDefinition('Icomoon', 'heart') },
          { id: 4, content: 'brown' },
        ]}
      />
      <br />
      <br />
      <br />
      <p className="bound-value">bound value: {formState?.value.join(', ')}</p>
    </>
  );
};
export const NumericIds = () => {
  const { formProp, formState } = Form.use({ value: [] });

  return (
    <>
      <CheckboxInputList
        bind={formProp('value').bind()}
        checkedIcon={IconUtils.getIconDefinition('Icomoon', 'checkmark3')}
        uncheckedIcon={IconUtils.getIconDefinition('Icomoon', 'cross3')}
        options={[
          { id: 1, content: 'red', rightIcon: IconUtils.getIconDefinition('Icomoon', 'cheese') },
          { id: 2, content: 'blue' },
          { id: 3, content: 'pink', rightIcon: IconUtils.getIconDefinition('Icomoon', 'heart') },
          { id: 4, content: 'brown' },
        ]}
      />
      <br />
      <br />
      <br />
      <p className="bound-value">bound value: {formState?.value.join(', ')}</p>
    </>
  );
};

export const CustomContentWithoutCheckbox = () => {
  const { formProp, formState } = Form.use({ value: [''] });

  const content = React.useCallback(
    (checked: boolean) => (
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
    ),
    []
  );

  return (
    <>
      <CheckboxInputList
        bind={formProp('value').bind()}
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
      <p className="bound-value">bound value: {formState?.value.join(', ')}</p>
    </>
  );
};
