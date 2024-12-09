import { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within, expect, fn } from "@storybook/test";
import React from "react";

import { useForm } from "../../form";
import { MultiSelect, NativeSelect, Select } from "./select.component";

const groupedOptions = [
  {
    label: "Colours",
    options: [
      { id: 1, content: "ocean" },
      { id: 2, content: "blue" },
      { id: 3, content: "purple" },
      { id: 4, content: "red" },
      { id: 5, content: "orange" },
      { id: 6, content: "yellow" },
      { id: 7, content: "green" },
      { id: 8, content: "forest" },
      { id: 9, content: "slate" },
      { id: 10, content: "silver" },
    ],
  },
  {
    label: "Flavours",
    options: [
      { id: 11, content: "vanilla" },
      { id: 12, content: "chocolate" },
      { id: 13, content: "strawberry" },
    ],
  },
];

const flatOptions = groupedOptions[0].options;

/** meta  */

export default {
  title: "Components/Select",
  component: Select,
} as Meta<typeof Select>;

/** component template */

const Template: StoryObj<typeof Select> = {
  args: { options: groupedOptions, onInputChange: fn(), onSelectOption: fn() },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- The type discriminator on InputWrapper prevents storybook from spreading pure props on here without a cast
  render: (args: any) => {
    const { formProp, formState } = useForm<{ value?: number }>();
    return (
      <div style={{ height: "20rem" }}>
        <Select bind={formProp("value").bind()} {...args} />
        <div data-testid="result" style={{ marginTop: "10px" }}>
          Current value: {formState?.value}
        </div>
      </div>
    );
  },
};

/** stories */

export const Default: StoryObj<typeof Select> = {
  ...Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole<HTMLInputElement>("combobox");
    userEvent.click(input);

    const blue = await waitFor(() => canvas.getByText("blue"));
    userEvent.click(blue);

    const result = canvas.getByTestId("result");
    await waitFor(() => expect(result).toHaveTextContent(`Current value: 2`));
  },
};

