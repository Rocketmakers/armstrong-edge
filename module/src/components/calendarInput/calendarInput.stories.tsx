import * as React from "react";

import { Form } from "../..";
import { Button } from "../button";
import { CalendarInput } from "./calendarInput.component";
import { Meta, StoryObj } from "@storybook/react";

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

export const Default: StoryObj<typeof CalendarInput> = {
  render: () => {
    const { formProp } = Form.use<{ date?: Date }>({ date: undefined });
    return (
      <CalendarInput selectsRange={false} bind={formProp("date").bind()} />
    );
  },
};

// export const InputsOnly = () => {
//   const { formProp } = Form.use({ date: undefined });

//   return <NewCalendarInput bind={formProp('date').bind()} config={{inp}} />;
// };

// export const CustomInputFormats = () => {
//   const { formProp } = Form.use({ date: undefined });

//   return <NewCalendarInput dayInputDisplayFormat="EEEE d" monthInputDisplayFormat="LLLL" bind={formProp('date').bind()} displayMode="inputs" />;
// };

// export const CustomInputOrder = () => {
//   const { formProp, formState } = Form.use({
//     date: undefined,
//     date2: undefined,
//     monthDate: undefined,
//     month: undefined,
//     yearDate: undefined,
//     backwards: undefined,
//   });

//   return (
//     <>
//       <NewCalendarInput bind={formProp('date').bind()} inputOrder={['year', 'month', 'day']} formatString="dd-MM-yyyy" />
//       <br />
//       <NewCalendarInput bind={formProp('date2').bind()} inputOrder={['month', 'day', 'year']} formatString="dd-MM-yyyy" />
//       <br />
//       <NewCalendarInput
//         bind={formProp('monthDate').bind()}
//         inputOrder={['month', 'year']}
//         displayMode="inputs"
//         formatString="MM-yyyy"
//         monthInputDisplayFormat="LLLL"
//       />
//       <br />
//       <NewCalendarInput
//         bind={formProp('month').bind()}
//         inputOrder={['month']}
//         displayMode="inputs"
//         formatString="MM"
//         monthInputDisplayFormat="LLLL"
//       />
//       <br />
//       <NewCalendarInput bind={formProp('yearDate').bind()} inputOrder={['year']} displayMode="inputs" formatString="yyyy" />
//       <br />
//       <NewCalendarInput bind={formProp('backwards').bind()} inputOrder={['year', 'month', 'day']} formatString="dd-MM-yyyy" />
//       <div className="bound-value">
//         <p>1 (UK) - {formState.date}</p>
//         <p>2 (US) - {formState.date2}</p>
//         <p>3 (month) - {formState.monthDate}</p>
//         <p>4 (just month) - {formState.month}</p>
//         <p>5 (year) - {formState.yearDate}</p>
//         <p>6 (backwards) - {formState.backwards}</p>
//       </div>
//     </>
//   );
// };

export const CalendarOnly: StoryObj<typeof CalendarInput> = {
  render: () => {
    const init = React.useMemo(() => ({ date: new Date() }), []);

    const { formProp } = Form.use<{ date?: Date }>(init);

    return (
      <CalendarInput
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
    <CalendarInput
      selectsRange={false}
      bind={formProp("date").bind()}
      config={{ locale: "en-US" }}
    />
  );
};

export const DontCloseOnSelect = () => {
  const { formProp } = Form.use<{ date?: Date }>({ date: undefined });

  return (
    <CalendarInput
      selectsRange={false}
      bind={formProp("date").bind()}
      config={{ shouldCloseOnSelect: false }}
    />
  );
};

export const Below = () => {
  const { formProp } = Form.use<{ date?: Date }>({ date: undefined });

  return (
    <CalendarInput
      selectsRange={false}
      bind={formProp("date").bind()}
      config={{ popperPlacement: "bottom-end" }}
    />
  );
};

export const Above = () => {
  const { formProp } = Form.use<{ date?: Date }>({ date: undefined });

  return (
    <CalendarInput
      selectsRange={false}
      bind={formProp("date").bind()}
      config={{ popperPlacement: "top-end" }}
    />
  );
};

export const Modal = () => {
  const { formProp } = Form.use<{ date?: Date }>({ date: undefined });

  return (
    <CalendarInput
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
      <CalendarInput
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

// export const CustomPaginationButtons = () => {
//   const { formProp } = Form.use({ date: undefined });

//   return (
//     <NewCalendarInput
//       bind={formProp('date').bind()}
//       backButton={(onClick) => (
//         <Button leftIcon={IconUtils.getIconDefinition('LinearIcons', 'arrow-left')} minimalStyle onClick={onClick}>
//           back
//         </Button>
//       )}
//       forwardsButton={(onClick) => (
//         <Button rightIcon={IconUtils.getIconDefinition('LinearIcons', 'arrow-right')} minimalStyle onClick={onClick}>
//           next
//         </Button>
//       )}
//     />
//   );
// };

export const RangeExample = () => {
  const { formProp } = Form.use<{ startDate?: Date; endDate?: Date }>({
    startDate: undefined,
    endDate: undefined,
  });

  return (
    <div className="story-cols">
      <label>
        <CalendarInput
          selectsRange={true}
          startBind={formProp("startDate").bind()}
          endBind={formProp("endDate").bind()}
        />
      </label>
    </div>
  );
};

// export const NoControls = () => {
//   const { formProp } = Form.use({ date: undefined });
//   return <NewCalendarInput bind={formProp('date').bind()} controls={false} />;
// };

// export const NoJumplist = () => {
//   const { formProp } = Form.use({ date: undefined });
//   return <NewCalendarInput bind={formProp('date').bind()} jumpList={[]} />;
// };

// export const CustomJumplist = () => {
//   const { formProp } = Form.use({ date: undefined });

//   const jumpList = React.useMemo<ICalendarDisplayProps['jumpList']>(() => {
//     const date = new Date();

//     const threeMonthsAgo = new Date(date);
//     threeMonthsAgo.setMonth(date.getMonth() - 3);

//     return [
//       { date: threeMonthsAgo, name: '3 Months Ago', buttonProps: { leftIcon: IconUtils.getIconDefinition('Icomoon', 'tree') } },
//       { date, name: 'Today' },
//     ];
//   }, []);

//   return <NewCalendarInput bind={formProp('date').bind()} jumpList={jumpList} />;
// };
