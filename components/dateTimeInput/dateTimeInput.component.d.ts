import * as React from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import { IBindingProps } from '../../form';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, NullOrUndefined } from '../../types';
import { ITextInputProps } from '../input';
export type IDatePickerConfig = Omit<ReactDatePickerProps, 'onChange' | 'value' | 'selectsRange' | 'selected' | 'startDate' | 'endDate' | 'disabled' | 'dateFormat' | 'locale'>;
export interface IDateTimeInputProps {
    /** Props to spread onto the React Datepicker component (see: https://reactdatepicker.com) */
    config?: IDatePickerConfig;
    /** The datetime format as a string (e.g. `dd/MM/yyyy HH:mm`) */
    format?: string;
    /** The locale to use (default `enGB`) */
    locale?: Locale;
    /** should the input validate automatically against the provided schema? Default: `true` */
    autoValidate?: boolean;
}
export interface IDateTimeInputRangeProps<TBind extends NullOrUndefined<string>> extends IDateTimeInputProps, Omit<ITextInputProps<TBind>, 'value' | 'onChange' | 'bind' | 'ref' | 'type'> {
    /** Whether to render a native date input (useful for mobile) */
    native?: false;
    /** Whether to select a single date or a date range */
    selectsRange: true;
    /** Prop for binding start date (range) to an Armstrong form binder (see forms documentation) */
    startBind?: IBindingProps<TBind>;
    /** current start date of input */
    startValue?: TBind;
    /** Prop for binding end date (range) to an Armstrong form binder (see forms documentation) */
    endBind?: IBindingProps<TBind>;
    /** Current end date of input */
    endValue?: TBind;
    /** Fired when the value changes */
    onChange?: (value: [TBind, TBind]) => void;
}
interface IDateOrTimeInputSinglePropsBase<TBind extends NullOrUndefined<string>> extends IDateTimeInputProps {
    /** Whether to render a native date input (useful for mobile) */
    native?: false;
    /** The display variant to use for the month/year selectors (defaults to 'centered', but 'dropdown' offers the most flexibility for picking dates a long way into the past/future.) */
    monthSelectVariant?: 'left-align' | 'centered' | 'dropdown';
    /** Whether to pick date, time or both. Defaults to `date` */
    mode?: 'date' | 'time';
    /** Whether to select a single date or a date range */
    selectsRange?: false;
    /** Prop for binding to an Armstrong form binder (see forms documentation) */
    bind?: IBindingProps<TBind>;
    /** The current value */
    value?: TBind;
    /** Fired when the value changes */
    onChange?: (value: TBind) => void;
}
export interface IDateOrTimeInputSingleProps<TBind extends NullOrUndefined<string>> extends IDateOrTimeInputSinglePropsBase<TBind>, Omit<ITextInputProps<TBind>, 'value' | 'onChange' | 'bind' | 'ref' | 'type' | 'leftOverlay'> {
    leftOverlay?: React.ReactNode | false;
}
export interface IDateAndTimeInputSingleProps<TBind extends NullOrUndefined<string>> extends Omit<IDateOrTimeInputSinglePropsBase<TBind>, 'mode' | 'config'>, Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref' | 'value' | 'onChange'>, Pick<ITextInputProps<TBind>, 'validationErrorMessages' | 'validationMode' | 'displaySize' | 'disabled' | 'hideIconOnStatus' | 'disableOnPending' | 'scrollValidationErrorsIntoView' | 'validationErrorsClassName' | 'labelClassName' | 'labelId' | 'label' | 'required' | 'requiredIndicator' | 'statusPosition' | 'error' | 'validationMode' | 'errorIcon'> {
    /** Whether to pick date, time or both. Defaults to `date` */
    mode: 'date-time';
    /** Optional element ref to apply to the time input. (the root ref attr will apply to the date input.) */
    timeInputRef?: React.Ref<HTMLInputElement>;
    /** Optional config to pass to the date input */
    dateInputConfig?: IDatePickerConfig;
    /** Optional config to pass to the time input */
    timeInputConfig?: IDatePickerConfig;
    /** Display format for the date input (defaults to dd/MM/yyyy) */
    dateInputDisplayFormat?: string;
    /** Display format for the time input (defaults to HH:mm) */
    timeInputDisplayFormat?: string;
    /** Optional additional props to pass to the date input */
    dateInputProps?: Pick<ITextInputProps<TBind>, 'inputClassName' | 'leftOverlay' | 'rightOverlay' | 'statusClassName'>;
    /** Optional additional props to pass to the time input */
    timeInputProps?: Pick<ITextInputProps<TBind>, 'inputClassName' | 'leftOverlay' | 'rightOverlay' | 'statusClassName'>;
}
export type IDateTimeInputSingleProps<TBind extends NullOrUndefined<string>> = IDateOrTimeInputSingleProps<TBind> | IDateAndTimeInputSingleProps<TBind>;
export interface IDateTimeInputNativeProps<TBind extends NullOrUndefined<string>> extends Omit<ITextInputProps<TBind>, 'type' | 'ref'>, Pick<IDateTimeInputSingleProps<TBind>, 'mode' | 'selectsRange'> {
    /** Whether to render a native date input (useful for mobile) */
    native: true;
}
export type DateTimeInputProps<TBind extends NullOrUndefined<string>> = IDateTimeInputRangeProps<TBind> | IDateTimeInputSingleProps<TBind> | IDateTimeInputNativeProps<TBind>;
export declare const SingleDateTimeInput: React.ForwardRefExoticComponent<IDateOrTimeInputSingleProps<string | null> & React.RefAttributes<HTMLInputElement>>;
export declare const RangeDateTimeInput: React.ForwardRefExoticComponent<IDateTimeInputRangeProps<string | null> & React.RefAttributes<HTMLInputElement>>;
export declare const SingleDateAndTimeInput: React.ForwardRefExoticComponent<IDateAndTimeInputSingleProps<string | null> & React.RefAttributes<HTMLInputElement>>;
/** third-party docs: https://reactdatepicker.com */
export declare const DateTimeInput: (<TValue extends NullOrUndefined<string>>(props: ArmstrongFCProps<DateTimeInputProps<TValue>, HTMLInputElement>) => ArmstrongFCReturn) & ArmstrongFCExtensions<DateTimeInputProps<string>>;
export {};
