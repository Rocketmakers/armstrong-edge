import * as React from 'react';
import { IBindingProps } from '../../hooks/form';
import { Dates } from '../../utils';
import { ICalendarInputProps } from '../calendarInput';
import { IStatusWrapperProps } from '../statusWrapper';
import { ITimeInputProps } from '../timeInput';
declare type AdditionalCalendarInputProps<TValue extends Dates.DateLike> = Omit<ICalendarInputProps<TValue>, 'bind' | 'formatString' | 'locale'>;
declare type AdditionalTimeInputProps = Omit<ITimeInputProps, 'bind' | 'formatString' | 'locale'>;
export interface IDateTimeInputProps<TValue extends Dates.DateLike> extends IStatusWrapperProps {
    /** The binding for the input. */
    bind?: IBindingProps<TValue>;
    /** CSS className property */
    className?: string;
    /** Should the picker disallow user interaction */
    disabled?: boolean;
    /** Any additional props for the calendar input */
    additionalCalendarInputProps?: AdditionalCalendarInputProps<TValue>;
    /** Any additional props for the time input */
    additionalTimeInputProps?: AdditionalTimeInputProps;
    /** The value of the input */
    value?: TValue;
    /** Called when the value changes */
    onValueChange?: (value: TValue) => any;
    /**
     * A formatter to apply to all passed in date strings.
     * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
     * - If date strings are used without this prop, strict ISO format will be assumed.
     * - This format will not be used if dates are passed as `Date` objects rather than strings.
     */
    formatString?: string;
    /**
     * An optional locale to apply to all date formatting.
     * - Must be a date-fns compliant `Locale` object (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/Locale))
     * - If no locale is passed, `en-GB` will be used as the system default for all date formatting.
     */
    locale?: Dates.DateLocale;
}
export declare const DateTimeInput: (<TValue extends Dates.DateLike>(props: IDateTimeInputProps<TValue> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLInputElement>) => ReturnType<React.FC>) & {
    defaultProps?: Partial<IDateTimeInputProps<any>> | undefined;
};
export {};
