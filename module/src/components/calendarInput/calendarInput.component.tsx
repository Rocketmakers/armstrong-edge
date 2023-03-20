import * as React from "react";
import { addDays, format } from "date-fns";
import { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import { Form } from "../../hooks";

import {
  BaseCalendarInput,
  TBaseCalendarInputProps,
  TBaseDatePickerConfig,
} from "../baseCalendarInput";

import { Button } from "../button";
import { IconUtils, Icon } from "../icon";
import { ISelectOption, Select } from "../select";
import { TextInput } from "../textInput";
import { concat } from "../../utils";

export type TCalendarInputProps = {
  /** swipe02 is default */
  dateSelectionHeader?: "swipe01" | "swipe02" | "dropdown";

  locale?: TBaseDatePickerConfig["locale"];

  /** default to english */
  language?: {
    todayLabel: string;
    tomorrowLabel: string;
  };
} & TBaseCalendarInputProps;

const Input = React.forwardRef<HTMLInputElement>((props, ref) => (
  <TextInput
    leftIcon={IconUtils.getIconDefinition("Icomoon", "calendar")}
    {...props}
    ref={ref}
  />
));

const DropdownHeader: React.FC<ReactDatePickerCustomHeaderProps> = (props) => {
  const today = new Date();

  const { formState, formProp } = Form.use<{ month: number; year: number }>({
    month: today.getMonth(),
    year: today.getFullYear(),
  });

  React.useEffect(() => {
    if (formState?.month) {
      props.changeMonth(formState.month);
    }
    if (formState?.year) {
      props.changeYear(formState.year);
    }
  }, [formState?.month, formState?.year]);

  /** @todo - how to set locale? */
  const getLocaleMonth = (month: number) => {
    const date = new Date();

    date.setMonth(month);
    return format(date, "MMMM");
  };

  const monthOptions = new Array(12)
    .fill(null)
    .map<ISelectOption<number, any>>((_, index) => ({
      id: index,
      name: getLocaleMonth(index),
    }));

  const yearOptions = new Array(100)
    .fill(null)
    .map<ISelectOption<number, any>>((_, index) => {
      const year = today.getFullYear() - 50 + index;
      return { id: year, name: `${year}` };
    });

  return (
    <div className="arm-calendar-input-header dropdown">
      <Select options={monthOptions} bind={formProp("month").bind()} />
      <Select options={yearOptions} bind={formProp("year").bind()} />
    </div>
  );
};

const Swipe01Header: React.FC<ReactDatePickerCustomHeaderProps> = (props) => {
  return (
    <div className="arm-calendar-input-header swipe01">
      <span>{format(props.monthDate, "MMMM yyyy")}</span>
      <div className="swipe01-date-navigation">
        <Button displayStyle="blank" onClick={props.decreaseMonth}>
          <Icon {...IconUtils.getIconDefinition("Icomoon", "arrow-left2")} />
        </Button>
        <Button displayStyle="blank" onClick={props.increaseMonth}>
          <Icon {...IconUtils.getIconDefinition("Icomoon", "arrow-right2")} />
        </Button>
      </div>
    </div>
  );
};

const Swipe02Header: React.FC<ReactDatePickerCustomHeaderProps> = (props) => {
  return (
    <div className="arm-calendar-input-header swipe02">
      <Button displayStyle="blank" onClick={props.decreaseMonth}>
        <Icon {...IconUtils.getIconDefinition("Icomoon", "arrow-left2")} />
      </Button>
      <span>{format(props.monthDate, "MMMM yyyy")}</span>

      <Button displayStyle="blank" onClick={props.increaseMonth}>
        <Icon {...IconUtils.getIconDefinition("Icomoon", "arrow-right2")} />
      </Button>
    </div>
  );
};

const renderDayContents = (day) => {
  return <div className="arm-calendar-input-day-contents">{day}</div>;
};

/**
 * @decision option to use native input on mobile / tablet? - leave this issue entirely up to the consuming code
 * the following config is overridden: customInput, renderCustomHeader, locale
 */
export const CalendarInput: React.FC<TCalendarInputProps> = ({
  dateSelectionHeader,
  locale,
  language,
  ...props
}) => {
  const renderCustomHeader = React.useCallback(
    (customerHeaderProps: ReactDatePickerCustomHeaderProps) => {
      return (
        <div className="customer-header-container">
          {dateSelectionHeader === "dropdown" && (
            <DropdownHeader {...customerHeaderProps} />
          )}
          {dateSelectionHeader === "swipe01" && (
            <Swipe01Header {...customerHeaderProps} />
          )}
          {(!dateSelectionHeader || dateSelectionHeader === "swipe02") && (
            <Swipe02Header {...customerHeaderProps} />
          )}
        </div>
      );
    },
    [dateSelectionHeader]
  );

  const config = React.useMemo<TBaseDatePickerConfig>(() => {
    return {
      monthsShown: props.selectsRange ? 2 : 1,

      ...props.config,

      customInput: <Input />,
      renderCustomHeader: props.selectsRange ? undefined : renderCustomHeader,
      renderDayContents,
      locale,
    };
  }, [renderCustomHeader, locale, props.config]);

  return (
    <BaseCalendarInput
      {...props}
      className={concat("arm-calendar-input", props.className)}
      config={config}
    />
  );
};
