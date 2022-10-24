import * as React from 'react';

import { Form } from '../../hooks';
import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { RadioInputList } from './radioInputList.component';

/** metadata */

export default StoryUtils.createMeta(RadioInputList as any, 'Form', 'Radio Input List', {});

/** component template */

// const Template = StoryUtils.createTemplate(RadioInputList);

/** stories */

export const Default = () => {
  const { formProp, formState } = Form.use<{ value: string }>();

  return (
    <>
      <RadioInputList
        bind={formProp('value').bind()}
        options={[
          { id: 'a', name: 'red' },
          { id: 'b', name: 'blue' },
          { id: 'c', name: 'pink' },
          { id: 'd', name: 'brown' },
        ]}
      />
      <br />
      <br />
      <br />
      <p className="bound-value">bound value: {formState?.value}</p>
    </>
  );
};
export const Horizontal = () => {
  const { formProp, formState } = Form.use<{ value: string }>();

  return (
    <>
      <RadioInputList
        bind={formProp('value').bind()}
        direction="horizontal"
        options={[
          { id: 'a', name: 'red' },
          { id: 'b', name: 'blue' },
          { id: 'c', name: 'pink' },
          { id: 'd', name: 'brown' },
        ]}
      />
      <p className="bound-value">bound value: {formState?.value}</p>
    </>
  );
};
export const Grouped = () => {
  const { formProp, formState } = Form.use<{ value: string }>();

  return (
    <>
      <RadioInputList
        bind={formProp('value').bind()}
        options={[
          { id: 'a', name: 'red', group: 'primary', rightIcon: IconUtils.getIconDefinition('Icomoon', 'cheese') },
          { id: 'b', name: 'blue', group: 'primary' },
          { id: 'c', name: 'pink', group: 'secondary', rightIcon: IconUtils.getIconDefinition('Icomoon', 'heart') },
          { id: 'd', name: 'brown', group: 'secondary' },
        ]}
      />
      <br />
      <br />
      <br />
      <p className="bound-value">bound value: {formState?.value}</p>
    </>
  );
};
export const CheckedIcon = () => {
  const { formProp, formState } = Form.use<{ value: string }>();

  return (
    <>
      <RadioInputList
        bind={formProp('value').bind()}
        checkedIcon={IconUtils.getIconDefinition('Icomoon', 'checkmark3')}
        options={[
          { id: 'a', name: 'red', rightIcon: IconUtils.getIconDefinition('Icomoon', 'cheese') },
          { id: 'b', name: 'blue' },
          { id: 'c', name: 'pink', rightIcon: IconUtils.getIconDefinition('Icomoon', 'heart') },
          { id: 'd', name: 'brown' },
        ]}
      />
      <br />
      <br />
      <br />
      <p className="bound-value">bound value: {formState?.value}</p>
    </>
  );
};
export const UncheckedIcon = () => {
  const { formProp, formState } = Form.use<{ value: string }>();

  return (
    <>
      <RadioInputList
        bind={formProp('value').bind()}
        checkedIcon={IconUtils.getIconDefinition('Icomoon', 'checkmark3')}
        uncheckedIcon={IconUtils.getIconDefinition('Icomoon', 'cross3')}
        options={[
          { id: 'a', name: 'red', rightIcon: IconUtils.getIconDefinition('Icomoon', 'cheese') },
          { id: 'b', name: 'blue' },
          { id: 'c', name: 'pink', rightIcon: IconUtils.getIconDefinition('Icomoon', 'heart') },
          { id: 'd', name: 'brown' },
        ]}
      />
      <br />
      <br />
      <br />
      <p className="bound-value">bound value: {formState?.value}</p>
    </>
  );
};
export const NumericIds = () => {
  const { formProp, formState } = Form.use<{ value: number }>();

  return (
    <>
      <RadioInputList
        bind={formProp('value').bind()}
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
      <p className="bound-value">bound value: {formState?.value}</p>
    </>
  );
};

export const CustomContent = () => {
  const { formProp, formState } = Form.use<{ value: string }>();

  return (
    <>
      <RadioInputList
        bind={formProp('value').bind()}
        options={[
          {
            id: 'a',
            content: (
              <p>
                <strong>I'm a big strong</strong> piece of text
              </p>
            ),
          },
          {
            id: 'b',
            content: (
              <img
                width={100}
                src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
              />
            ),
          },
          {
            id: 'c',
            content: (
              <p>
                Hello there <em>BUDDY</em>
              </p>
            ),
          },
        ]}
      />
      <br />
      <br />
      <br />
      <p className="bound-value">bound value: {formState?.value}</p>
    </>
  );
};
export const CustomContentWithoutRadio = () => {
  const { formProp, formState } = Form.use<{ value: string }>();

  const content = (checked: boolean) => (
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
      <RadioInputList
        bind={formProp('value').bind()}
        direction="horizontal"
        hideRadio
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
      <p className="bound-value">bound value: {formState?.value}</p>
    </>
  );
};
