import { format } from 'date-fns';
import * as React from 'react';
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im';

import { IArmstrongReactSelectOption } from '../../types';
import { concat } from '../../utils';
import { BaseCalendarInput, TBaseCalendarInputProps, TBaseDatePickerConfig } from '../baseCalendarInput';
import { Button } from '../button';
import { SingleSelect } from '../reactSelect/singleSelect';

import './calendarInput.theme.css';

type DisplaySize = 'small' | 'medium' | 'large';

export type TCalendarInputProps = {
  /** swipe02 is default */
  dateSelectionHeader?: 'swipe01' | 'swipe02' | 'dropdown';

  displaySize?: DisplaySize;

  locale?: TBaseDatePickerConfig['locale'];

  /** default to english */
  language?: {
    todayLabel: string;
    tomorrowLabel: string;
  };
} & TBaseCalendarInputProps;

const DropdownHeader: React.FC<ReactDatePickerCustomHeaderProps> = ({ changeMonth, changeYear, date }) => {
  const today = new Date();

  /** @todo - how to set locale? */
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
    return { id: year, content: `${year}` };
  });

  return (
    <>
      <div className="arm-calendar-input-header dropdown">
        <SingleSelect
          className="arm-calendar-dropdown-select"
          options={monthOptions}
          onSelectOption={newValue => changeMonth(newValue)}
          currentValue={date.getMonth()}
          isClearable={false}
        />
        <SingleSelect
          className="arm-calendar-dropdown-select"
          options={yearOptions}
          onSelectOption={newValue => changeYear(newValue)}
          currentValue={date.getFullYear()}
          isClearable={false}
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
 * @decision -- option to use native input on mobile / tablet? - leave this issue entirely up to the consuming code
 * the following config is overridden: customInput, renderCustomHeader, locale
 */
export const CalendarInput: React.FC<TCalendarInputProps> = ({
  dateSelectionHeader,
  locale,
  language,
  displaySize,
  ...props
}) => {
  const renderCustomHeader = React.useCallback(
    (customHeaderProps: ReactDatePickerCustomHeaderProps) => {
      return (
        <div className="customer-header-container">
          {dateSelectionHeader === 'dropdown' && <DropdownHeader {...customHeaderProps} />}
          {dateSelectionHeader === 'swipe01' && <Swipe01Header {...customHeaderProps} />}
          {(!dateSelectionHeader || dateSelectionHeader === 'swipe02') && <Swipe02Header {...customHeaderProps} />}
        </div>
      );
    },
    [dateSelectionHeader, displaySize]
  );

  const config = React.useMemo<TBaseDatePickerConfig>(() => {
    return {
      monthsShown: props.selectsRange ? 2 : 1,

      ...props.config,

      renderCustomHeader: props.selectsRange ? undefined : renderCustomHeader,
      renderDayContents,
      locale,
    };
  }, [renderCustomHeader, locale, props.config, props.selectsRange]);

  return (
    <BaseCalendarInput
      {...props}
      className={concat('arm-calendar-input', props.className)}
      config={config}
      displaySize={displaySize}
    />
  );
};
