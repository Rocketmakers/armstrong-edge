// eslint-disable-next-line import/no-duplicates -- needed to prevent date-fns input lint fix bug
import { parse } from 'date-fns';
// eslint-disable-next-line import/no-duplicates -- needed to prevent date-fns input lint fix bug
import { enGB } from 'date-fns/locale';
import * as React from 'react';
import ReactDatePicker, { ReactDatePickerCustomHeaderProps, ReactDatePickerProps } from 'react-datepicker';
import { FaChevronLeft, FaChevronRight, FaRegCalendar } from 'react-icons/fa';
import { ImClock } from 'react-icons/im';

import { IBindingProps, useBindingState } from '../../form';
import {
  ArmstrongFCExtensions,
  ArmstrongFCProps,
  ArmstrongFCReturn,
  IArmstrongReactSelectOption,
  NullOrUndefined,
} from '../../types';
import { assertNever, concat, stripNullOrUndefined } from '../../utils';
import { Button } from '../button';
import { useArmstrongConfig } from '../config';
import { Input, ITextInputProps } from '../input';
import { Label } from '../label';
import { SingleSelect } from '../reactSelect/singleSelect';
import { ValidationErrors } from '../validationErrors';
import { formatDate, getMonths, getYears } from './dateTimeInput.utils';

import 'react-datepicker/dist/react-datepicker.css';
import './dateTimeInput.theme.css';

export type IDatePickerConfig = Omit<
  ReactDatePickerProps,
  'onChange' | 'value' | 'selectsRange' | 'selected' | 'startDate' | 'endDate' | 'disabled' | 'dateFormat' | 'locale'
>;

export interface IDateTimeInputProps {
  /** Props to spread onto the React Datepicker component (see: https://reactdatepicker.com) */
  config?: IDatePickerConfig;

  /** The datetime format as a string (e.g. `dd/MM/yyyy HH:mm`) */
  format?: string;

  /** The locale to use (default `enGB`) */
  locale?: Locale;
}

export interface IDateTimeInputRangeProps<TBind extends NullOrUndefined<string>>
  extends IDateTimeInputProps,
    Omit<ITextInputProps<TBind>, 'value' | 'onChange' | 'bind' | 'ref' | 'type'> {
  /** Whether to render a native date input (useful for mobile) */
  native?: false;

  /** Whether to select a single date or a date range */
  selectsRange: true;

  /** Prop for binding start date (range) to an Armstrong form binder (see forms documentation) */
  startBind?: IBindingProps<TBind>;

  /** current start date of input */
  startValue?: TBind;

  /** Prop for binding end date (range) to an Armstrong form binder (see forms documentation) */
  endBind?: IBindingProps<TBind>;

  /** Current end date of input */
  endValue?: TBind;

  /** Fired when the value changes */
  onChange?: (value: [TBind, TBind]) => void;
}

interface IDateOrTimeInputSinglePropsBase<TBind extends NullOrUndefined<string>> extends IDateTimeInputProps {
  /** Whether to render a native date input (useful for mobile) */
  native?: false;

  /** The display variant to use for the month/year selectors (defaults to 'centered', but 'dropdown' offers the most flexibility for picking dates a long way into the past/future.) */
  monthSelectVariant?: 'left-align' | 'centered' | 'dropdown';

  /** Whether to pick date, time or both. Defaults to `date` */
  mode?: 'date' | 'time';

  /** Whether to select a single date or a date range */
  selectsRange?: false;

  /** Prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TBind>;

  /** The current value */
  value?: TBind;

  /** Fired when the value changes */
  onChange?: (value: TBind) => void;
}

export type IDateOrTimeInputSingleProps<TBind extends NullOrUndefined<string>> =
  IDateOrTimeInputSinglePropsBase<TBind> & Omit<ITextInputProps<TBind>, 'value' | 'onChange' | 'bind' | 'ref' | 'type'>;

