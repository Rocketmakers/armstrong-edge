import { format } from 'date-fns';
import * as React from 'react';
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import { ImArrowLeft2, ImArrowRight2, ImCalendar } from 'react-icons/im';

import { useForm } from '../../hooks/form';
import { concat } from '../../utils';
import { BaseCalendarInput, TBaseCalendarInputProps, TBaseDatePickerConfig } from '../baseCalendarInput';
import { Button } from '../button';
import { Input } from '../input';
import { ISelectOption, Select } from '../select';

export type TCalendarInputProps = {
  /** swipe02 is default */
  dateSelectionHeader?: 'swipe01' | 'swipe02' | 'dropdown';

  locale?: TBaseDatePickerConfig['locale'];

  /** default to english */
  language?: {
    todayLabel: string;
    tomorrowLabel: string;
  };
} & TBaseCalendarInputProps;

const CustomInput = React.forwardRef<HTMLInputElement>((props, ref) => (
  <Input leftOverlay={<ImCalendar />} {...props} ref={ref} />
));
CustomInput.displayName = 'Custom Input';

const DropdownHeader: React.FC<ReactDatePickerCustomHeaderProps> = ({ changeMonth, changeYear }) => {
  const today = new Date();

  const { formState, formProp } = useForm<{ month: number; year: number }>({
    month: today.getMonth(),
    year: today.getFullYear(),
  });

  React.useEffect(() => {
    if (formState?.month) {
      changeMonth(formState.month);
    }
    if (formState?.year) {
      changeYear(formState.year);
    }
  }, [formState?.month, formState?.year, changeMonth, changeYear]);

  /** @todo - how to set locale? */
  const getLocaleMonth = (month: number) => {
    const date = new Date();

    date.setMonth(month);
    return format(date, 'MMMM');
  };

  const monthOptions = new Array(12).fill(null).map<ISelectOption<number, unknown>>((_, index) => ({
    id: index,
    name: getLocaleMonth(index),
  }));

  const yearOptions = new Array(100).fill(null).map<ISelectOption<number, unknown>>((_, index) => {
    const year = today.getFullYear() - 50 + index;
    return { id: year, name: `${year}` };
  });

  return (
    <div className="arm-calendar-input-header dropdown">
      <Select className="calendar-dropdown-select" options={monthOptions} bind={formProp('month').bind()} />
      <Select className="calendar-dropdown-select" options={yearOptions} bind={formProp('year').bind()} />
    </div>
  );
};

const Swipe01Header: React.FC<ReactDatePickerCustomHeaderProps> = props => {
  return (
    <div className="arm-calendar-input-header swipe01">
      <span className="swipe01-date">{format(props.monthDate, 'MMMM yyyy')}</span>
      <div className="swipe01-date-navigation">
        <Button
          className="arm-calendar-input-header-button swipe01-button"
          displayStyle="blank"
          onClick={props.decreaseMonth}
        >
          <ImArrowLeft2 className="arm-calendar-input-header-icon" />
        </Button>
        <Button
          className="arm-calendar-input-header-button swipe01-button"
          displayStyle="blank"
          onClick={props.increaseMonth}
        >
          <ImArrowRight2 className="arm-calendar-input-header-icon" />
        </Button>
      </div>
    </div>
  );
};

const Swipe02Header: React.FC<ReactDatePickerCustomHeaderProps> = props => {
  return (
    <div className="arm-calendar-input-header swipe02">
      <Button className="arm-calendar-input-header-button" displayStyle="blank" onClick={props.decreaseMonth}>
        <ImArrowLeft2 className="arm-calendar-input-header-icon" />
      </Button>
      <span>{format(props.monthDate, 'MMMM yyyy')}</span>

      <Button className="arm-calendar-input-header-button" displayStyle="blank" onClick={props.increaseMonth}>
        <ImArrowRight2 className="arm-calendar-input-header-icon" />
      </Button>
    </div>
  );
};

const renderDayContents = day => {
  return <div className="arm-calendar-input-day-contents">{day}</div>;
};

/**
 * @decision option to use native input on mobile / tablet? - leave this issue entirely up to the consuming code
 * the following config is overridden: customInput, renderCustomHeader, locale
 */
export const CalendarInput: React.FC<TCalendarInputProps> = ({ dateSelectionHeader, locale, language, ...props }) => {
  const renderCustomHeader = React.useCallback(
    (customerHeaderProps: ReactDatePickerCustomHeaderProps) => {
      return (
        <div className="customer-header-container">
          {dateSelectionHeader === 'dropdown' && <DropdownHeader {...customerHeaderProps} />}
          {dateSelectionHeader === 'swipe01' && <Swipe01Header {...customerHeaderProps} />}
          {(!dateSelectionHeader || dateSelectionHeader === 'swipe02') && <Swipe02Header {...customerHeaderProps} />}
        </div>
      );
    },
    [dateSelectionHeader]
  );

  const config = React.useMemo<TBaseDatePickerConfig>(() => {
    return {
      monthsShown: props.selectsRange ? 2 : 1,

      ...props.config,

      customInput: <CustomInput />,
      renderCustomHeader: props.selectsRange ? undefined : renderCustomHeader,
      renderDayContents,
      locale,
    };
  }, [renderCustomHeader, locale, props.config, props.selectsRange]);

  return <BaseCalendarInput {...props} className={concat('arm-calendar-input', props.className)} config={config} />;
};

CalendarInput.displayName = 'CalendarInput';
