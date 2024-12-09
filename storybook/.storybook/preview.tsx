import type { Preview } from "@storybook/react";

import "../../module/src/theme/variables.css";
import "../../module/src/theme/animations.css";
import "../../module/src/theme/theme.css";

import "./storybook-theme.css";

const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Introduction",
        "Config",
        "Form",
        "Components",
        "Hooks",
        "Modals",
        "Utilities",
      ],
    },
  },
  backgrounds: {
    default: "light",
  },
};

const preview: Preview = {
  parameters,
};

export default preview;