export interface IDateAndTimeInputSingleProps<TBind extends NullOrUndefined<string>>
  extends Omit<IDateOrTimeInputSinglePropsBase<TBind>, 'mode' | 'config'>,
    Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref' | 'value' | 'onChange'>,
    Pick<
      ITextInputProps<TBind>,
      | 'validationErrorMessages'
      | 'validationMode'
      | 'displaySize'
      | 'disabled'
      | 'hideIconOnStatus'
      | 'disableOnPending'
      | 'scrollValidationErrorsIntoView'
      | 'validationErrorsClassName'
      | 'labelClassName'
      | 'labelId'
      | 'label'
      | 'required'
      | 'requiredIndicator'
      | 'statusPosition'
      | 'error'
      | 'validationMode'
      | 'errorIcon'
    > {
  /** Whether to pick date, time or both. Defaults to `date` */
  mode: 'date-time';

  /** Optional element ref to apply to the time input. (the root ref attr will apply to the date input.) */
  timeInputRef?: React.Ref<HTMLInputElement>;

  /** Optional config to pass to the date input */
  dateInputConfig?: IDatePickerConfig;

  /** Optional config to pass to the time input */
  timeInputConfig?: IDatePickerConfig;

  /** Display format for the date input (defaults to dd/MM/yyyy) */
  dateInputDisplayFormat?: string;

  /** Display format for the time input (defaults to HH:mm) */
  timeInputDisplayFormat?: string;

  /** Optional additional props to pass to the date input */
  dateInputProps?: Pick<ITextInputProps<TBind>, 'inputClassName' | 'leftOverlay' | 'rightOverlay' | 'statusClassName'>;

  /** Optional additional props to pass to the time input */
  timeInputProps?: Pick<ITextInputProps<TBind>, 'inputClassName' | 'leftOverlay' | 'rightOverlay' | 'statusClassName'>;
}

export type IDateTimeInputSingleProps<TBind extends NullOrUndefined<string>> =
  | IDateOrTimeInputSingleProps<TBind>
  | IDateAndTimeInputSingleProps<TBind>;

export interface IDateTimeInputNativeProps<TBind extends NullOrUndefined<string>>
  extends Omit<ITextInputProps<TBind>, 'type' | 'ref'>,
    Pick<IDateTimeInputSingleProps<TBind>, 'mode' | 'selectsRange'> {
  /** Whether to render a native date input (useful for mobile) */
  native: true;
}

export type DateTimeInputProps<TBind extends NullOrUndefined<string>> =
  | IDateTimeInputRangeProps<TBind>
  | IDateTimeInputSingleProps<TBind>
  | IDateTimeInputNativeProps<TBind>;

const defaultDateFormat = 'dd/MM/yyyy';
const defaultTimeFormat = 'HH:mm';
const defaultDateAndTimeFormat = `${defaultDateFormat} ${defaultTimeFormat}`;
const defaultLocale = enGB;

const DropdownHeader: React.FC<ReactDatePickerCustomHeaderProps & { min?: Date; max?: Date; locale?: Locale }> = ({
  changeMonth,
  changeYear,
  date,
  min,
  max,
  locale = defaultLocale,
}) => {
  const monthOptions = React.useMemo<IArmstrongReactSelectOption<number>[]>(() => {
    return getMonths(date.getFullYear(), locale, min, max).map(({ index, name, disabled }) => ({
      id: index,
      content: name,
      disabled,
    }));
  }, [date, locale, min, max]);

  const yearOptions = React.useMemo<IArmstrongReactSelectOption<number>[]>(() => {
    return getYears(min, max).map(y => ({ id: y, content: y.toString() }));
  }, [min, max]);

  return (
    <div className="arm-date-time-input-header dropdown">
      <SingleSelect
        className="arm-date-time-dropdown-select"
        options={monthOptions}
        onSelectOption={changeMonth}
        currentValue={date.getMonth()}
        clearable={false}
        displaySize="small"
      />
      <SingleSelect
        className="arm-date-time-dropdown-select"
        options={yearOptions}
        onSelectOption={changeYear}
        currentValue={date.getFullYear()}
        clearable={false}
        displaySize="small"
      />
    </div>
  );
};

const LeftAlignHeader: React.FC<ReactDatePickerCustomHeaderProps> = props => {
  return (
    <div className="arm-date-time-input-header left-align">
      <span className="arm-left-align-date">{formatDate(props.monthDate, 'MMMM yyyy')}</span>
      <div className="arm-left-align-date-navigation">
        <Button
          className="arm-date-time-input-header-button left-align-button"
          displayStyle="blank"
          onClick={props.decreaseMonth}
          disabled={props.prevMonthButtonDisabled}
        >
          <FaChevronLeft className="arm-date-time-input-header-icon" />
        </Button>
        <Button
          className="arm-date-time-input-header-button left-align-button"
          displayStyle="blank"
          onClick={props.increaseMonth}
          disabled={props.nextMonthButtonDisabled}
        >
          <FaChevronRight className="arm-date-time-input-header-icon" />
        </Button>
      </div>
    </div>
  );
};

