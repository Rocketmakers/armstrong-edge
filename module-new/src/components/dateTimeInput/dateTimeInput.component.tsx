// eslint-disable-next-line import/no-duplicates -- needed to prevent date-fns input lint fix bug
import { format, parse } from 'date-fns';
// eslint-disable-next-line import/no-duplicates -- needed to prevent date-fns input lint fix bug
import { enGB } from 'date-fns/locale';
import * as React from 'react';
import ReactDatePicker, { ReactDatePickerCustomHeaderProps, ReactDatePickerProps } from 'react-datepicker';
import { FaChevronLeft, FaChevronRight, FaRegCalendar } from 'react-icons/fa';
import { ImClock } from 'react-icons/im';

import { IBindingProps, useBindingState } from '../../hooks/form';
import {
  ArmstrongFCExtensions,
  ArmstrongFCProps,
  ArmstrongFCReturn,
  IArmstrongReactSelectOption,
  NullOrUndefined,
} from '../../types';
import { assertNever, stripNullOrUndefined } from '../../utils';
import { Button } from '../button';
import { Input, ITextInputProps } from '../input';
import { SingleSelect } from '../reactSelect/singleSelect';
import { getMonths, getYears } from './dateTimeInput.utils';

import 'react-datepicker/dist/react-datepicker.css';
import './dateTimeInput.theme.css';

export interface IDatePickerConfig
  extends Omit<
    ReactDatePickerProps,
    'onChange' | 'value' | 'selectsRange' | 'selected' | 'startDate' | 'endDate' | 'disabled' | 'dateFormat' | 'locale'
  > {
  dateFormat?: string;

  locale?: Locale;
}

export interface IDateTimeInputProps<TBind extends NullOrUndefined<string>>
  extends Omit<ITextInputProps<TBind>, 'value' | 'onChange' | 'bind'> {
  /** props to spread onto the React Datepicker component */
  config?: IDatePickerConfig;
}

export interface IDateTimeInputRangeProps<TBind extends NullOrUndefined<string>> extends IDateTimeInputProps<TBind> {
  selectsRange: true;

  /**  prop for binding start date (range) to an Armstrong form binder (see forms documentation) */
  startBind?: IBindingProps<TBind>;

  /** current start date of input */
  startValue?: TBind;

  /**  prop for binding end date (range) to an Armstrong form binder (see forms documentation) */
  endBind?: IBindingProps<TBind>;

  /** current end date of input */
  endValue?: TBind;

  /** fired when the value changes */
  onChange?: (value: [TBind, TBind]) => void;
}

export interface IDateTimeInputSingleProps<TBind extends NullOrUndefined<string>> extends IDateTimeInputProps<TBind> {
  monthSelectVariant?: 'left-align' | 'centered' | 'dropdown';
  mode?: 'date' | 'time' | 'date-time';
  selectsRange?: false;
  bind?: IBindingProps<TBind>;
  value?: TBind;

  /** fired when the value changes */
  onChange?: (value: TBind) => void;
}

export type DateTimeInputProps<TBind extends NullOrUndefined<string>> =
  | IDateTimeInputRangeProps<TBind>
  | IDateTimeInputSingleProps<TBind>;

const defaultFormat = 'dd/MM/yyyy';
const defaultLocale = enGB;

const renderDayContents = (day: number) => {
  return <div className="arm-date-time-input-day-contents">{day}</div>;
};

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
    <>
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
    </>
  );
};

