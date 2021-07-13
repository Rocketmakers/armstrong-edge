import * as React from 'react';
import { Calendar } from '../..';
import { IBindingProps } from '../../hooks/form';
import { Dates } from '../../utils/dates';
import { IAutoCompleteInputProps } from '../autoCompleteInput';
import { ICalendarDisplayProps } from '../calendarDisplay/calendarDisplay.component';
import { IconSet } from '../icon';
import { IIconWrapperProps } from '../iconWrapper';
import { IInputWrapperProps } from '../inputWrapper';
import { IStatusWrapperProps } from '../statusWrapper';
declare type AdditionalInputProps = Omit<IAutoCompleteInputProps<number>, 'bind' | 'options' | 'min' | 'max'>;
export declare type CalendarInputCalendarPosition = 'dropdown' | 'modal' | 'above' | 'below';
export interface ICalendarInputProps<TValue extends Dates.DateLike> extends Omit<Calendar.IConfig, 'selectedDate'>, Pick<ICalendarDisplayProps, 'weekdayStartIndex' | 'calendarDayDisplayFormat' | 'calendarMonthSelectDisplayFormat' | 'calendarYearSelectDisplayFormat' | 'calendarDayOfTheWeekHeadingDisplayFormat'>, IStatusWrapperProps, IIconWrapperProps<IconSet, IconSet>, Pick<IInputWrapperProps, 'leftOverlay' | 'rightOverlay'> {
    /** (string) CSS className property */
    className?: string;
    /** The value of the input */
    value?: TValue;
    /** Called when the value changes */
    onValueChange?: (value: TValue) => any;
    /**
     * Should the calendar close when a date is selected from inside?
     * - Defaults to `true`
     */
    closeCalendarOnDayClick?: boolean;
    /**
     * The binding for the input.
     * - Can be bound to a string, number or Date object.
     * - WARNING: If no initial value is passed it will assume the type is string.
     */
    bind?: IBindingProps<TValue>;
    /**
     * The order of the three select inputs.
     * - Defaults to 'day-month-year'
     */
    inputOrder?: 'day-month-year' | 'year-month-day';
    /**
     * Any additional props for the "day" autocomplete input
     */
    additionalDayInputProps?: AdditionalInputProps;
    /**
     * Any additional props for the "month" autocomplete input
     */
    additionalMonthInputProps?: AdditionalInputProps;
    /**
     * Any additional props for the "year" autocomplete input
     */
    additionalYearInputProps?: AdditionalInputProps;
    /**
     * An optional alternative display mode for the input.
     * - `calendar` will render the calendar button and read only inputs, this will force the user to select a date from the calendar.
     * - `inputs` will render the inputs only, hiding the calendar button and forcing the user to select/enter a date from the inputs.
     * - `both` will allow users to select a date from the calendar OR enter one using the inputs.
     * @default both
     */
    displayMode?: 'calendar' | 'inputs' | 'both';
    /**
     * The position to show the calendar - can show below the input in a dropdown, in a modal, or above or below the input
     */
    calendarPosition?: CalendarInputCalendarPosition;
    /**
     * Should the calendar stay open? - useful in conjunction with calendarPosition, not compatible with calendarPosition="modal"
     */
    keepCalendarOpen?: boolean;
    /**
     * A formatter to apply to the current date when displayMode is set to calendar.
     * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
     * - If date strings are used without this prop, strict ISO format will be assumed.
     * - This format will not be used if dates are passed as `Date` objects rather than strings.
     */
    displayFormatString?: string;
    /** a string used for a placeholder if a date isn't given and the displayMode is set to "calendar" */
    placeholder?: string;
    /** The character to show between the inputs, defaults to ":" */
    betweenInputs?: React.ReactNode;
}
/**
 * An input used for selecting a date. Supports the following input methods:
 * - Day/month/year selection via dropdowns.
 * - Date selection via a calendar view.
 * - Date input via the keyboard in day/month/year format.
 */
export declare const CalendarInput: (<TValue extends Dates.DateLike>(props: ICalendarInputProps<TValue> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLInputElement>) => ReturnType<React.FC>) & {
    defaultProps?: Partial<ICalendarInputProps<any>> | undefined;
};
export {};