const CenteredHeader: React.FC<ReactDatePickerCustomHeaderProps> = props => {
  return (
    <div className="arm-date-time-input-header centered">
      <Button
        className="arm-date-time-input-header-button"
        displayStyle="blank"
        onClick={props.decreaseMonth}
        disabled={props.prevMonthButtonDisabled}
      >
        <FaChevronLeft className="arm-date-time-input-header-icon" />
      </Button>
      <span>{formatDate(props.monthDate, 'MMMM yyyy')}</span>
      <Button
        className="arm-date-time-input-header-button"
        displayStyle="blank"
        onClick={props.increaseMonth}
        disabled={props.nextMonthButtonDisabled}
      >
        <FaChevronRight className="arm-date-time-input-header-icon" />
      </Button>
    </div>
  );
};

export const SingleDateTimeInput = React.forwardRef<HTMLInputElement, IDateOrTimeInputSingleProps<string | null>>(
  (
    {
      config,
      selectsRange,
      className,
      bind,
      value,
      onChange,
      validationErrorMessages,
      monthSelectVariant,
      mode,
      native,
      format,
      locale,
      ...inputProps
    },
    ref
  ) => {
    const [date, setDate, bindDateConfig] = useBindingState(bind, {
      validationErrorMessages,
      value,
      onChange,
    });

    const renderCustomHeader = React.useCallback(
      (customHeaderProps: ReactDatePickerCustomHeaderProps) => {
        return (
          <div className="customer-header-container">
            {monthSelectVariant === 'dropdown' && (
              <DropdownHeader
                {...customHeaderProps}
                min={config?.minDate ?? undefined}
                max={config?.maxDate ?? undefined}
              />
            )}
            {monthSelectVariant === 'left-align' && <LeftAlignHeader {...customHeaderProps} />}
            {(!monthSelectVariant || monthSelectVariant === 'centered') && <CenteredHeader {...customHeaderProps} />}
          </div>
        );
      },
      [monthSelectVariant, config]
    );

    const compiledFormat = React.useMemo(() => {
      if (format) {
        return format;
      }
      switch (mode) {
        case 'date':
          return defaultDateFormat;
        case 'time':
          return defaultTimeFormat;
        default:
          assertNever(mode);
          return '';
      }
    }, [mode, format]);

    const compiledConfig = React.useMemo<IDatePickerConfig>(() => {
      return {
        // initial two props can be overridden with config
        monthsShown: 1,
        dateFormat: compiledFormat,
        ...config,
        renderCustomHeader,
        renderDayContents: day => <div className="arm-date-time-input-day-contents">{day}</div>,
        showTimeSelect: mode === 'time',
        showTimeSelectOnly: mode === 'time',
      };
    }, [mode, config, renderCustomHeader, compiledFormat]);

    const dateVal = React.useMemo(
      () => (date ? parse(date, compiledFormat as string, new Date(), { locale }) : undefined),
      [date, compiledFormat, locale]
    );

    return (
      <ReactDatePicker
        {...stripNullOrUndefined(compiledConfig)}
        className={className}
        locale={locale}
        dateFormat={compiledFormat}
        disabled={inputProps.disabled}
        customInput={
          <Input
            ref={ref}
            leftOverlay={mode === 'time' ? <ImClock /> : <FaRegCalendar />}
            {...inputProps}
            className={concat(inputProps.inputClassName, 'arm-date-time-input')}
            validationErrorMessages={bindDateConfig.validationErrorMessages}
          />
        }
        selectsRange={false}
        selected={dateVal}
        onChange={newValue => setDate?.(formatDate(newValue as Date, compiledFormat))}
      />
    );
  }
);

SingleDateTimeInput.displayName = 'SingleDateTimeInput';

SingleDateTimeInput.defaultProps = {
  locale: defaultLocale,
};

