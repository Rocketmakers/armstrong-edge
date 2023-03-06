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
import { IconUtils } from "../icon";
import { IconButton } from "../iconButton";
import { ISelectOption, Select } from "../select";
import { TextInput } from "../textInput";

export type TCalendarInputProps = {
  /** not implemented for selectsRange=true */
  quickSelectionTags?: boolean;

  /** swipe02 is default */
  dateSelectionHeader?: "swipe01" | "swipe02" | "dropdown";

  locale?: TBaseDatePickerConfig["locale"];

  /** default to english */
  language?: {
    todayLabel: string;
    tomorrowLabel: string;
  };
} & TBaseCalendarInputProps;

const CustomInput = React.forwardRef<HTMLInputElement>((props, ref) => (
  <TextInput
    leftIcon={IconUtils.getIconDefinition("Icomoon", "calendar")}
    {...props}
    ref={ref}
  />
));

const CustomHeaderDropdown: React.FC<ReactDatePickerCustomHeaderProps> = (
  props
) => {
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

  const monthOptions = new Array(12).map<ISelectOption<number, any>>(
    (_, index) => ({ id: index, name: getLocaleMonth(index) })
  );

  const yearOptions = new Array(100).map<ISelectOption<number, any>>(
    (_, index) => {
      const year = today.getFullYear() - 50 + index;
      return { id: year, name: `${year}` };
    }
  );

  return (
    <div className="custom-header dropdown">
      <Select options={monthOptions} bind={formProp("month").bind()} />
      <Select options={yearOptions} bind={formProp("year").bind()} />
    </div>
  );
};

const CustomHeaderSwipe01: React.FC<ReactDatePickerCustomHeaderProps> = (
  props
) => {
  return (
    <div className="custom-header swipe01">
      <span>{format(props.monthDate, "MMMM yyyy")}</span>
      <div className="swipe01-date-navigation">
        <IconButton
          icon={IconUtils.getIconDefinition("Icomoon", "arrow-left")}
          onClick={props.decreaseMonth}
        />
        <IconButton
          icon={IconUtils.getIconDefinition("Icomoon", "arrow-right")}
          onClick={props.increaseMonth}
        />
      </div>
    </div>
  );
};

const CustomHeaderSwipe02: React.FC<ReactDatePickerCustomHeaderProps> = (
  props
) => {
  return (
    <div className="custom-header swipe02">
      <IconButton
        icon={IconUtils.getIconDefinition("Icomoon", "arrow-left")}
        onClick={props.decreaseYear}
      />
      <span>{format(props.monthDate, "MMMM yyyy")}</span>
      <IconButton
        icon={IconUtils.getIconDefinition("Icomoon", "arrow-right")}
        onClick={props.increaseMonth}
      />
    </div>
  );
};

/**
 * @decision option to use native input on mobile / tablet? - leave this issue entirely up to the consuming code
 * @decision JC says quick selection tags only make sense when not selecting a range
 * the following config is overridden: todayButton, customInput, renderCustomHeader, locale
 */
export const CalendarInput: React.FC<TCalendarInputProps> = ({
  quickSelectionTags,
  dateSelectionHeader,
  locale,
  language,
  ...props
}) => {
  const renderCustomHeader = React.useCallback(
    (customerHeaderProps: ReactDatePickerCustomHeaderProps) => {
      const today = new Date();
      const tomorrow = addDays(today, 1);
      return (
        <div className="customer-header-container">
          {!props.selectsRange && !!quickSelectionTags && (
            <div className="quick-selection-tags">
              <Button
                onClick={() =>
                  props.bind?.setValue(today) ?? props.onChange?.(today)
                }
              >
                {language?.todayLabel ?? "Today"}
              </Button>
              <Button
                onClick={() =>
                  props.bind?.setValue(tomorrow) ?? props.onChange?.(tomorrow)
                }
              >
                {language?.tomorrowLabel ?? "Tomorrow"}
              </Button>
            </div>
          )}
          {dateSelectionHeader === "dropdown" && (
            <CustomHeaderDropdown {...customerHeaderProps} />
          )}
          {dateSelectionHeader === "swipe01" && (
            <CustomHeaderSwipe01 {...customerHeaderProps} />
          )}
          {!dateSelectionHeader ||
            (dateSelectionHeader === "swipe02" && (
              <CustomHeaderSwipe02 {...customerHeaderProps} />
            ))}
        </div>
      );
    },
    [dateSelectionHeader, quickSelectionTags]
  );

  const config = React.useMemo<TBaseDatePickerConfig>(() => {
    return {
      monthsShown: props.selectsRange ? 2 : 1,

      ...props.config,

      // replaced by dateSelectionHeader
      todayButton: undefined,

      customInput: <CustomInput />,
      renderCustomHeader: props.selectsRange ? undefined : renderCustomHeader,
      locale,
    };
  }, [quickSelectionTags, renderCustomHeader, locale, props.config]);

  return <BaseCalendarInput {...props} config={config} />;
};
