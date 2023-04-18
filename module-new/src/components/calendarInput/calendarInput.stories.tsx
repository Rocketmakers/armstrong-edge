import * as React from "react";

import { Form } from "../..";
import { CalendarInput } from "./calendarInput.component";
import { Meta, StoryObj } from "@storybook/react";
import { enGB } from "date-fns/locale";

/** metadata */

export default {
  title: "Form/Calendar",
  component: CalendarInput,
  args: {},
} as Meta<typeof CalendarInput>;

/** component template */

const Template: StoryObj<typeof CalendarInput> = {
  render: (args) => <CalendarInput {...args} />,
};

/** stories */

export const DefaultSwipe02: StoryObj<typeof CalendarInput> = {
  render: () => {
    const { formProp } = Form.use<{ date?: Date }>({ date: undefined });
    return (
      <CalendarInput bind={formProp("date").bind()} config={{ locale: enGB }} />
    );
  },
};

export const CalendarOnly: StoryObj<typeof CalendarInput> = {
  render: () => {
    const { formProp } = Form.use<{ date?: Date }>({ date: undefined });
    return (
      <CalendarInput
        bind={formProp("date").bind()}
        config={{ locale: enGB, inline: true }}
      />
    );
  },
};

export const Swipe01: StoryObj<typeof CalendarInput> = {
  render: () => {
    const { formProp } = Form.use<{ date?: Date }>({ date: undefined });
    return (
      <CalendarInput
        bind={formProp("date").bind()}
        config={{ locale: enGB }}
        dateSelectionHeader="swipe01"
      />
    );
  },
};

export const Dropdown: StoryObj<typeof CalendarInput> = {
  render: () => {
    const { formProp } = Form.use<{ date?: Date }>({ date: undefined });
    return (
      <CalendarInput
        bind={formProp("date").bind()}
        config={{ locale: enGB }}
        dateSelectionHeader="dropdown"
      />
    );
  },
};

export const Range: StoryObj<typeof CalendarInput> = {
  render: () => {
    const { formProp } = Form.use<{ startDate?: Date; endDate?: Date }>({
      startDate: undefined,
      endDate: undefined,
    });
    return (
      <CalendarInput
        selectsRange
        startBind={formProp("startDate").bind()}
        endBind={formProp("endDate").bind()}
        config={{ locale: enGB }}
        dateSelectionHeader="swipe01"
      />
    );
  },
};