export const Disabled: StoryObj<typeof Select> = {
  render: () => {
    return (
      <div
        style={{
          width: "100%",
          height: "20rem",
        }}
      >
        <Select options={groupedOptions} disabled />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole<HTMLInputElement>("combobox");
    expect(input).toBeDisabled();
  },
};

export const Native: StoryObj<typeof Select> = {
  render: () => {
    const { formProp } = useForm<{ value?: number }>();
    return (
      <div
        style={{
          width: "100%",
          height: "20rem",
        }}
      >
        <NativeSelect options={flatOptions} bind={formProp("value").bind()} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const input =
      within(canvasElement).getByRole<HTMLSelectElement>("combobox");
    expect(input).toBeVisible();
  },
};

export const Multi: StoryObj<typeof Select> = {
  render: () => {
    const { formProp, formState } = useForm<{ value: number[] }>({
      value: [1, 3, 5],
    });
    return (
      <div
        style={{
          width: "100%",
          height: "20rem",
        }}
      >
        <MultiSelect options={flatOptions} bind={formProp("value").bind()} />
        <div data-testid="result" style={{ marginTop: "10px" }}>
          Current value: {formState?.value?.join(", ")}
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole<HTMLInputElement>("combobox");
    expect(input).toBeVisible();

    const result = within(canvasElement).getByTestId("result");
    expect(result).toHaveTextContent("Current value: 1, 3, 5");

    const removeButton = within(canvasElement).getByRole("button", {
      name: "Remove ocean",
    });
    userEvent.click(removeButton);
    await waitFor(() =>
      expect(result).toHaveTextContent("Current value: 3, 5")
    );
  },
};

export const Create: StoryObj<typeof Select> = {
  ...Template,
  args: {},
  render: () => {
    const { formProp, formState } = useForm<{ value?: number }>();
    const [options, setOptions] = React.useState(flatOptions);

    const onOptionCreated = (newValue: string) => {
      const id = options.length + 1;
      const newOptions = [
        ...options,
        { id, content: newValue, wasCreated: true },
      ];
      setOptions(newOptions);
      return id;
    };

    return (
      <div style={{ height: "20rem" }}>
        <Select
          allowCreate={true}
          bind={formProp("value").bind()}
          options={options}
          onOptionCreated={onOptionCreated}
        />
        <div data-testid="result" style={{ marginTop: "10px" }}>
          Current value: {formState?.value}
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole<HTMLInputElement>("combobox");
    expect(input).toBeVisible();

    await userEvent.type(input, "New item");
    await userEvent.keyboard("{Enter}");

    const result = within(canvasElement).getByTestId("result");
    await waitFor(() =>
      expect(result).toHaveTextContent(
        `Current value: ${flatOptions.length + 1}`
      )
    );
  },
};

export const CreateMulti: StoryObj<typeof Select> = {
  ...Template,
  render: () => {
    const { formProp, formState } = useForm<{ value?: number[] }>();
    const [options, setOptions] = React.useState(flatOptions);

    const onOptionCreated = (newValue: string) => {
      const id = options.length + 1;
      const newOptions = [
        ...options,
        { id, content: newValue, wasCreated: true },
      ];
      setOptions(newOptions);
      return id;
    };

    return (
      <div style={{ height: "20rem" }}>
        <MultiSelect
          allowCreate={true}
          bind={formProp("value").bind()}
          options={options}
          onOptionCreated={onOptionCreated}
        />
        <div data-testid="result" style={{ marginTop: "10px" }}>
          Current value: {formState?.value?.join(", ")}
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole<HTMLInputElement>("combobox");
    expect(input).toBeVisible();

    const result = within(canvasElement).getByTestId("result");

    await userEvent.type(input, "New item 1");
    await userEvent.keyboard("{Enter}");

    const new1id = flatOptions.length + 1;

    await waitFor(() =>
      expect(result).toHaveTextContent(`Current value: ${new1id}`)
    );

    await userEvent.type(
      within(canvasElement).getByRole<HTMLInputElement>("combobox"),
      "New item 2"
    );
    await userEvent.keyboard("{Enter}");

    const new2id = new1id + 1;

    await waitFor(() =>
      expect(result).toHaveTextContent(`Current value: ${new1id}, ${new2id}`)
    );

    await userEvent.type(
      within(canvasElement).getByRole<HTMLInputElement>("combobox"),
      "New item 3"
    );
    await userEvent.keyboard("{Enter}");

    const new3id = new2id + 1;

    await waitFor(() =>
      expect(result).toHaveTextContent(
        `Current value: ${new1id}, ${new2id}, ${new3id}`
      )
    );
  },
};

export const Sizes: StoryObj<typeof Select> = {
  ...Template,
  render: (args) => {
    return (
      <div>
        <h2>Small</h2>
        <Select
          options={args.options}
          required
          label="Single select"
          displaySize="small"
          data-testid="wrapper"
        />
        <h2>Medium</h2>
        <Select
          options={args.options}
          required
          label="Single select"
          displaySize="medium"
          data-testid="wrapper"
        />
        <h2>Large</h2>
        <Select
          options={args.options}
          required
          label="Single select"
          displaySize="large"
          data-testid="wrapper"
        />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [small, medium, large] = canvas.getAllByTestId("wrapper");
    expect(small).toHaveAttribute("data-size", "small");
    expect(medium).toHaveAttribute("data-size", "medium");
    expect(large).toHaveAttribute("data-size", "large");
  },
};

export const ValidationError: StoryObj<typeof Select> = {
  ...Template,
  render: () => {
    return (
      <div>
        <div data-testid="both">
          <h2>Validation mode - both</h2>
          <Select
            validationMode="both"
            validationErrorMessages={["This field is required"]}
            options={groupedOptions}
            required
          />
        </div>
        <div data-testid="icon">
          <h2>Validation mode - icon only</h2>
          <Select
            validationMode="icon"
            validationErrorMessages={["This field is required"]}
            options={groupedOptions}
            required
          />
        </div>
        <div data-testid="message">
          <h2>Validation mode - message only</h2>
          <Select
            validationMode="message"
            validationErrorMessages={["This field is required"]}
            options={groupedOptions}
            required
          />
        </div>
        <div data-testid="left-icon">
          <h2>Icon on left</h2>
          <Select
            validationMode="icon"
            validationErrorMessages={["This field is required"]}
            options={groupedOptions}
            required
            statusPosition="left"
          />
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const both = canvas.getByTestId("both");
    expect(within(both).getByRole("status")).toBeVisible();
    expect(within(both).getByLabelText("Error messages")).toBeVisible();

    const icon = canvas.getByTestId("icon");
    expect(within(icon).getByRole("status")).toBeVisible();

    const message = canvas.getByTestId("message");
    expect(within(message).getByLabelText("Error messages")).toBeVisible();

    const iconLeft = canvas.getByTestId("left-icon");
    const status = within(iconLeft).getByRole("status");
    expect(status).toBeVisible();
    expect(status).toHaveAttribute("data-position", "left");
  },
};
