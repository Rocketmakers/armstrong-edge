import { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { within } from "@storybook/testing-library";

import { IcomoonIcon, Icon, LinearIcon } from "./icon.component";
import { expect } from "@storybook/jest";

/** metadata */

export default {
  title: "Display/Icon",
} as Meta;

/** stories */

export const Default: StoryObj<typeof Icon> = {
  render: (args) => {
    return <Icon {...args} title="Icon" />;
  },
  args: {
    iconSet: "Icomoon",
    icon: "heart",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTitle("Icon")).toHaveAttribute(
      "data-icon-set",
      args.iconSet
    );
    expect(canvas.getByTitle("Icon")).toHaveAttribute("data-i", args.icon);
  },
};

export const IcomoonOnly: StoryObj<typeof IcomoonIcon> = {
  render: (args) => {
    return <IcomoonIcon {...args} title="Icon" />;
  },
  args: {
    icon: "heart",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTitle("Icon")).toHaveAttribute(
      "data-icon-set",
      "Icomoon"
    );
    expect(canvas.getByTitle("Icon")).toHaveAttribute("data-i", args.icon);
  },
};

export const LinearIconOnly: StoryObj<typeof LinearIcon> = {
  render: (args) => {
    return <LinearIcon {...args} title="Icon" />;
  },
  args: {
    icon: "heart",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTitle("Icon")).toHaveAttribute(
      "data-icon-set",
      "LinearIcons"
    );
    expect(canvas.getByTitle("Icon")).toHaveAttribute("data-i", args.icon);
  },
};
