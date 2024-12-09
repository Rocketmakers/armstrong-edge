import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within, expect, fn } from "@storybook/test";
import React from "react";
import { IoIosHelpCircle } from "react-icons/io";

import { Button } from "../button";
import { Tooltip } from "./tooltip.component";

/** metadata */

export default {
  title: "Modals/Tooltip",
  component: Tooltip,
} as Meta<typeof Tooltip>;

/** component template */
const Template: StoryObj<typeof Tooltip> = {
  args: {
    content: "Here is some tooltip text, it has a delay of 700ms",
    onOpenChange: fn(),
  },
  render: (args) => {
    return (
      <Tooltip {...args}>
        <Button
          displaySize="small"
          style={{ backgroundColor: "transparent", padding: 0 }}
          data-testid="trigger"
        >
          <IoIosHelpCircle size={36} style={{ fill: "black" }} />
        </Button>
      </Tooltip>
    );
  },
};

/** stories */

export const Default: StoryObj<typeof Tooltip> = {
  ...Template,
  play: async ({ canvasElement }) => {
    const trigger = within(canvasElement).getByTestId("trigger");
    userEvent.hover(trigger);
    const tooltip = await within(document.body).findByRole("tooltip");
    await waitFor(() => expect(tooltip).toBeVisible());
    await waitFor(() =>
      expect(tooltip).toHaveTextContent(
        "Here is some tooltip text, it has a delay of 700ms"
      )
    );
    userEvent.unhover(trigger);
    await waitFor(() => expect(tooltip).not.toBeVisible());
  },
};

export const Instant: StoryObj<typeof Tooltip> = {
  ...Template,
  args: {
    ...Template.args,
    content: "This tooltip displays instantly",
    delay: 0,
  },
  play: async ({ canvasElement }) => {
    const trigger = within(canvasElement).getByTestId("trigger");
    userEvent.hover(trigger);
    const tooltip = await within(document.body).findByRole("tooltip");
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent("This tooltip displays instantly");
    userEvent.unhover(trigger);
    await waitFor(() => expect(tooltip).not.toBeVisible());
  },
};

export const Long: StoryObj<typeof Tooltip> = {
  ...Template,
  args: {
    ...Template.args,
    content: (
      <>
        <p style={{ marginTop: "0" }}>
          Here is some long content that will wrap onto multiple lines. Look at
          it wrapping there onto multiple lines
        </p>
        <p style={{ marginBottom: "0" }}>
          It has more than one paragraph too. This is probably too much content
          or a tooltip but at least it&apos;s being displayed sensibly
        </p>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const trigger = within(canvasElement).getByTestId("trigger");
    userEvent.hover(trigger);
    const tooltip = await within(document.body).findByRole("tooltip");
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent(
      "Here is some long content that will wrap onto multiple lines. Look at it wrapping there onto multiple linesIt has more than one paragraph too. This is probably too much content or a tooltip but at least it's being displayed sensibly"
    );
    userEvent.unhover(trigger);
    await waitFor(() => expect(tooltip).not.toBeVisible());
  },
};

export const Bottom: StoryObj<typeof Tooltip> = {
  ...Template,
  args: {
    ...Template.args,
    side: "bottom",
    content: "This tooltip renders underneath the element",
  },
  play: async ({ canvasElement }) => {
    const trigger = within(canvasElement).getByTestId("trigger");
    userEvent.hover(trigger);
    const tooltip = await within(document.body).findByRole("tooltip");
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent(
      "This tooltip renders underneath the element"
    );
    userEvent.unhover(trigger);
    await waitFor(() => expect(tooltip).not.toBeVisible());
  },
};

export const WithArrow: StoryObj<typeof Tooltip> = {
  ...Template,
  args: {
    ...Template.args,
    showArrow: true,
    content: "This tooltip shows an arrow pointing to the element",
  },
  play: async ({ canvasElement }) => {
    const trigger = within(canvasElement).getByTestId("trigger");
    userEvent.hover(trigger);
    const tooltip = await within(document.body).findByRole("tooltip");
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent(
      "This tooltip shows an arrow pointing to the element"
    );
    userEvent.unhover(trigger);
    await waitFor(() => expect(tooltip).not.toBeVisible());
  },
};

export const Controlled: StoryObj<typeof Tooltip> = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <Tooltip
        open={isOpen}
        onOpenChange={setIsOpen}
        content="This controlled tooltip will show when the button is clicked, useful for dedicated help buttons"
      >
        <Button
          displaySize="small"
          style={{ backgroundColor: "transparent", padding: 0 }}
          data-testid="trigger"
          onClick={() => setIsOpen(true)}
        >
          <IoIosHelpCircle size={36} style={{ fill: "black" }} />
        </Button>
      </Tooltip>
    );
  },
  play: async ({ canvasElement }) => {
    const trigger = within(canvasElement).getByTestId("trigger");
    userEvent.click(trigger);
    const tooltip = await within(document.body).findByRole("tooltip");
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent(
      "This controlled tooltip will show when the button is clicked, useful for dedicated help buttons"
    );
    await userEvent.click(document.body);
    await waitFor(() => expect(tooltip).not.toBeVisible());
  },
};
