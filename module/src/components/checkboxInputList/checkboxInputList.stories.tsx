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