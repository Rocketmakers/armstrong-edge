import "react-datepicker/dist/react-datepicker.css";

import * as React from "react";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";

import { enGB } from "date-fns/locale";

import { Form, useOverridableState } from "../../hooks";
import { IBindingProps } from "../../hooks/form";
import { concat } from "../../utils/classNames";
import { IInputWrapperProps } from "../inputWrapper";
import { Status } from "../status";
import { ValidationErrors } from "../validationErrors";

type TDate = Date;
type TDateRange = [Date | null, Date | null];

export type TCalendarInputProps = Pick<
  IInputWrapperProps,
  | "scrollValidationErrorsIntoView"
  | "validationMode"
  | "errorIcon"
  | "disabled"
  | "pending"
  | "error"
  | "validationErrorMessages"
  | "className"
> & {
  /** props to spread onto the calendar component */
  config?: Omit<
    ReactDatePickerProps,
    "onChange" | "value" | "selectsRange" | "selected" | "startDate" | "endDate"
  >;

  /** JSX to render as the label - replaces name, can take a function which receives the active state of the option and returns the JSX to render */
  content?: React.ReactElement;
} & (
    | {
        selectsRange: true;

        /**  prop for binding start date (range) to an Armstrong form binder (see forms documentation) */
        startBind?: IBindingProps<TDate>;
        /** current start date of input */
        startValue?: TDate;

        /**  prop for binding end date (range) to an Armstrong form binder (see forms documentation) */
        endBind?: IBindingProps<TDate>;
        /** current end date of input */
        endValue?: TDate;

        /** fired when the value changes */
        onChange?: (value: TDateRange) => void;
      }
    | {
        selectsRange: false;
        bind?: IBindingProps<TDate>;
        value?: TDate;

        /** fired when the value changes */
        onChange?: (value: TDate) => void;
      }
  );

/**
 * third-party docs: https://reactdatepicker.com
 * decided to use single component to keep as close to third party as possible */
export const CalendarInput: React.FunctionComponent<TCalendarInputProps> = (
  props
) => {
  const singleValue = !props.selectsRange ? props.value : undefined;
  const startValue = props.selectsRange ? props.startValue : undefined;
  const endValue = props.selectsRange ? props.endValue : undefined;

  const commonBindingState = {
    validationErrorIcon: props.errorIcon,
    validationMode: props.validationMode,
  };

  // SINGLE DATE...

  const [boundDateValue, setBoundDateValue, bindDateConfig] =
    Form.useBindingState(!props.selectsRange ? props.bind : undefined, {
      ...commonBindingState,
      validationErrorMessages: props.validationErrorMessages,
      value: singleValue,
      onChange: !props.selectsRange ? props.onChange : undefined,
    });
  // use an overridable internal state so it can be used without a binding
  const [date, setDate] = useOverridableState(
    (singleValue ?? undefined) as TDate,
    boundDateValue,
    setBoundDateValue
  );

  // DATE RANGE...

  const [boundStartDateValue, setBoundStartDateValue, bindStartDateConfig] =
    Form.useBindingState(props.selectsRange ? props.startBind : undefined, {
      ...commonBindingState,
      validationErrorMessages: props.validationErrorMessages,
      value: startValue,
      onChange: !props.selectsRange ? props.onChange : undefined,
    });
  // use an overridable internal state so it can be used without a binding
  const [startDate, setStartDate] = useOverridableState(
    (startValue ?? undefined) as TDate,
    boundStartDateValue,
    setBoundStartDateValue
  );

  const [boundEndDateValue, setBoundEndDateValue, bindEndDateConfig] =
    Form.useBindingState(props.selectsRange ? props.endBind : undefined, {
      ...commonBindingState,
      // only pass in validationErrorMessages once for date range as errors will be combined!
      validationErrorMessages: [],
      value: endValue,
      onChange: !props.selectsRange ? props.onChange : undefined,
    });
  // use an overridable internal state so it can be used without a binding
  const [endDate, setEndDate] = useOverridableState(
    (endValue ?? undefined) as TDate,
    boundEndDateValue,
    setBoundEndDateValue
  );

  const validationErrorMessages = props.selectsRange
    ? [
        ...bindStartDateConfig.validationErrorMessages,
        ...bindEndDateConfig.validationErrorMessages,
      ]
    : bindDateConfig.validationErrorMessages;

  return (
    <>
      <div
        className={concat("arm-input", "arm-calendar-input", props.className)}
        data-disabled={props.disabled || props.pending}
        data-error={props.error || !!validationErrorMessages?.length}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <label>
          {props.content}

          <ReactDatePicker
            {...CalendarInput.defaultProps?.config}
            {...props.config}
            selectsRange={props.selectsRange}
            onChange={(newValue) => {
              if (!props.selectsRange) {
                setDate?.(newValue as TDate);
              } else {
                setStartDate?.(newValue?.[0]);
                setEndDate?.(newValue?.[1]);
              }
            }}
            selected={date}
            startDate={startDate}
            endDate={endDate}
          />

          <Status
            error={
              bindDateConfig.shouldShowValidationErrorIcon &&
              (!!validationErrorMessages?.length || props.error)
            }
            pending={props.pending}
            errorIcon={bindDateConfig.validationErrorIcon}
          />
        </label>
      </div>

      {!!validationErrorMessages?.length &&
        bindDateConfig.shouldShowValidationErrorMessage && (
          <ValidationErrors
            validationErrors={validationErrorMessages}
            icon={bindDateConfig.validationErrorIcon}
            scrollIntoView={props.scrollValidationErrorsIntoView}
          />
        )}
    </>
  );
};

CalendarInput.defaultProps = {
  validationMode: "both",
  selectsRange: false,
  config: { locale: enGB },
};
