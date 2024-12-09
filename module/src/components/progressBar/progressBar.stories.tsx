import { expect } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/test";
import React from "react";

import { ProgressBar } from "./progressBar.component";

/** metadata */

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
} as Meta<typeof ProgressBar>;

/** component template */
const Template: StoryObj<typeof ProgressBar> = {
  render: (args) => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((s) => {
          if (s >= 100) {
            clearInterval(timer);
            return 100;
          }
          return s + 1;
        });
      }, 50);
      return () => clearInterval(timer);
    }, []);
    return <ProgressBar progress={progress} {...args} />;
  },
};

/** stories */

export const Default: StoryObj<typeof ProgressBar> = {
  ...Template,
  play: async ({ canvasElement }) => {
    const progress = within(canvasElement).getByRole("progressbar");
    expect(progress).toBeVisible();
  },
};
