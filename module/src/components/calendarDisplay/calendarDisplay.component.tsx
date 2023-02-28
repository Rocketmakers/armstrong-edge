import * as React from 'react';

import { Calendar, Select } from '../..';
import { IBindingProps } from '../../hooks/form';
import { reIndex, repeat } from '../../utils/arrays';
import { concat } from '../../utils/classNames';
import { Dates } from '../../utils/dates';
import { positiveModulo } from '../../utils/maths';
import { Button, IButtonProps } from '../button';
import { getIconDefinition } from '../icon';
import { IconButton } from '../iconButton';
import { getDayOfWeekHeadings, getDaysWithDisplayFormat } from './calendarDisplay.utils';

export interface ICalendarDisplayProps {
  /**
   * An optional "day of the week" index to be the first day of the week.
   * - By default, weeks will start on Sunday (index 0)
   * - Indexes range from Sunday = 0 to Saturday = 6
   */
  weekdayStartIndex?: number;
  /**
   * An optional locale to apply to all date formatting.
   * - Must be a date-fns compliant `Locale` object (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/Locale))
   * - If no locale is passed, `en-GB` will be used as the system default for all date formatting.
   */
  locale?: Dates.DateLocale;
  /**
   * The list of days to render in the calendar view. usually comes from the `Calendar.use` hook.
   */
  days: Calendar.IDay[];
  /**
   * The list of months to render in the calendar view. usually comes from the `Calendar.use` hook.
   */
  months: Calendar.IMonth[];
  /**
   * The list of years to render in the calendar view. usually comes from the `Calendar.use` hook.
   */
  years: Calendar.IYear[];
  /**
   * Allows an external form to bind to the month selector.
   */
  currentMonthBinding: IBindingProps<number>;
  /**
   * Allows an external form to bind to the year selector.
   */
  currentYearBinding: IBindingProps<number>;
  /** Jump to the page which contains a date */
  jumpTo: (date: Dates.DateLike) => void;
  /**
   * An optional function to call when a day is clicked.
   * @param day The day that has been clicked.
   */
  onDayClicked?: (day: Calendar.IDay) => void;
  /**
   * Optional callback for when the back button has been clicked, usually goes to the previous month.
   */
  onBackClicked?: (event: React.MouseEvent<HTMLElement>) => void;
  /**
   * Optional callback for when the forward button has been clicked, usually goes to the next month.
   */
  onForwardClicked?: (event: React.MouseEvent<HTMLElement>) => void;
  /**
   * A formatter to apply when displaying the days inside the calendar.
   * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
   * - Number by default `d` = (1 - 31).
   * - Other options include: `dd` = (01 - 31), `Do` = (1st - 31st)
   */
  calendarDayDisplayFormat?: string;
  /**
   * A formatter to apply when displaying the month selector inside the calendar.
   * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
   * - Long word by default: `MMMM` = (January - December)
   * - Other options include: `MM` = (01 - 12), `MMMM` = (January - December)
   */
  calendarMonthSelectDisplayFormat?: string;
  /**
   * A formatter to apply when displaying the year selector inside the calendar.
   * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
   * - Number by default: `YYYY` = (2021).
   * - Other options include: `YY` = (21).
   */
  calendarYearSelectDisplayFormat?: string;
  /**
   * A formatter to apply when displaying the day of the week headings inside the calendar.
   * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
   * - Single letter by default: `eeeee` = (S - S).
   * - Other options include: `eee` = (Sun - Sat). `eeee` = (Sunday - Saturday).
   */
  calendarDayOfTheWeekHeadingDisplayFormat?: string;

  /**
   * Allows you to toggle the highlighting of todays date on the calendar
   * - Defaults to true
   */
  highlightToday?: boolean;

  /** CSS className property */
  className?: string;

  /** Override the back button JSX used to move the calendar back a month */
  backButton?: (onClick: (event: React.MouseEvent<HTMLElement>) => void) => JSX.Element | string;

  /** Override the forwards button JSX used to move the calendar forwards a month */
  forwardsButton?: (onClick: (event: React.MouseEvent<HTMLElement>) => void) => JSX.Element | string;

  /** Should show pagination and picker controls (next,prev,select month, select year) */
  controls?: boolean;

  /** An array of dates to appear as buttons below the calendar to allow quick navigation */
  jumpList?: {
    name: string;
    date: Dates.DateLike;
    buttonProps?: IButtonProps;
  }[];

  /** */
  onClickJumpList?: (date: Dates.DateLike) => void;
}

/**
 * A stateless display component for rendering the calendar.
 * NOTE: This probably isn't what you're looking for.
 * - For a date input, use `CalendarInput`.
 * - For an interactive calendar view, use `CalendarDisplay`.
 */
