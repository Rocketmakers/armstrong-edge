import * as React from 'react';
import { DisplaySize } from '../../types';
import type { ButtonDisplayStyle } from '../button';
import type { ToastPosition } from '../toast';
/**
 * Armstrong global config type
 */
export interface IArmstrongConfig {
    /** overrides the error messaging and icon display used in the error validation display */
    validationMode?: 'icon' | 'message' | 'both';
    /** which size variant to use for buttons globally by default */
    buttonDisplaySize?: DisplaySize;
    /** which style variant to use for buttons globally by default */
    buttonDisplayStyle?: ButtonDisplayStyle;
    /** which pending position to use for buttons globally by default */
    buttonPendingPosition?: 'left' | 'right';
    /** which side of the button to show the spinner/error icon on - defaults to 'right' */
    inputStatusPosition?: 'left' | 'right';
    /** which size variant to use for inputs globally by default */
    inputDisplaySize?: DisplaySize;
    /** hide the icon on the given side if there is an active status - defaults to true */
    hideInputErrorIconOnStatus?: boolean;
    /** when pending is true should also disable the input */
    disableControlOnPending?: boolean;
    /** will scroll the validation errors into view when the length of validationErrors changes */
    scrollValidationErrorsIntoView?: boolean;
    /** Symbol to use as the required indicator on the label, defaults to "*" */
    requiredIndicator?: React.ReactNode;
    /** the icon to use for the validation errors */
    validationErrorIcon?: JSX.Element;
    /** the icon to use for the spinner */
    spinnerIcon?: JSX.Element;
    /** the element to portal global overlays to (like toast and modal), defaults to the body element */
    globalPortalTo?: Element;
    /** the icon to use for the dialog close button */
    dialogCloseButtonIcon?: JSX.Element | false;
    /** how long ot show toast messages for in ms, defaults to 5000 */
    toastDuration?: number;
    /** where to position the toast, defaults to "bottom-right" */
    toastPosition?: ToastPosition;
    /** the icon to use for the dialog close button */
    toastCloseButtonIcon?: JSX.Element | false;
    /** A custom JSX.Element for the checked indicator. (Optional) */
    checkboxCustomIndicator?: JSX.Element;
    /** A custom JSX.Element for the indeterminate state indicator. (Optional) */
    checkboxCustomIndeterminateIndicator?: JSX.Element;
    /** How long in ms to wait after hover before displaying the tooltip, defaults to 700 */
    tooltipDelay?: number;
    /** Show an arrow on tooltips pointing to the element, defaults to false */
    tooltipShowArrow?: boolean;
    /** Which side to render the tooltip, defaults to "top" */
    tooltipSide?: 'top' | 'right' | 'bottom' | 'left';
    /** should the inputs validate automatically against the provided schema? Default: `true` */
    autoValidate?: boolean;
}
type ArmstrongConfigDefaults = Required<Omit<IArmstrongConfig, 'globalPortalTo'>> & Pick<IArmstrongConfig, 'globalPortalTo'>;
/**
 * Configuration for Armstrong
 * - Allows for certain frequently repeated properties to be set at a global level
 */
export declare const ArmstrongConfigProvider: React.FC<React.PropsWithChildren<IArmstrongConfig>>;
/**
 * Used to access settings which can be stored globally as Armstrong config
 * WARNING: For internal Armstrong use only
 * @param localOverrides Optional overrides for config properties, these will take precedence over anything set globally.
 * @returns A config dictionary with a guaranteed entry for every key in priority order: {...system, ...global, ...local}
 */
export declare const useArmstrongConfig: (localOverrides?: IArmstrongConfig) => ArmstrongConfigDefaults;
export {};
