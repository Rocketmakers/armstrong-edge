import * as React from 'react';

import { IBindingProps } from '../../hooks/form';
import { Dates } from '../../utils/dates';
import { AutoCompleteInput } from '../autoCompleteInput';
import { Button } from '../button';
import { CalendarView, ICalendarViewProps } from '../calendarView';
import { IconUtils } from '../icon';

interface ICalendarInputProps extends Omit<ICalendarViewProps, 'selectedDate'> {
  bind: IBindingProps<Dates.DateLike>;
}

export const CalendarInput = React.forwardRef<HTMLDivElement, ICalendarInputProps>(({ bind, ...viewProps }, ref) => {
  const [calendarOpen, setCalendarOpen] = React.useState(false);



  return (
    <div ref={ref} className="arm-calendar-input-wrapper">
      <div className="arm-calendar-selects-wrapper">
        <Button leftIcon={IconUtils.getIconDefinition('Icomoon', 'calendar')} />
      </div>
      <div className="arm-calendar-input-view-wrapper" data-visible={calendarOpen}>
        <CalendarView selectedDate={bind.value} {...viewProps} />
      </div>
    </div>
  );
});
