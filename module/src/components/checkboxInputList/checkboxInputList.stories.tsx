import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import React from "react";
import { CheckboxInputList } from "./checkboxInputList.component";
import { Form } from "../../hooks";
import { IconUtils } from "../icon/icons.utils";

/** metadata */

export default {
  title: 'Form/Checkbox Input List',
  component: CheckboxInputList,
} as Meta<typeof CheckboxInputList>;

/** stories */

export const Default: StoryObj<typeof CheckboxInputList> = {
  render: () => {
    interface IFormData {
      value: (1 | 2 | 3 | 4)[];
    };

    const data: IFormData = { value: [] };

    const { formProp, formState } = Form.use(data);

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
        <p>Bound value: {formState?.value.join(', ')}</p>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const result = canvas.getByText('Bound value:');
    const pink = canvas.getByText('pink').parentElement?.parentElement;
    const red = canvas.getByText('red').parentElement?.parentElement;
    userEvent.click(within(pink!).getByRole('checkbox'));
    expect(result).toHaveTextContent('Bound value: 3');
    userEvent.click(within(red!).getByRole('checkbox'));
    expect(result).toHaveTextContent('Bound value: 3, 1');
    userEvent.click(within(pink!).getByRole('checkbox'));
    expect(result).toHaveTextContent('Bound value: 1');
  }
};

export const Grouped: StoryObj<typeof CheckboxInputList> = {
  render: () => {
    interface IFormData {
      value: (1 | 2 | 3 | 4)[];
    };

    const data: IFormData = { value: [] };

    const { formProp } = Form.use(data);

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
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const group1 = canvas.getByText('primary').parentElement;
    expect(group1?.nextSibling).toContainElement(canvas.getByText('red'));
    expect(group1?.nextSibling?.nextSibling).toContainElement(canvas.getByText('blue'));
    const group2 = canvas.getByText('secondary').parentElement;
    expect(group2?.nextSibling).toContainElement(canvas.getByText('pink'));
    expect(group2?.nextSibling?.nextSibling).toContainElement(canvas.getByText('brown'));
  }
};

export const CustomIcons: StoryObj<typeof CheckboxInputList> = {
  render: () => {
    interface IFormData {
      value: (1 | 2 | 3 | 4)[];
    };

    const data: IFormData = { value: [3] };

    const { formProp } = Form.use(data);

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
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const pink = canvas.getByText('pink').parentElement?.parentElement as HTMLElement;
    const red = canvas.getByText('red').parentElement?.parentElement as HTMLElement;
    const unchecked = within(red).getByTitle('Unchecked icon');
    expect(unchecked).toHaveAttribute('data-icon-set', 'Icomoon');
    expect(unchecked).toHaveAttribute('data-i', 'cross3');
    const checked = within(pink).getByTitle('Checked icon');
    expect(checked).toHaveAttribute('data-icon-set', 'Icomoon');
    expect(checked).toHaveAttribute('data-i', 'checkmark3');
  }
};

const checkedUrl = 'https://cdn.pixabay.com/photo/2019/02/19/19/45/thumbs-up-4007573_960_720.png';
const uncheckedUrl = 'https://www.stylist.co.uk/images/app/uploads/2021/07/02125306/psychology-of-second-hand-sadness-1120x1120.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress';
export const CustomContentWithoutCheckbox: StoryObj<typeof CheckboxInputList> = {
  render: () => {
    interface IFormData {
      value: ('a' | 'b' | 'c' | 'd' )[];
    };

    const data: IFormData = { value: ['c'] };

    const { formProp } = Form.use(data);

    const content = React.useCallback(
    (checked: boolean) => (
      <>
        <img
          width={50}
          src={
            checked
              ? checkedUrl
              : uncheckedUrl
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
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checked = canvas.getByText(`I'm checked`).parentElement?.parentElement as HTMLElement;
    const unchecked = canvas.getAllByText(`I'm not checked`)[0].parentElement?.parentElement as HTMLElement;
    expect(checked).toHaveAttribute('data-checked', 'true');
    expect(within(checked).getByRole('img')).toHaveAttribute('src', checkedUrl);
    expect(unchecked).toHaveAttribute('data-checked', 'false');
    expect(within(unchecked).getByRole('img')).toHaveAttribute('src', uncheckedUrl);
  }
};