export const CalendarDisplay = React.forwardRef<HTMLDivElement, ICalendarDisplayProps>(
  (
    {
      onForwardClicked,
      weekdayStartIndex,
      onBackClicked,
      onDayClicked,
      locale,
      days,
      months,
      years,
      currentMonthBinding,
      currentYearBinding,
      calendarDayDisplayFormat,
      calendarMonthSelectDisplayFormat,
      calendarYearSelectDisplayFormat,
      calendarDayOfTheWeekHeadingDisplayFormat,
      highlightToday,
      className,
      backButton,
      forwardsButton,
      controls,
      jumpList,
      jumpTo,
      onClickJumpList,
    },
    ref
  ) => {
    const dayOfWeekHeadings = React.useMemo(() => {
      return reIndex(getDayOfWeekHeadings(calendarDayOfTheWeekHeadingDisplayFormat!, locale), weekdayStartIndex!);
    }, [weekdayStartIndex, locale, calendarDayOfTheWeekHeadingDisplayFormat]);

    const monthOptions = React.useMemo(() => {
      return Dates.getMonthSelectOptions(months, calendarMonthSelectDisplayFormat!, locale);
    }, [months, locale, calendarMonthSelectDisplayFormat]);

    const yearOptions = React.useMemo(() => {
      return Dates.getYearSelectOptions(years, calendarYearSelectDisplayFormat!, locale);
    }, [years, locale, calendarYearSelectDisplayFormat]);

    const displayDays = React.useMemo(() => {
      return getDaysWithDisplayFormat(days, calendarDayDisplayFormat!, locale);
    }, [days, locale, calendarDayDisplayFormat]);

    // Calculate the number of "empty" days to display at the beginning of the month based on the day of the week displayed first, and the first day of the month selected.
    const blankDaysAtStartCount = React.useMemo(() => {
      const monthStartsOnWeekday = days[0]?.indexInWeek ?? 0;
      return positiveModulo(monthStartsOnWeekday - weekdayStartIndex!, 7);
    }, [days, weekdayStartIndex]);

    return (
      <div ref={ref} className={concat('arm-calendar-display', className)}>
        {controls && (
          <div className="arm-calendar-display-controls">
            {onBackClicked &&
              (backButton?.(onBackClicked) || (
                <IconButton
                  type="button"
                  icon={getIconDefinition('Icomoon', 'arrow-left3')}
                  minimalStyle
                  className="arm-calendar-display-button arm-calendar-display-button-prev"
                  onClick={onBackClicked}
                />
              ))}

            <Select
              className="arm-calendar-display-select arm-calendar-display-select-month"
              bind={currentMonthBinding}
              options={monthOptions}
            />
            <Select
              className="arm-calendar-display-select arm-calendar-display-select-year"
              bind={currentYearBinding}
              options={yearOptions}
            />

            {onForwardClicked &&
              (forwardsButton?.(onForwardClicked) || (
                <IconButton
                  type="button"
                  icon={getIconDefinition('Icomoon', 'arrow-right3')}
                  minimalStyle
                  className="arm-calendar-display-button arm-calendar-display-button-next"
                  onClick={onForwardClicked}
                />
              ))}
          </div>
        )}

        <div className="arm-calendar-date-grid">
          <div className="arm-calendar-date-grid-headings">
            {dayOfWeekHeadings.map((heading, index) => (
              <div key={index} className="arm-calendar-date-grid-heading">
                {heading}
              </div>
            ))}
          </div>

          <div className="arm-calendar-date-grid-days">
            {repeat(blankDaysAtStartCount, index => (
              <div key={index} className="arm-calendar-date-grid-day arm-calendar-date-grid-day-empty" />
            ))}

            {displayDays.map(displayDay => (
              <Button
                type="button"
                className={concat('arm-calendar-date-grid-day', displayDay.day.highlightedClassName)}
                onClick={() => onDayClicked?.(displayDay.day)}
                key={displayDay.day.numberInMonth}
                data-selected={displayDay.day.isSelected}
                disabled={displayDay.day.isDisabled}
                data-today={highlightToday && displayDay.day.isToday}
                aria-current={displayDay.day.isToday && 'date'}
                data-range-start={displayDay.day.isRangeStart}
                data-range-middle={displayDay.day.isRangeMiddle}
                data-range-end={displayDay.day.isRangeEnd}
                data-highlight={displayDay.day.isHighlighted}
                minimalStyle
              >
                <p>{displayDay.displayFormat}</p>
                {displayDay.day.isHighlighted && <div className="arm-calendar-date-grid-day-highlight" />}
              </Button>
            ))}
          </div>
        </div>

        {!!jumpList?.length && (
          <div className="arm-calendar-jump-list">
            {jumpList.map(jump => (
              <Button
                minimalStyle
                {...jump.buttonProps}
                key={jump.name}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  jumpTo(jump.date);
                  onClickJumpList?.(jump.date);
                  jump.buttonProps?.onClick?.(event);
                }}
                type="button"
              >
                {jump.name}
              </Button>
            ))}
          </div>
        )}
      </div>
    );
  }
);

CalendarDisplay.defaultProps = {
  weekdayStartIndex: 0,
  calendarDayOfTheWeekHeadingDisplayFormat: 'eeeee',
  calendarMonthSelectDisplayFormat: 'MMMM',
  calendarYearSelectDisplayFormat: 'yyyy',
  calendarDayDisplayFormat: 'd',
  highlightToday: true,
  controls: true,
  jumpList: [{ date: new Date(), name: 'Today' }],
};

CalendarDisplay.displayName = 'CalendarDisplay';
