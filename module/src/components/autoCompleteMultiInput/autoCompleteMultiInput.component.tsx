// import React from 'react';

// import { Form } from '../..';
// import { ClassNames } from '../../utils/classNames';
// import { DropdownItems } from '../dropdownItems';
// import { ITagInputProps, TagInput } from '../tagInput';

// // internally, the autocompleteinput Multi binds two values - the actual content of the text input, and the selected value
// // if allowFreeText is set to true, these two values will be the same, otherwise the value is only bound
// // will use bindConfig.fromData to parse the data in options allowing for a pattern where the displayed stuff is different to the bound data

// export interface IAutoCompleteMultiInputProps extends Omit<ITagInputProps, 'type' | 'onChange' | 'value' | 'disableOnPending' | 'onTextInputChange'> {
//   /** (string[]) The options to render when the input is focused - use bindConfig.fromData to parse theseß */
//   options?: string[];

//   /** ((string) => void) called when the user inputs into the  */
//   onTextInputChange?: (value: string) => void;

//   /** (string) the value to use for the text input */
//   textInputValue?: string;

//   /** ((string) => void) called when an option is selected  */
//   onChange?: (value: string[]) => void;

//   /** (string) the currently selected option */
//   value?: string[];

//   /** (string) selector for the element to portal the options into */
//   optionsRootElementSelector?: string;

//   /** (boolean) bind the value of the input, rather than just when an item is selected */
//   allowFreeText?: boolean;

//   /** (boolean | (option: string, textInputValue: string) => boolean) whether to filter the available options based on the string in the text input, optionally takes the callback used to do the filtering */
//   filterOptions?: boolean | ((option: string, textInputValue: string) => boolean);

//   /** (boolean) Whether the user should be able to use their keyboard to navigate through the dropdown while focused on something within children like an input */
//   allowKeyboardNavigationSelection?: boolean;
// }

// /** An input which displays some given options below the and allows the user to select from those options */
// export const AutoCompleteInputMulti = React.forwardRef<HTMLInputElement, IAutoCompleteInputMultiProps>(
//   (
//     {
//       options,
//       validationErrorIcon,
//       validationMode,
//       validationErrorMessages,
//       bind,
//       className,
//       error,
//       pending,
//       optionsRootElementSelector,
//       onTextInputChange,
//       textInputValue,
//       filterOptions,
//       onChange,
//       value,
//       allowFreeText,
//       allowKeyboardNavigationSelection,
//       ...textInputProps
//     },
//     ref
//   ) => {
//     const [boundValue, setBoundValue, { getFormattedValueFromData, myValidationErrorMessages }] = Form.useBindingTools(bind, {
//       value,
//       onChange,
//       validationErrorMessages,
//     });

//     // the value before any formatting
//     const currentValue = bind?.value || value;

//     const [textInputCurrentValue, setTextInputCurrentValue] = React.useState(textInputValue || '');

//     const [optionsOpen, setOptionsOpen] = React.useState(false);

//     React.useLayoutEffect(() => {
//       onTextInputChange?.(textInputCurrentValue);
//     }, [textInputCurrentValue]);

//     const filteredOptions = React.useMemo(() => {
//       if (filterOptions && options) {
//         if (filterOptions === true) {
//           return options.filter((option) => getFormattedValueFromData([option])[0]!.indexOf(textInputCurrentValue) > -1);
//         }
//         return options.filter((option) => filterOptions(option, textInputCurrentValue));
//       }
//       return options || [];
//     }, [filterOptions, JSON.stringify(options), textInputCurrentValue]);

//     const setInputValue = React.useCallback(
//       (newValue: string) => {
//         setTextInputCurrentValue?.(newValue);
//         onTextInputChange?.(newValue);
//       },
//       [setTextInputCurrentValue, onTextInputChange]
//     );

//     /** when the user clicks on an option, change the value in the textInput */
//     const onSelectOption = React.useCallback(
//       (option: string) => {
//         setInputValue(getFormattedValueFromData(option)!);
//         setOptionsOpen(false);

//         // if free text is allowed, the onChange triggered by the textinput's change event
//         // otherwise, it is triggered it here
//         if (!allowFreeText) {
//           setBoundValue(option);
//         }
//       },
//       [bind, getFormattedValueFromData, allowFreeText]
//     );

//     const onTextInputChangeEvent = React.useCallback(
//       (event: React.ChangeEvent<HTMLInputElement>) => {
//         const newValue = event.currentTarget.value || '';
//         setInputValue(newValue);

//         // if allow free text, bind exact value on every change
//         // if inputted text is an option, bind that
//         if (allowFreeText) {
//           setBoundValue(newValue);
//         } else {
//           const inputtedOption = options?.find((option) => getFormattedValueFromData(option) === newValue);

//           if (inputtedOption) {
//             setBoundValue(inputtedOption);
//           }
//         }
//       },
//       [setTextInputCurrentValue, getFormattedValueFromData]
//     );

//     const onTextInputBlur = React.useCallback(() => {
//       if (!allowFreeText) {
//         setTextInputCurrentValue(getFormattedValueFromData(bind?.value) || value || '');
//       }
//     }, [allowFreeText, getFormattedValueFromData, bind?.value]);

//     return (
//       <>
//         <div className={ClassNames.concat('arm-input', 'arm-autocomplete-input', className)} data-error={error} data-pending={pending}>
//           <DropdownItems
//             contentClassName="arm-auto-complete-options"
//             // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
//             items={filteredOptions.map((option) => ({ content: getFormattedValueFromData([option])?.[0]!, id: option }))}
//             isOpen={optionsOpen && !!options?.length}
//             onOpenChange={setOptionsOpen}
//             rootElementSelector={optionsRootElementSelector}
//             onItemSelected={onSelectOption}
//             allowKeyboardNavigation={allowKeyboardNavigationSelection}
//             currentValue={currentValue || []}
//             openWhenClickInside
//             openWhenFocusInside
//           >
//             <TagInput
//               {...textInputProps}
//               pending={pending}
//               ref={ref}
//               error={error}
//               value={boundValue}
//               onChange={(event) => setTextInputCurrentValue}
//               onTextInputChange={(event) => setTextInputCurrentValue(event.currentTarget.value)}
//               onBlur={onTextInputBlur}
//               onKeyDown={() => setOptionsOpen(true)}
//               validationMode={validationMode}
//               onFocus={() => setOptionsOpen(true)}
//               validationErrorMessages={myValidationErrorMessages}
//               validationErrorIcon={validationErrorIcon}
//               disableOnPending={false}
//             />
//           </DropdownItems>
//         </div>
//       </>
//     );
//   }
// );

// AutoCompleteInputMulti.defaultProps = {
//   validationMode: 'both',
//   allowKeyboardNavigationSelection: true,
//   filterOptions: true,
// };
