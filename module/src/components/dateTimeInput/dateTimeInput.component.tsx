// eslint-disable-next-line import/no-duplicates -- needed to prevent date-fns input lint fix bug
import { parse } from 'date-fns';
// eslint-disable-next-line import/no-duplicates -- needed to prevent date-fns input lint fix bug
import { enGB } from 'date-fns/locale';
import * as React from 'react';
import ReactDatePicker, { DatePickerProps, ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import { FaChevronLeft, FaChevronRight, FaRegCalendar } from 'react-icons/fa';
import { ImClock } from 'react-icons/im';

import { IBindingProps, useBindingState } from '../../form';
import { useDidUpdateEffect } from '../../hooks/useDidUpdateEffect';
import {
  ArmstrongFCExtensions,
  ArmstrongFCProps,
  ArmstrongFCReturn,
  IArmstrongOption,
  NullOrUndefined,
} from '../../types';
import { assertNever, concat, stripNullOrUndefined } from '../../utils';
import { onBlurWorkaround } from '../../workarounds/radixDialog';
import { Button } from '../button';
import { useArmstrongConfig } from '../config';
import { Input, ITextInputProps } from '../input';
import { Label } from '../label';
import { Select } from '../select';
import { ValidationErrors } from '../validationErrors';
import { formatDate, getMonths, getYears } from './dateTimeInput.utils';

import 'react-datepicker/dist/react-datepicker.css';
import './dateTimeInput.theme.css';

export type IDatePickerConfig = Omit<
  DatePickerProps,
  'onChange' | 'value' | 'selectsRange' | 'selected' | 'startDate' | 'endDate' | 'disabled' | 'dateFormat' | 'locale'
>;

export interface IDateTimeInputProps {
  /** Props to spread onto the React Datepicker component (see: https://reactdatepicker.com) */
  config?: IDatePickerConfig;

  /** The datetime format as a string (e.g. `dd/MM/yyyy HH:mm`) */
  format?: string;

  /** The locale to use (default `enGB`) */
  locale?: Locale;

  /** should the input validate automatically against the provided schema? Default: `true` */
  autoValidate?: boolean;

  /** whether to show the calendar when the left overlay icon is clicked (by default, this is the calendar icon.) This property is true by default. */
  showCalendarOnLeftOverlayClick?: boolean;
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

export interface IDateOrTimeInputSingleProps<TBind extends NullOrUndefined<string>>
  extends IDateOrTimeInputSinglePropsBase<TBind>,
    Omit<ITextInputProps<TBind>, 'value' | 'onChange' | 'bind' | 'ref' | 'type' | 'leftOverlay'> {
  leftOverlay?: React.ReactNode | false;
}

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
  const monthOptions = React.useMemo<IArmstrongOption<number>[]>(() => {
    return getMonths(date.getFullYear(), locale, min, max).map(({ index, name, disabled }) => ({
      id: index,
      content: name,
      disabled,
    }));
  }, [date, locale, min, max]);

  const yearOptions = React.useMemo<IArmstrongOption<number>[]>(() => {
    return getYears(min, max).map(y => ({ id: y, content: y.toString() }));
  }, [min, max]);

  return (
    <div className="arm-date-time-input-header dropdown">
      <Select
        className="arm-date-time-dropdown-select"
        options={monthOptions}
        onSelectOption={changeMonth}
        currentValue={date.getMonth()}
        clearable={false}
        displaySize="small"
      />
      <Select
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
          type="button"
          className="arm-date-time-input-header-button left-align-button"
          displayStyle="blank"
          onClick={props.decreaseMonth}
          disabled={props.prevMonthButtonDisabled}
        >
          <FaChevronLeft className="arm-date-time-input-header-icon" />
        </Button>
        <Button
          type="button"
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
        type="button"
        className="arm-date-time-input-header-button"
        displayStyle="blank"
        onClick={props.decreaseMonth}
        disabled={props.prevMonthButtonDisabled}
      >
        <FaChevronLeft className="arm-date-time-input-header-icon" />
      </Button>
      <span>{formatDate(props.monthDate, 'MMMM yyyy')}</span>
      <Button
        type="button"
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
      locale = defaultLocale,
      statusClassName,
      autoValidate,
      showCalendarOnLeftOverlayClick = true,
      onBlur,
      ...inputProps
    },
    ref
  ) => {
    const datePickerRef = React.useRef<ReactDatePicker>(null);

    const [date, setDate, bindDateConfig] = useBindingState(bind, {
      validationErrorMessages,
      value,
      onChange,
      autoValidate,
    });

    const globals = useArmstrongConfig({
      autoValidate: bindDateConfig.autoValidate,
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

    useDidUpdateEffect(() => {
      if (globals.autoValidate) {
        bindDateConfig.validate();
      }
      bindDateConfig.setTouched(true);
    }, [dateVal]);

    const leftOverlay = React.useMemo(() => {
      if (inputProps.leftOverlay === false) return undefined;
      if (inputProps.leftOverlay) return inputProps.leftOverlay;
      if (mode === 'time') return <ImClock />;
      return <FaRegCalendar />;
    }, [inputProps.leftOverlay, mode]);

    const onBlurEvent = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        onBlurWorkaround(event);
        return onBlur?.(event);
      },
      [onBlur]
    );

    return (
      <ReactDatePicker
        {...stripNullOrUndefined(compiledConfig)}
        ref={datePickerRef}
        className={className}
        locale={locale}
        dateFormat={compiledFormat}
        disabled={inputProps.disabled}
        required={inputProps.required}
        onBlur={onBlurEvent}
        customInput={
          <Input
            ref={ref}
            {...inputProps}
            leftOverlay={
              showCalendarOnLeftOverlayClick && leftOverlay ? (
                <button
                  type="button"
                  className="arm-date-time-overlay-button"
                  disabled={inputProps.disabled}
                  onClick={() => datePickerRef.current?.setOpen(true)}
                >
                  {leftOverlay}
                </button>
              ) : (
                leftOverlay
              )
            }
            className={concat(inputProps.inputClassName, 'arm-date-time-input')}
            validationErrorMessages={bindDateConfig.validationErrorMessages}
          />
        }
        selected={dateVal}
        onChange={newValue => setDate?.(formatDate(newValue as Date, compiledFormat))}
      />
    );
  }
);