const LeftAlignHeader: React.FC<ReactDatePickerCustomHeaderProps> = props => {
  return (
    <div className="arm-date-time-input-header left-align">
      <span className="arm-left-align-date">{format(props.monthDate, 'MMMM yyyy')}</span>
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
      <span>{format(props.monthDate, 'MMMM yyyy')}</span>
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

const SingleDateTimeInput = React.forwardRef<HTMLInputElement, IDateTimeInputSingleProps<NullOrUndefined<string>>>(
  (
    { config, selectsRange, bind, value, onChange, validationErrorMessages, monthSelectVariant, mode, ...inputProps },
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

    const compiledDefaultFormat = React.useMemo(() => {
      switch (mode) {
        case 'date':
          return 'dd/MM/yyyy';
        case 'time':
          return 'HH:mm';
        case 'date-time':
          return 'dd/MM/yyyy HH:mm';
        default:
          assertNever(mode);
          return '';
      }
    }, [mode]);

    const compiledConfig = React.useMemo<IDatePickerConfig>(() => {
      return {
        // overridable with config
        monthsShown: 1,
        dateFormat: compiledDefaultFormat,
        ...config,
        renderCustomHeader,
        renderDayContents,
        showTimeSelect: mode === 'time' || mode === 'date-time',
        showTimeSelectOnly: mode === 'time',
      };
    }, [mode, config, renderCustomHeader, compiledDefaultFormat]);

    const formatString = compiledConfig.dateFormat ?? defaultFormat;
    const locale = compiledConfig.locale ?? defaultLocale;
    const dateVal = date ? parse(date, formatString, new Date(), { locale }) : undefined;

    const formatDate = (incomingDate: NullOrUndefined<Date>) => {
      return incomingDate ? format(incomingDate, formatString) : undefined;
    };

    return (
      <ReactDatePicker
        {...stripNullOrUndefined(compiledConfig)}
        locale={locale}
        dateFormat={formatString}
        disabled={inputProps.disabled}
        customInput={
          <Input
            ref={ref}
            leftOverlay={mode === 'time' ? <ImClock /> : <FaRegCalendar />}
            {...inputProps}
            validationErrorMessages={bindDateConfig.validationErrorMessages}
          />
        }
        selectsRange={false}
        selected={dateVal}
        onChange={newValue => setDate?.(formatDate(newValue as Date))}
      />
    );
  }
);

SingleDateTimeInput.displayName = 'SingleDateTimeInput';

const RangeDateTimeInput = React.forwardRef<HTMLInputElement, IDateTimeInputRangeProps<NullOrUndefined<string>>>(
  (
    {
      config,
      selectsRange,
      startBind,
      endBind,
      startValue,
      endValue,
      onChange,
      validationErrorMessages,
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
        // overridable with config
        monthsShown: 2,
        ...config,
        renderDayContents,
      };
    }, [config]);

    const formatString = compiledConfig.dateFormat ?? defaultFormat;
    const locale = compiledConfig.locale ?? defaultLocale;
    const startDateVal = startDate ? parse(startDate, formatString, new Date(), { locale }) : undefined;
    const endDateVal = endDate ? parse(endDate, formatString, new Date(), { locale }) : undefined;

    const formatDate = (incomingDate: NullOrUndefined<Date>) => {
      return incomingDate ? format(incomingDate, formatString) : undefined;
    };

    return (
      <ReactDatePicker
        {...stripNullOrUndefined(compiledConfig)}
        locale={locale}
        dateFormat={formatString}
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
          setStartDate?.(formatDate(newValue?.[0]));
          setEndDate?.(formatDate(newValue?.[1]));
        }}
      />
    );
  }
);

RangeDateTimeInput.displayName = 'RangeDateTimeInput';

RangeDateTimeInput.defaultProps = {
  leftOverlay: <FaRegCalendar />,
};

/**
 * third-party docs: https://reactdatepicker.com
 * decided to use single component to keep as close to third party as possible */
export const DateTimeInput = React.forwardRef<HTMLInputElement, DateTimeInputProps<NullOrUndefined<string>>>(
  (props, ref) => {
    return (
      <div style={{ position: 'relative' }}>
        {props.selectsRange ? (
          <RangeDateTimeInput ref={ref} {...props} />
        ) : (
          <SingleDateTimeInput ref={ref} {...props} />
        )}
      </div>
    );
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
};
