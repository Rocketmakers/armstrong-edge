import { expect } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, waitFor } from "@storybook/test";
import * as React from "react";
import { ImTree } from "react-icons/im";

import { useForm } from "../../form";
import { Input } from "../input";
import { CharacterLimit } from "./characterLimit.component";

/** metadata */

export default {
  title: "Components/Character Limit",
  component: CharacterLimit,
  args: {
    limit: 10,
  },
} as Meta<typeof CharacterLimit>;

/** stories */

interface IFormData {
  thing: string | null;
}

export const Default: StoryObj<typeof CharacterLimit> = {
  render: (args) => {
    const { bind, ...props } = args;
    const formData: IFormData = { thing: "" };
    const { formProp } = useForm(formData);

    return (
      <>
        <Input bind={formProp("thing").bind()} />
        <CharacterLimit bind={formProp("thing").bind()} {...props} />
      </>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", { hidden: true });
    const limit = canvas.getByText(`0/${args.limit}`).parentElement;
    expect(limit);
    await userEvent.type(input, "a");
    await waitFor(() => expect(limit).toHaveTextContent(`1/${args.limit}`));
    await userEvent.type(input, "a".repeat(args.limit - 1));
    await waitFor(() =>
      expect(limit).toHaveTextContent(`${args.limit}/${args.limit}`)
    );
    await userEvent.type(input, "a");
    await waitFor(() =>
      expect(limit).toHaveTextContent(`${args.limit + 1}/${args.limit}`)
    );
    await waitFor(() => expect(limit).toHaveAttribute("data-exceeded", "true"));
  },
};

export const Enforce: StoryObj<typeof CharacterLimit> = {
  render: (args) => {
    const { bind, ...props } = args;
    const formData: IFormData = { thing: "" };
    const { formProp } = useForm(formData);

    return (
      <>
        <Input bind={formProp("thing").bind()} />
        <CharacterLimit bind={formProp("thing").bind()} {...props} />
      </>
    );
  },
  args: {
    shouldEnforce: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", { hidden: true });
    const limit = canvas.getByText(`0/${args.limit}`).parentElement;
    expect(limit);
    await userEvent.type(input, "a");
    expect(limit).toHaveTextContent(`1/${args.limit}`);
    await userEvent.type(input, "a".repeat(args.limit - 1));
    expect(limit).toHaveTextContent(`${args.limit}/${args.limit}`);
    await userEvent.type(input, "a");
    expect(input).toHaveValue("a".repeat(args.limit));
    expect(limit).toHaveTextContent(`${args.limit}/${args.limit}`);
    expect(limit).toHaveAttribute("data-exceeded", "false");
  },
};

export const InsideInput: StoryObj<typeof CharacterLimit> = {
  render: (args) => {
    const { bind, ...props } = args;
    const formData: IFormData = { thing: "" };
    const { formProp } = useForm(formData);

    return (
      <>
        <Input
          bind={formProp("thing").bind()}
          rightOverlay={
            <CharacterLimit bind={formProp("thing").bind()} {...props} />
          }
        />
      </>
    );
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", { hidden: true });
    const limit = canvas.getByText(`0/${args.limit}`).parentElement;
    expect(limit);
    expect(input.parentElement).toContainElement(limit);
  },
};

export const CustomIcon: StoryObj<typeof CharacterLimit> = {
  render: (args) => {
    const { bind, ...props } = args;
    const formData: IFormData = { thing: "" };
    const { formProp } = useForm(formData);

    return (
      <>
        <Input bind={formProp("thing").bind()} />
        <CharacterLimit bind={formProp("thing").bind()} {...props} />
      </>
    );
  },
  args: {
    validationErrorIcon: <ImTree />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", { hidden: true });
    const limit = canvas.getByText(`0/${args.limit}`)
      .parentElement as HTMLParagraphElement;
    expect(limit);
    await userEvent.type(input, "a".repeat(args.limit + 1));
    const icon = within(limit).getByTitle("Character limit exceeded");
    expect(icon).toBeVisible();
  },
};
