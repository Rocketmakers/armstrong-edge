import * as React from 'react';

import { use as useForm } from '../../hooks/form';
import { Dates } from '../../utils/dates';
import { ICalendarHighlightParsed, IConfig } from './calendar.types';
import { getDays, getMonths, getYears } from './calendar.utils';

export const use = ({ formatString, locale, highlights, max, min, rangeTo, selectedDate }: IConfig = {}) => {
  // Parse all `Dates.DateLike` types into strict date objects
  const selectedDateParsed = React.useMemo(() => {
    return Dates.dateLikeToDate(selectedDate ?? new Date(), formatString, locale)!;
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
    return getMonths(formState!.viewingYear, minParsed, maxParsed, locale);
  }, [minParsed, maxParsed, formState!.viewingYear, locale]);

  const selectableDays = React.useMemo(() => {
    return getDays(formState!.viewingMonth, formState!.viewingYear, selectedDateParsed, minParsed, maxParsed, rangeToParsed, highlightsParsed);
  }, [formState, minParsed, maxParsed, selectedDateParsed, rangeToParsed, highlightsParsed]);

  // Setters
  const stepMonth = React.useCallback(
    (direction: 'back' | 'forward') => {
      const currentMonth = formState!.viewingMonth;
      const nextMonth = direction === 'forward' ? currentMonth + 1 : currentMonth - 1;
      if (selectableMonths.map((month) => month.indexInYear).indexOf(nextMonth) > -1) {
        formProp('viewingMonth').set(nextMonth);
      }
    },
    [formState, formProp, selectableMonths]
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
