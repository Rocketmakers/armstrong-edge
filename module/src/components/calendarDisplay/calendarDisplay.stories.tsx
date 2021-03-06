import { Story } from '@storybook/react';
import * as React from 'react';

import { Calendar, IconUtils } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { Button } from '../button';
import { ErrorMessage } from '../errorMessage';
import { CalendarDisplay } from './calendarDisplay.component';

/** metadata */

export default StoryUtils.createMeta(CalendarDisplay, 'Display', 'Calendar Display', {}, true);

/** component template */

// const Template = StoryUtils.createTemplate(CalendarDisplay);

/** stories */

export const Default = () => {
  const { days, months, years, monthYearFormProp, stepMonth, jumpTo } = Calendar.use();

  return (
    <>
      <CalendarDisplay
        days={days}
        months={months}
        years={years}
        currentMonthBinding={monthYearFormProp('viewingMonth').bind()}
        currentYearBinding={monthYearFormProp('viewingYear').bind()}
        onBackClicked={() => stepMonth('back')}
        onForwardClicked={() => stepMonth('forward')}
        jumpTo={jumpTo}
      />
      <ErrorMessage message="You probably don't want to use this component- use the CalendarView or CalendarInput instead" />
    </>
  );
};
export const CustomStartDay = () => {
  const { days, months, years, monthYearFormProp, stepMonth, jumpTo } = Calendar.use();

  return (
    <CalendarDisplay
      days={days}
      months={months}
      years={years}
      currentMonthBinding={monthYearFormProp('viewingMonth').bind()}
      currentYearBinding={monthYearFormProp('viewingYear').bind()}
      onBackClicked={() => stepMonth('back')}
      onForwardClicked={() => stepMonth('forward')}
      weekdayStartIndex={1}
      jumpTo={jumpTo}
    />
  );
};
export const SelectedDate = () => {
  const initialDate = React.useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 3);
    return date;
  }, []);
  const [date, setDate] = React.useState(initialDate);
  const { days, months, years, monthYearFormProp, stepMonth, jumpTo } = Calendar.use({ selectedDate: date });

  return (
    <CalendarDisplay
      days={days}
      months={months}
      years={years}
      currentMonthBinding={monthYearFormProp('viewingMonth').bind()}
      currentYearBinding={monthYearFormProp('viewingYear').bind()}
      onBackClicked={() => stepMonth('back')}
      onForwardClicked={() => stepMonth('forward')}
      onDayClicked={(d) => setDate(d.date)}
      jumpTo={jumpTo}
    />
  );
};
export const SelectedDateRange = () => {
  const initialDate = React.useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 3);
    return date;
  }, []);
  const rangeTo = React.useMemo(() => {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    return date;
  }, []);
  const [date, setDate] = React.useState(initialDate);
  const { days, months, years, monthYearFormProp, stepMonth, jumpTo } = Calendar.use({
    selectedDate: date,
    rangeTo,
  });

  return (
    <CalendarDisplay
      days={days}
      months={months}
      years={years}
      currentMonthBinding={monthYearFormProp('viewingMonth').bind()}
      currentYearBinding={monthYearFormProp('viewingYear').bind()}
      onBackClicked={() => stepMonth('back')}
      onForwardClicked={() => stepMonth('forward')}
      onDayClicked={(d) => setDate(d.date)}
      jumpTo={jumpTo}
    />
  );
};
export const Highlights = () => {
  const highlightedDate = React.useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 3);
    return date;
  }, []);
  const highlightedDate2 = React.useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 6);
    return date;
  }, []);
  const { days, months, years, monthYearFormProp, stepMonth, jumpTo } = Calendar.use({
    highlights: [{ date: highlightedDate }, { date: highlightedDate2 }],
  });

  return (
    <CalendarDisplay
      days={days}
      months={months}
      years={years}
      currentMonthBinding={monthYearFormProp('viewingMonth').bind()}
      currentYearBinding={monthYearFormProp('viewingYear').bind()}
      onBackClicked={() => stepMonth('back')}
      onForwardClicked={() => stepMonth('forward')}
      jumpTo={jumpTo}
    />
  );
};

export const PastOnly = () => {
  const { days, months, years, monthYearFormProp, stepMonth, jumpTo } = Calendar.use({ max: new Date() });

  return (
    <>
      <CalendarDisplay
        days={days}
        months={months}
        years={years}
        currentMonthBinding={monthYearFormProp('viewingMonth').bind()}
        currentYearBinding={monthYearFormProp('viewingYear').bind()}
        onBackClicked={() => stepMonth('back')}
        onForwardClicked={() => stepMonth('forward')}
        jumpTo={jumpTo}
      />
    </>
  );
};

export const FixedDatesNoHighlight: Story = () => {
  const initialDate = React.useMemo(() => {
    return new Date(2021, 1, 15, 2, 45, 0, 0);
  }, []);
  const rangeTo = React.useMemo(() => {
    return new Date(2021, 1, 20, 2, 45, 0, 0);
  }, []);
  const highlightedDate = React.useMemo(() => {
    return new Date(2021, 1, 4, 2, 45, 0, 0);
  }, []);
  const [date, setDate] = React.useState(initialDate);

  const { days, months, years, monthYearFormProp, stepMonth, jumpTo } = Calendar.use({
    selectedDate: date,
    rangeTo,
    highlights: [
      {
        date: highlightedDate,
      },
    ],
  });

  return (
    <>
      <CalendarDisplay
        days={days}
        months={months}
        years={years}
        currentMonthBinding={monthYearFormProp('viewingMonth').bind()}
        currentYearBinding={monthYearFormProp('viewingYear').bind()}
        onBackClicked={() => stepMonth('back')}
        onForwardClicked={() => stepMonth('forward')}
        onDayClicked={(d) => setDate(d.date)}
        highlightToday={false}
        jumpTo={jumpTo}
      />
    </>
  );
};

export const CustomButtons = () => {
  const { days, months, years, monthYearFormProp, stepMonth, jumpTo } = Calendar.use();

  return (
    <>
      <CalendarDisplay
        days={days}
        months={months}
        years={years}
        currentMonthBinding={monthYearFormProp('viewingMonth').bind()}
        currentYearBinding={monthYearFormProp('viewingYear').bind()}
        onBackClicked={() => stepMonth('back')}
        onForwardClicked={() => stepMonth('forward')}
        backButton={(onClick) => (
          <Button leftIcon={IconUtils.getIconDefinition('LinearIcons', 'arrow-left')} minimalStyle onClick={onClick}>
            back
          </Button>
        )}
        forwardsButton={(onClick) => (
          <Button rightIcon={IconUtils.getIconDefinition('LinearIcons', 'arrow-right')} minimalStyle onClick={onClick}>
            next
          </Button>
        )}
        jumpTo={jumpTo}
      />
    </>
  );
};

export const NoControls = () => {
  const { days, months, years, monthYearFormProp, stepMonth, jumpTo } = Calendar.use();

  return (
    <CalendarDisplay
      days={days}
      months={months}
      years={years}
      currentMonthBinding={monthYearFormProp('viewingMonth').bind()}
      currentYearBinding={monthYearFormProp('viewingYear').bind()}
      onBackClicked={() => stepMonth('back')}
      onForwardClicked={() => stepMonth('forward')}
      controls={false}
      jumpTo={jumpTo}
    />
  );
};
