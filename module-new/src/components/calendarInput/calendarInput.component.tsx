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
import { stripNullOrUndefined } from '../../utils';
import { Button } from '../button';
import { Input, ITextInputProps } from '../input';
import { SingleSelect } from '../reactSelect/singleSelect';

import 'react-datepicker/dist/react-datepicker.css';
import './calendarInput.theme.css';

export interface IDatePickerConfig
  extends Omit<
    ReactDatePickerProps,
    'onChange' | 'value' | 'selectsRange' | 'selected' | 'startDate' | 'endDate' | 'disabled' | 'dateFormat' | 'locale'
  > {
  dateFormat?: string;

  locale?: Locale;
}

export interface ICalendarInputProps<TBind extends NullOrUndefined<string>>
  extends Omit<ITextInputProps<TBind>, 'value' | 'onChange' | 'bind'> {
  /** props to spread onto the calendar component */
  config?: IDatePickerConfig;
}

export interface ICalendarInputRangeProps<TBind extends NullOrUndefined<string>> extends ICalendarInputProps<TBind> {
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

export interface ICalendarInputSingleProps<TBind extends NullOrUndefined<string>> extends ICalendarInputProps<TBind> {
  /** swipe02 is default */
  variant?: 'swipe01' | 'swipe02' | 'dropdown' | 'time';
  selectsRange?: false;
  bind?: IBindingProps<TBind>;
  value?: TBind;

  /** fired when the value changes */
  onChange?: (value: TBind) => void;
}

export type CalendarInputProps<TBind extends NullOrUndefined<string>> =
  | ICalendarInputRangeProps<TBind>
  | ICalendarInputSingleProps<TBind>;

const defaultFormat = 'dd/MM/yyyy';
const defaultLocale = enGB;

const renderDayContents = (day: number) => {
  return <div className="arm-calendar-input-day-contents">{day}</div>;
};

const DropdownHeader: React.FC<ReactDatePickerCustomHeaderProps> = ({ changeMonth, changeYear, date }) => {
  const today = new Date();

  const getLocaleMonth = (month: number) => {
    const dateX = new Date();

    dateX.setMonth(month);
    return format(dateX, 'MMMM');
  };

  const monthOptions = new Array(12).fill(null).map<IArmstrongReactSelectOption<number>>((_, index) => ({
    id: index,
    content: getLocaleMonth(index),
  }));

  const yearOptions = new Array(110).fill(null).map<IArmstrongReactSelectOption<number>>((_, index) => {
    const year = today.getFullYear() + 10 - index;
    return { id: year, content: year.toString() };
  });

  return (
    <>
      <div className="arm-calendar-input-header dropdown">
        <SingleSelect
          className="arm-calendar-dropdown-select"
          options={monthOptions}
          onSelectOption={newValue => {
            changeMonth(newValue);
          }}
          currentValue={date.getMonth()}
          clearable={false}
          displaySize="small"
        />
        <SingleSelect
          className="arm-calendar-dropdown-select"
          options={yearOptions}
          onSelectOption={newValue => {
            changeYear(newValue);
          }}
          currentValue={date.getFullYear()}
          clearable={false}
          displaySize="small"
        />
      </div>
    </>
  );
};

const Swipe01Header: React.FC<ReactDatePickerCustomHeaderProps> = props => {
  return (
    <div className="arm-calendar-input-header swipe01">
      <span className="arm-swipe01-date">{format(props.monthDate, 'MMMM yyyy')}</span>
      <div className="arm-swipe01-date-navigation">
        <Button
          className="arm-calendar-input-header-button swipe01-button"
          displayStyle="blank"
          onClick={props.decreaseMonth}
        >
          <FaChevronLeft className="arm-calendar-input-header-icon" />
        </Button>
        <Button
          className="arm-calendar-input-header-button swipe01-button"
          displayStyle="blank"
          onClick={props.increaseMonth}
        >
          <FaChevronRight className="arm-calendar-input-header-icon" />
        </Button>
      </div>
    </div>
  );
};

const Swipe02Header: React.FC<ReactDatePickerCustomHeaderProps> = props => {
  return (
    <div className="arm-calendar-input-header swipe02">
      <Button className="arm-calendar-input-header-button" displayStyle="blank" onClick={props.decreaseMonth}>
        <FaChevronLeft className="arm-calendar-input-header-icon" />
      </Button>
      <span>{format(props.monthDate, 'MMMM yyyy')}</span>

      <Button className="arm-calendar-input-header-button" displayStyle="blank" onClick={props.increaseMonth}>
        <FaChevronRight className="arm-calendar-input-header-icon" />
      </Button>
    </div>
  );
};

const SingleCalendarInput = React.forwardRef<HTMLInputElement, ICalendarInputSingleProps<NullOrUndefined<string>>>(
  ({ config, selectsRange, bind, value, onChange, validationErrorMessages, variant, ...inputProps }, ref) => {
    const [date, setDate, bindDateConfig] = useBindingState(bind, {
      validationErrorMessages,
      value,
      onChange,
    });

    const renderCustomHeader = React.useCallback(
      (customHeaderProps: ReactDatePickerCustomHeaderProps) => {
        return (
          <div className="customer-header-container">
            {variant === 'dropdown' && <DropdownHeader {...customHeaderProps} />}
            {variant === 'swipe01' && <Swipe01Header {...customHeaderProps} />}
            {(!variant || variant === 'swipe02') && <Swipe02Header {...customHeaderProps} />}
          </div>
        );
      },
      [variant]
    );

    const compiledConfig = React.useMemo<IDatePickerConfig>(() => {
      return {
        // overridable with config
        monthsShown: 1,
        dateFormat: variant === 'time' ? 'hh:mm aa' : undefined,
        ...config,
        renderCustomHeader,
        renderDayContents,
        showTimeSelect: variant === 'time',
        showTimeSelectOnly: variant === 'time',
      };
    }, [variant, config, renderCustomHeader]);

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
            type="text"
            ref={ref}
            leftOverlay={variant === 'time' ? <ImClock /> : <FaRegCalendar />}
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

SingleCalendarInput.displayName = 'SingleCalendarInput';

const RangeCalendarInput = React.forwardRef<HTMLInputElement, ICalendarInputRangeProps<NullOrUndefined<string>>>(
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

RangeCalendarInput.displayName = 'RangeCalendarInput';

RangeCalendarInput.defaultProps = {
  leftOverlay: <FaRegCalendar />,
};

/**
 * third-party docs: https://reactdatepicker.com
 * decided to use single component to keep as close to third party as possible */
export const CalendarInput = React.forwardRef<HTMLInputElement, CalendarInputProps<NullOrUndefined<string>>>(
  (props, ref) => {
    return (
      <div style={{ position: 'relative' }}>
        {props.selectsRange ? (
          <RangeCalendarInput ref={ref} {...props} />
        ) : (
          <SingleCalendarInput ref={ref} {...props} />
        )}
      </div>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TValue extends NullOrUndefined<string>>(
  props: ArmstrongFCProps<CalendarInputProps<TValue>, HTMLInputElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<CalendarInputProps<string>>;

CalendarInput.displayName = 'CalendarInput';

CalendarInput.defaultProps = {
  selectsRange: false,
};