export const RangeDateTimeInput = React.forwardRef<HTMLInputElement, IDateTimeInputRangeProps<string | null>>(
  (
    {
      config,
      selectsRange,
      startBind,
      endBind,
      startValue,
      endValue,
      className,
      onChange,
      validationErrorMessages,
      native,
      format,
      locale,
      ...inputProps
    },
    ref
  ) => {
    const [startDate, setStartDate, bindStartDateConfig] = useBindingState(startBind, {
      validationErrorMessages,
      value: startValue,
    });

    const [endDate, setEndDate, bindEndDateConfig] = useBindingState(endBind, {
      // only pass in validationErrorMessages once for date range as errors will be combined!
      validationErrorMessages: [],
      value: endValue,
    });

    const compiledConfig = React.useMemo<IDatePickerConfig>(() => {
      return {
        // initial values can be overridden with config
        monthsShown: 2,
        ...config,
        renderDayContents: day => <div className="arm-date-time-input-day-contents">{day}</div>,
      };
    }, [config]);

    const startDateVal = startDate ? parse(startDate, format as string, new Date(), { locale }) : undefined;
    const endDateVal = endDate ? parse(endDate, format as string, new Date(), { locale }) : undefined;

    return (
      <ReactDatePicker
        {...stripNullOrUndefined(compiledConfig)}
        locale={locale}
        className={concat('arm-date-time-input', className)}
        dateFormat={format}
        disabled={inputProps.disabled}
        customInput={
          <Input
            type="text"
            ref={ref}
            {...inputProps}
            validationErrorMessages={[
              ...bindStartDateConfig.validationErrorMessages,
              ...bindEndDateConfig.validationErrorMessages,
            ]}
          />
        }
        selectsRange={true}
        startDate={startDateVal}
        endDate={endDateVal}
        onChange={newValue => {
          setStartDate?.(formatDate(newValue?.[0], format as string));
          setEndDate?.(formatDate(newValue?.[1], format as string));
        }}
      />
    );
  }
);

RangeDateTimeInput.displayName = 'RangeDateTimeInput';

RangeDateTimeInput.defaultProps = {
  leftOverlay: <FaRegCalendar />,
  format: defaultDateFormat,
  locale: defaultLocale,
};

const NativeDateTimeInput = React.forwardRef<HTMLInputElement, IDateTimeInputNativeProps<string | null>>(
  ({ mode, selectsRange, native, ...props }, ref) => {
    return <Input ref={ref} type={mode === 'date-time' ? 'datetime-local' : mode} {...props} />;
  }
);

NativeDateTimeInput.displayName = 'NativeDateTimeInput';

