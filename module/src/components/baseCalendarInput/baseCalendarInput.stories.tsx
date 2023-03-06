import * as React from "react";

import { Form } from "../..";
import { Button } from "../button";
import { BaseCalendarInput } from "./baseCalendarInput.component";
import { Meta, StoryObj } from "@storybook/react";
import { getMonth, getYear } from "date-fns";
import { enGB, enUS } from "date-fns/locale";

/** metadata */

export default {
  title: "Form/Base Calendar",
  component: BaseCalendarInput,
  args: {},
} as Meta<typeof BaseCalendarInput>;

/** component template */

const Template: StoryObj<typeof BaseCalendarInput> = {
  render: (args) => <BaseCalendarInput {...args} />,
};

/** stories */

export const Default: StoryObj<typeof BaseCalendarInput> = {
  render: () => {
    const { formProp } = Form.use<{ date?: Date }>({ date: undefined });
    return (
      <BaseCalendarInput
        selectsRange={false}
        bind={formProp("date").bind()}
        config={{ locale: enGB }}
      />
    );
  },
};

export const TimeSelect: StoryObj<typeof BaseCalendarInput> = {
  render: () => {
    const { formProp } = Form.use<{ date?: Date }>({ date: undefined });
    return (
      <BaseCalendarInput
        selectsRange={false}
        bind={formProp("date").bind()}
        config={{
          showTimeSelect: true,
          dateFormat: "MMMM d, yyyy h:mm aa",
        }}
      />
    );
  },
};

export const OnlyTime: StoryObj<typeof BaseCalendarInput> = {
  render: () => {
    const { formProp } = Form.use<{ date?: Date }>({ date: undefined });
    return (
      <BaseCalendarInput
        selectsRange={false}
        bind={formProp("date").bind()}
        config={{
          showTimeSelect: true,
          showTimeSelectOnly: true,
          timeIntervals: 15,
          timeCaption: "Time",
          dateFormat: "h:mm aa",
        }}
      />
    );
  },
};

export const Clearable: StoryObj<typeof BaseCalendarInput> = {
  render: () => {
    const { formProp } = Form.use<{ date?: Date }>({ date: undefined });
    return (
      <BaseCalendarInput
        selectsRange={false}
        bind={formProp("date").bind()}
        config={{
          isClearable: true,
        }}
      />
    );
  },
};

export const CalendarOnly: StoryObj<typeof BaseCalendarInput> = {
  render: () => {
    const init = React.useMemo(() => ({ date: new Date() }), []);

    const { formProp } = Form.use<{ date?: Date }>(init);

    return (
      <BaseCalendarInput
        selectsRange={false}
        bind={formProp("date").bind()}
        config={{ inline: true }}
        key="calendar-only"
      />
    );
  },
};

export const CustomWeekStart = () => {
  const { formProp } = Form.use<{ date?: Date }>({ date: undefined });

  return (
    <BaseCalendarInput
      selectsRange={false}
      bind={formProp("date").bind()}
      config={{ locale: enUS }}
    />
  );
};

export const DontCloseOnSelect = () => {
  const { formProp } = Form.use<{ date?: Date }>({ date: undefined });

  return (
    <BaseCalendarInput
      selectsRange={false}
      bind={formProp("date").bind()}
      config={{ shouldCloseOnSelect: false }}
    />
  );
};

export const Below = () => {
  const { formProp } = Form.use<{ date?: Date }>({ date: undefined });

  return (
    <BaseCalendarInput
      selectsRange={false}
      bind={formProp("date").bind()}
      config={{ popperPlacement: "bottom-end" }}
    />
  );
};

export const Above = () => {
  const { formProp } = Form.use<{ date?: Date }>({ date: undefined });

  return (
    <BaseCalendarInput
      selectsRange={false}
      bind={formProp("date").bind()}
      config={{ popperPlacement: "top-end" }}
    />
  );
};

export const Modal = () => {
  const { formProp } = Form.use<{ date?: Date }>({ date: undefined });

  return (
    <BaseCalendarInput
      selectsRange={false}
      bind={formProp("date").bind()}
      config={{ withPortal: true }}
    />
  );
};

export const CustomOpenButton = () => {
  const { formProp } = Form.use<{ date?: Date }>({ date: undefined });

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? "Close" : "Open"}
      </Button>
      <BaseCalendarInput
        selectsRange={false}
        bind={formProp("date").bind()}
        config={{
          open: isOpen,
          onCalendarClose: () => {
            setIsOpen(false);
          },
          onCalendarOpen: () => {
            setIsOpen(true);
          },
        }}
      />
    </>
  );
};

export const RangeExample = () => {
  const { formProp } = Form.use<{ startDate?: Date; endDate?: Date }>({
    startDate: undefined,
    endDate: undefined,
  });

  return (
    <div className="story-cols">
      <label>
        <BaseCalendarInput
          selectsRange={true}
          startBind={formProp("startDate").bind()}
          endBind={formProp("endDate").bind()}
        />
      </label>
    </div>
  );
};

export const MultiMonthRangeExample = () => {
  const { formProp } = Form.use<{ startDate?: Date; endDate?: Date }>({
    startDate: undefined,
    endDate: undefined,
  });

  return (
    <div className="story-cols">
      <label>
        <BaseCalendarInput
          selectsRange={true}
          startBind={formProp("startDate").bind()}
          endBind={formProp("endDate").bind()}
          config={{ monthsShown: 2 }}
        />
      </label>
    </div>
  );
};

export const CustomMonthNav = () => {
  const { formProp } = Form.use<{ startDate?: Date }>({
    startDate: undefined,
  });

  const range = (start: number, end: number) => {
    return Array.from(Array(end - start).keys()).map((x) => start + x);
  };

  const years = range(1990, getYear(new Date()) + 1);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <BaseCalendarInput
      selectsRange={false}
      bind={formProp("startDate").bind()}
      config={{
        renderCustomHeader: ({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {"<"}
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(parseInt(value))}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {">"}
            </button>
          </div>
        ),
      }}
    />
  );
};
