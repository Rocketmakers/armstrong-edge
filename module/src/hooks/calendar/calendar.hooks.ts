import * as React from 'react';

import { use as useForm } from '../../hooks/form';
import { Dates } from '../../utils/dates';
import { ICalendarHighlightParsed, IConfig } from './calendar.types';
import { getDays, getMonths, getYears } from './calendar.utils';

export const use = ({ formatString, locale, highlights, max, min, rangeTo, selectedDate }: IConfig = {}) => {
  // Parse all `Dates.DateLike` types into strict date objects
  const selectedDateParsed = React.useMemo(() => {
    return Dates.dateLikeToDate(selectedDate || new Date(), formatString, locale)!;
  }, [selectedDate, formatString, locale]);

  const minParsed = React.useMemo(() => {
    return Dates.dateLikeToDate(min, formatString, locale);
  }, [min, formatString, locale]);

  const maxParsed = React.useMemo(() => {
    return Dates.dateLikeToDate(max, formatString, locale);
  }, [max, formatString, locale]);

  const rangeToParsed = React.useMemo(() => {
    return Dates.dateLikeToDate(rangeTo, formatString, locale);
  }, [rangeTo, formatString, locale]);

  const highlightsParsed = React.useMemo<ICalendarHighlightParsed[] | undefined>(() => {
    return highlights?.map((highlight) => ({
      ...highlight,
      date: Dates.dateLikeToDate(highlight.date, formatString, locale)!,
    }));
  }, [highlights, formatString, locale]);

  // Set up a simple form for use by the month/year selects.
  const { formState, formProp } = useForm({
    viewingMonth: selectedDateParsed.getMonth(),
    viewingYear: selectedDateParsed.getFullYear(),
  });

  // Create lists of years, months, days for display.
  const selectableYears = React.useMemo(() => {
    return getYears(minParsed, maxParsed);
  }, [minParsed, maxParsed]);

  const selectableMonths = React.useMemo(() => {
    return getMonths(formState!.viewingYear, minParsed, maxParsed);
  }, [minParsed, maxParsed, formState!.viewingYear, locale]);

  const selectableDays = React.useMemo(() => {
    return getDays(
      formState!.viewingMonth,
      formState!.viewingYear,
      selectedDate ? selectedDateParsed : undefined,
      minParsed,
      maxParsed,
      rangeToParsed,
      highlightsParsed
    );
  }, [formState, minParsed, maxParsed, selectedDate, selectedDateParsed, rangeToParsed, highlightsParsed]);

  // Setters
  const stepMonth = React.useCallback(
    (direction: 'back' | 'forward') => {
      const currentMonth = formState!.viewingMonth;
      const currentYear = formState!.viewingYear;
      if (currentMonth === 0 && direction === 'back') {
        // going back from first month
        const prevYear = currentYear - 1;
        if (selectableYears.map((year) => year.number).indexOf(prevYear) > -1) {
          formProp('viewingYear').set(prevYear);
          formProp('viewingMonth').set(selectableMonths.find((__, index) => index === selectableMonths.length - 1)!.indexInYear);
        }
        return;
      }
      if (currentMonth === selectableMonths.length - 1 && direction === 'forward') {
        // going forward from last month
        const nextYear = currentYear + 1;
        if (selectableYears.map((year) => year.number).indexOf(nextYear) > -1) {
          formProp('viewingYear').set(nextYear);
          formProp('viewingMonth').set(0);
        }
        return;
      }
      const nextMonthNumber = direction === 'forward' ? currentMonth + 1 : currentMonth - 1;
      const nextMonth = selectableMonths.find((month) => month.indexInYear === nextMonthNumber);
      if (nextMonth && !nextMonth.isDisabled) {
        formProp('viewingMonth').set(nextMonthNumber);
      }
    },
    [formState, formProp, selectableMonths, selectableYears]
  );

  return {
    days: selectableDays,
    months: selectableMonths,
    years: selectableYears,
    selectedDateParsed,
    monthYearFormState: formState,
    monthYearFormProp: formProp,
    stepMonth,
  };
};
