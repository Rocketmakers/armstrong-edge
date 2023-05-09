import { enGB } from 'date-fns/locale';
import * as React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { ImCalendar } from 'react-icons/im';

import { IBindingProps, useBindingState } from '../../hooks/form';
import { concat } from '../../utils/classNames';
import { useArmstrongConfig } from '../config';
import { IInputWrapperProps } from '../inputWrapper';
import { Label } from '../label';
import { Status } from '../status';
import { ValidationErrors } from '../validationErrors';

import 'react-datepicker/dist/react-datepicker.css';
import './baseCalendarInput.theme.css';

type DisplaySize = 'small' | 'medium' | 'large';

type TDate = Date;
type TDateRange = [Date | null, Date | null];

export type TBaseDatePickerConfig = Omit<
  ReactDatePickerProps,
  'onChange' | 'value' | 'selectsRange' | 'selected' | 'startDate' | 'endDate' | 'disabled'
>;

export type TBaseCalendarInputCommonProps = Pick<
  IInputWrapperProps,
  | 'scrollValidationErrorsIntoView'
  | 'validationMode'
  | 'errorIcon'
  | 'disabled'
  | 'pending'
  | 'error'
  | 'validationErrorMessages'
  | 'className'
> & {
  /** props to spread onto the calendar component */
  config?: TBaseDatePickerConfig;

  /** JSX to render as the label - replaces name, can take a function which receives the active state of the option and returns the JSX to render */
  content?: React.ReactElement;

  /** display size of input */
  displaySize?: DisplaySize;

  id?: string;

  required?: boolean;

  /** will scroll the validation errors into view when the length of validationErrors changes */
  scrollValidationErrorsIntoView?: boolean;

  /** Symbol to use as the required indicator on the label, defaults to "*" */
  requiredIndicator?: React.ReactNode;
};

export type TBaseCalendarInputSelectsRangeProps = {
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
};

export type TBaseCalendarInputNotSelectsRangeProps = {
  selectsRange?: false;
  bind?: IBindingProps<TDate>;
  value?: TDate;

  /** fired when the value changes */
  onChange?: (value: TDate) => void;
};

export type TBaseCalendarInputProps = TBaseCalendarInputCommonProps &
  (TBaseCalendarInputSelectsRangeProps | TBaseCalendarInputNotSelectsRangeProps);

/**
 * third-party docs: https://reactdatepicker.com
 * decided to use single component to keep as close to third party as possible */
export const BaseCalendarInput: React.FunctionComponent<TBaseCalendarInputProps> = props => {
  const globals = useArmstrongConfig({
    validationMode: props.validationMode,
    requiredIndicator: props.requiredIndicator,
    scrollValidationErrorsIntoView: props.scrollValidationErrorsIntoView,
    validationErrorIcon: props.errorIcon,
  });

  const singleValue = !props.selectsRange ? props.value : undefined;
  const startValue = props.selectsRange ? props.startValue : undefined;
  const endValue = props.selectsRange ? props.endValue : undefined;

  const commonBindingState = {
    validationErrorIcon: props.errorIcon,
    validationMode: globals.validationMode,
  };

  // SINGLE DATE...

  const [date, setDate, bindDateConfig] = useBindingState(!props.selectsRange ? props.bind : undefined, {
    ...commonBindingState,
    validationErrorMessages: props.validationErrorMessages,
    value: singleValue,
    onChange: !props.selectsRange ? props.onChange : undefined,
  });

  // DATE RANGE...

  const [startDate, setStartDate, bindStartDateConfig] = useBindingState(
    props.selectsRange ? props.startBind : undefined,
    {
      ...commonBindingState,
      validationErrorMessages: props.validationErrorMessages,
      value: startValue,
      onChange: !props.selectsRange ? props.onChange : undefined,
    }
  );

  const [endDate, setEndDate, bindEndDateConfig] = useBindingState(props.selectsRange ? props.endBind : undefined, {
    ...commonBindingState,
    // only pass in validationErrorMessages once for date range as errors will be combined!
    validationErrorMessages: [],
    value: endValue,
    onChange: !props.selectsRange ? props.onChange : undefined,
  });

  const validationErrorMessages = props.selectsRange
    ? [...bindStartDateConfig.validationErrorMessages, ...bindEndDateConfig.validationErrorMessages]
    : bindDateConfig.validationErrorMessages;

  return (
    <div
      className={concat('arm-input', 'arm-base-calendar-input', props.className)}
      data-disabled={props.disabled || props.pending}
      data-error={props.error || !!validationErrorMessages?.length}
      data-size={props.displaySize}
      // onClick={e => {
      //   e.preventDefault();
      //   e.stopPropagation();
      // }}
    >
      <Label
        className={concat('arm-radio-group-label')}
        required={props.required}
        requiredIndicator={globals.requiredIndicator}
      >
        {props.content}
      </Label>
      <div className={'arm-base-calendar-input-container'}>
        <div className="arm-calendar-icon">
          <ImCalendar />
        </div>
        <ReactDatePicker
          {...BaseCalendarInput.defaultProps?.config}
          {...props.config}
          disabled={props.disabled}
          selectsRange={props.selectsRange}
          onChange={newValue => {
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
          error={bindDateConfig.shouldShowValidationErrorIcon && (!!validationErrorMessages?.length || props.error)}
          pending={props.pending}
          errorIcon={bindDateConfig.validationErrorIcon}
        />
      </div>
      {!!validationErrorMessages?.length && bindDateConfig.shouldShowValidationErrorMessage && (
        <ValidationErrors
          validationErrors={validationErrorMessages}
          scrollIntoView={globals.scrollValidationErrorsIntoView}
          className="arm-calendar-errors"
        />
      )}
    </div>
  );
};

BaseCalendarInput.defaultProps = {
  validationMode: 'both',
  selectsRange: false,
  config: { locale: enGB, dateFormat: 'dd/MM/yyyy' },
};