SingleDateTimeInput.displayName = 'SingleDateTimeInput';

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
      format = defaultDateFormat,
      locale = defaultLocale,
      autoValidate,
      showCalendarOnLeftOverlayClick = true,
      leftOverlay = <FaRegCalendar />,
      ...inputProps
    },
    ref
  ) => {
    const datePickerRef = React.useRef<ReactDatePicker<never, true>>(null);

    const [startDate, setStartDate, bindStartDateConfig] = useBindingState(startBind, {
      validationErrorMessages,
      value: startValue,
      autoValidate,
    });

    const [endDate, setEndDate, bindEndDateConfig] = useBindingState(endBind, {
      // only pass in validationErrorMessages once for date range as errors will be combined!
      validationErrorMessages: [],
      value: endValue,
      autoValidate,
    });

    const globals = useArmstrongConfig({
      autoValidate: bindEndDateConfig.autoValidate ?? bindStartDateConfig.autoValidate,
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

    useDidUpdateEffect(() => {
      if (globals.autoValidate) {
        bindEndDateConfig.validate();
        bindStartDateConfig.validate();
      }
      bindStartDateConfig.setTouched(true);
      bindEndDateConfig.setTouched(true);
    }, [endDate]);

    useDidUpdateEffect(() => {
      if (globals.autoValidate && bindStartDateConfig.isTouched && bindEndDateConfig.isTouched) {
        bindEndDateConfig.validate();
        bindStartDateConfig.validate();
      }
    }, [startDate]);

    return (
      <ReactDatePicker
        {...stripNullOrUndefined(compiledConfig)}
        ref={datePickerRef}
        locale={locale}
        className={concat('arm-date-time-input', className)}
        dateFormat={format}
        disabled={inputProps.disabled}
        customInput={
          <Input
            type="text"
            ref={ref}
            {...inputProps}
            leftOverlay={
              showCalendarOnLeftOverlayClick && leftOverlay ? (
                <button
                  type="button"
                  className="arm-date-time-overlay-button"
                  disabled={inputProps.disabled}
                  onClick={() => datePickerRef.current?.setOpen(true)}
                >
                  {leftOverlay}
                </button>
              ) : (
                leftOverlay
              )
            }
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
          let hasChanged = false;
          if (newValue?.[0]) {
            setStartDate?.(formatDate(newValue?.[0], format as string));
            hasChanged = true;
          }
          if (newValue?.[1]) {
            setEndDate?.(formatDate(newValue?.[1], format as string));
            hasChanged = true;
          }
          if (hasChanged) {
            onChange?.(newValue?.map(nv => formatDate(nv, format as string)) as [string | null, string | null]);
          }
        }}
      />
    );
  }
);

