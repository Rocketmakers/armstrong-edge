import * as React from "react";

import { Form } from "../..";
import { TimeInput } from "./timeInput.component";
import { Meta, StoryObj } from "@storybook/react";
import { enGB } from "date-fns/locale";

/** metadata */

export default {
  title: "Form/Time",
  component: TimeInput,
  args: {},
} as Meta<typeof TimeInput>;

/** component template */

const Template: StoryObj<typeof TimeInput> = {
  render: (args) => <TimeInput {...args} />,
};

/** stories */

export const Default: StoryObj<typeof TimeInput> = {
  render: () => {
    const { formProp } = Form.use<{ date?: Date }>({ date: undefined });
    return <TimeInput bind={formProp("date").bind()} locale={enGB} />;
  },
};