export const SingleDateAndTimeInput = React.forwardRef<HTMLInputElement, IDateAndTimeInputSingleProps<string | null>>(
  (
    {
      className,
      bind,
      mode,
      validationErrorMessages,
      disableOnPending,
      hideIconOnStatus,
      displaySize,
      statusPosition,
      requiredIndicator,
      scrollValidationErrorsIntoView,
      validationMode,
      errorIcon,
      validationErrorsClassName,
      value,
      onChange,
      dateInputConfig,
      timeInputConfig,
      format,
      locale,
      disabled,
      required,
      dateInputProps = {},
      timeInputProps = {},
      timeInputDisplayFormat,
      dateInputDisplayFormat,
      timeInputRef,
      selectsRange,
      native,
      monthSelectVariant,
      error,
      label,
      labelId,
      labelClassName,
      ...nativeProps
    },
    ref
  ) => {
    const globals = useArmstrongConfig({
      validationMode,
      disableInputOnPending: disableOnPending,
      hideInputErrorIconOnStatus: hideIconOnStatus,
      inputDisplaySize: displaySize,
      inputStatusPosition: statusPosition,
      requiredIndicator,
      validationErrorIcon: errorIcon,
      scrollValidationErrorsIntoView,
    });

    const [dateTime, setDateTime, bindConfig] = useBindingState(bind, {
      validationErrorMessages,
      value,
      onChange,
      validationMode: globals.validationMode,
      validationErrorIcon: globals.validationErrorIcon,
    });

    const incomingDateValue = React.useMemo(() => {
      if (!dateTime) return undefined;
      const asDate = parse(dateTime, format as string, new Date(), { locale });
      return formatDate(asDate, dateInputDisplayFormat as string);
    }, [dateTime, format, locale, dateInputDisplayFormat]);

    const incomingTimeValue = React.useMemo(() => {
      if (!dateTime) return undefined;
      const asDate = parse(dateTime, format as string, new Date(), { locale });
      return formatDate(asDate, timeInputDisplayFormat as string);
    }, [dateTime, format, locale, timeInputDisplayFormat]);

    const [dateValue, setDateValue] = React.useState<NullOrUndefined<string>>(incomingDateValue);
    const [timeValue, setTimeValue] = React.useState<NullOrUndefined<string>>(incomingTimeValue);

    React.useEffect(() => setDateValue(incomingDateValue), [incomingDateValue]);
    React.useEffect(() => setTimeValue(incomingTimeValue), [incomingTimeValue]);

    React.useEffect(() => {
      if (dateValue && timeValue) {
        const dateAsDate = parse(dateValue, dateInputDisplayFormat as string, new Date(), { locale });
        const timeAsDate = parse(timeValue, timeInputDisplayFormat as string, new Date(), { locale });
        const combinedDate = new Date(
          dateAsDate.getFullYear(),
          dateAsDate.getMonth(),
          dateAsDate.getDate(),
          timeAsDate.getHours(),
          timeAsDate.getMinutes(),
          timeAsDate.getSeconds(),
          timeAsDate.getMilliseconds()
        );
        setDateTime?.(formatDate(combinedDate, format as string));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps -- Don't want to trigger effect when setter changes
    }, [dateInputDisplayFormat, dateValue, format, locale, timeInputDisplayFormat, timeValue]);

    return (
      <div className={concat('arm-date-and-time-input-container', className)} {...nativeProps}>
        {label && (
          <Label
            className={concat('arm-input-base-label arm-date-and-time-input-label', labelClassName)}
            required={required}
            requiredIndicator={globals.requiredIndicator}
            htmlFor={labelId}
          >
            {label}
          </Label>
        )}
        <div className="arm-date-and-time-inputs">
          <div className="arm-date-and-time-input arm-date-input">
            <SingleDateTimeInput
              mode="date"
              ref={ref}
              locale={locale}
              format={dateInputDisplayFormat}
              config={dateInputConfig}
              value={dateValue}
              onChange={setDateValue}
              displaySize={globals.inputDisplaySize}
              validationMode={bindConfig.validationMode}
              disabled={disabled}
              statusPosition={globals.inputStatusPosition}
              disableOnPending={globals.disableInputOnPending}
              hideIconOnStatus={globals.hideInputErrorIconOnStatus}
              required={required}
              requiredIndicator={globals.requiredIndicator}
              monthSelectVariant={monthSelectVariant}
              error={error || !!validationErrorMessages?.length}
              {...dateInputProps}
            />
          </div>
          <div className="arm-date-and-time-input arm-time-input">
            <SingleDateTimeInput
              mode="time"
              locale={locale}
              format={timeInputDisplayFormat}
              config={timeInputConfig}
              ref={timeInputRef}
              value={timeValue}
              onChange={setTimeValue}
              displaySize={globals.inputDisplaySize}
              validationMode={bindConfig.validationMode}
              disabled={disabled}
              statusPosition={globals.inputStatusPosition}
              disableOnPending={globals.disableInputOnPending}
              hideIconOnStatus={globals.hideInputErrorIconOnStatus}
              required={required}
              requiredIndicator={globals.requiredIndicator}
              error={error || !!validationErrorMessages?.length}
              {...timeInputProps}
            />
          </div>
        </div>
        {!!validationErrorMessages?.length && bindConfig.shouldShowValidationErrorMessage && (
          <ValidationErrors
            className={validationErrorsClassName}
            validationMode={globals.validationMode}
            validationErrors={validationErrorMessages}
            scrollIntoView={globals.scrollValidationErrorsIntoView}
          />
        )}
      </div>
    );
  }
);

SingleDateAndTimeInput.displayName = 'SingleDateAndTimeInput';

SingleDateAndTimeInput.defaultProps = {
  format: defaultDateAndTimeFormat,
  locale: defaultLocale,
  timeInputDisplayFormat: defaultTimeFormat,
  dateInputDisplayFormat: defaultDateFormat,
};

/** third-party docs: https://reactdatepicker.com */
export const DateTimeInput = React.forwardRef<HTMLInputElement, DateTimeInputProps<string | null>>(
  (props, ref) => {
    if (props.selectsRange) {
      return <RangeDateTimeInput ref={ref} {...props} />;
    }
    if (props.native) {
      return <NativeDateTimeInput ref={ref} {...props} />;
    }
    if (props.mode === 'date-time') {
      return <SingleDateAndTimeInput ref={ref} {...props} />;
    }
    return <SingleDateTimeInput ref={ref} {...props} />;
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TValue extends NullOrUndefined<string>>(
  props: ArmstrongFCProps<DateTimeInputProps<TValue>, HTMLInputElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<DateTimeInputProps<string>>;

DateTimeInput.displayName = 'DateTimeInput';

DateTimeInput.defaultProps = {
  selectsRange: false,
  mode: 'date',
  native: false,
};