RangeDateTimeInput.displayName = 'RangeDateTimeInput';

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
      format = defaultDateAndTimeFormat,
      locale = defaultLocale,
      disabled,
      required,
      dateInputProps = {},
      timeInputProps = {},
      timeInputDisplayFormat = defaultTimeFormat,
      dateInputDisplayFormat = defaultDateFormat,
      timeInputRef,
      selectsRange,
      native,
      monthSelectVariant,
      error,
      label,
      labelId,
      labelClassName,
      autoValidate,
      ...nativeProps
    },
    ref
  ) => {
    const [dateTime, setDateTime, bindConfig] = useBindingState(bind, {
      validationErrorMessages,
      value,
      onChange,
      validationMode,
      autoValidate,
    });

    const globals = useArmstrongConfig({
      validationMode: bindConfig.validationMode,
      disableControlOnPending: disableOnPending,
      hideInputErrorIconOnStatus: hideIconOnStatus,
      inputDisplaySize: displaySize,
      inputStatusPosition: statusPosition,
      requiredIndicator,
      validationErrorIcon: bindConfig.validationErrorIcon,
      scrollValidationErrorsIntoView,
      autoValidate: bindConfig.autoValidate,
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

    useDidUpdateEffect(() => {
      if (globals.autoValidate) {
        bindConfig.validate();
      }
      bindConfig.setTouched(true);
    }, [dateTime]);

    return (
      <div className={concat('arm-date-and-time-input-container', className)} {...nativeProps}>
        {label && (
          <Label
            className={concat('arm-input-base-label arm-date-and-time-input-label', labelClassName)}
            required={required}
            requiredIndicator={globals.requiredIndicator}
            htmlFor={labelId}
            displaySize={globals.inputDisplaySize}
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
              disableOnPending={globals.disableControlOnPending}
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
              disableOnPending={globals.disableControlOnPending}
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

/** third-party docs: https://reactdatepicker.com */
export const DateTimeInput = React.forwardRef<HTMLInputElement, DateTimeInputProps<string | null>>(
  ({ selectsRange = false, native = false, ...props }, ref) => {
    const mode =
      (props as IDateOrTimeInputSingleProps<string | null> | IDateAndTimeInputSingleProps<string | null>).mode ??
      'date';
    if (selectsRange) {
      return (
        <RangeDateTimeInput
          ref={ref}
          native={false}
          selectsRange={selectsRange}
          {...(props as Omit<IDateTimeInputRangeProps<string | null>, 'selectsRange' | 'native'>)}
        />
      );
    }
    if (native) {
      return (
        <NativeDateTimeInput
          native={true}
          ref={ref}
          {...(props as Omit<IDateTimeInputNativeProps<string | null>, 'selectsRange' | 'native'>)}
        />
      );
    }
    if (mode === 'date-time') {
      return (
        <SingleDateAndTimeInput
          ref={ref}
          mode={mode}
          native={false}
          {...(props as Omit<IDateAndTimeInputSingleProps<string | null>, 'selectsRange' | 'native' | 'mode'>)}
        />
      );
    }
    return (
      <SingleDateTimeInput
        ref={ref}
        mode={mode}
        native={false}
        {...(props as Omit<IDateOrTimeInputSingleProps<string | null>, 'selectsRange' | 'native' | 'mode'>)}
      />
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TValue extends NullOrUndefined<string>>(
  props: ArmstrongFCProps<DateTimeInputProps<TValue>, HTMLInputElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<DateTimeInputProps<string>>;

DateTimeInput.displayName = 'DateTimeInput';
