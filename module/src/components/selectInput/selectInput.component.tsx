import * as React from 'react';

import { FormValidationMode, IBindingProps } from '../../hooks/form';
import { ClassNames } from '../../utils/classNames';
import { Icon, IconSet, IconUtils, IIcon } from '../icon';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper';
import { useMyValidationErrorMessages } from '../validationErrors';

export interface ISelectInputOption<TSelectId extends string, TSelectData = any> {
  id: TSelectId;
  name: string;
  data?: TSelectData;
}

export interface ISelectInputProps<TSelectId extends string, TSelectData = any>
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
    IInputWrapperProps {
  /** (IBindingProps) prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TSelectId>;

  /** (ISelectInputOption[]) The options to be shown in the input */
  options: ISelectInputOption<TSelectId, TSelectData>[];

  /** ((option: ISelectInputOption) => void) Called on change to get the  */
  onSelectOption?: (option: ISelectInputOption<TSelectId>) => void;

  /** (string[]) array of validation errors to render */
  validationErrorMessages?: string[];

  /** (icon|message|both) how to render the validation errors */
  validationMode?: FormValidationMode;

  /** (icon) the icon overlaying the select element to the right, usually a down arrow */
  selectOverlayIcon?: IIcon<IconSet>;
}

/** A select input which takes an array of options */
export const SelectInput = React.forwardRef(
  <TSelectId extends string, TSelectData = any>(
    {
      bind,
      options,
      leftIcon,
      leftOverlay,
      rightIcon,
      rightOverlay,
      className,
      onSelectOption,
      onChange,
      value,
      validationErrorIcon,
      validationErrorMessages,
      validationMode,
      selectOverlayIcon,
      ...nativeProps
    }: ISelectInputProps<TSelectId, TSelectData>,
    ref: React.ForwardedRef<HTMLSelectElement>
  ) => {
    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
          onChange(event);
        }

        const selectedOption = options.find((option) => option.id === event.currentTarget.value);

        if (selectedOption) {
          if (onSelectOption) {
            onSelectOption(selectedOption);
          }
          if (bind) {
            const selectedOptionId = bind.bindConfig?.format?.forData?.(selectedOption.id) || selectedOption.id;
            bind.setValue(selectedOptionId);
          }
        }
      },
      [onSelectOption, options, onChange, bind]
    );

    const allValidationErrorMessages = useMyValidationErrorMessages(bind, validationErrorMessages);

    return (
      <InputWrapper
        className={ClassNames.concat('arm-select-input', className)}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        leftOverlay={leftOverlay}
        rightOverlay={rightOverlay}
        validationErrorMessages={allValidationErrorMessages}
        validationErrorIcon={validationErrorIcon || bind?.formConfig?.validationErrorIcon}
        validationMode={validationMode || bind?.formConfig?.validationMode}
      >
        <div className="arm-select-input-inner">
          <select {...nativeProps} ref={ref} onChange={onChangeEvent} value={bind?.value ?? value ?? ''}>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
          {selectOverlayIcon && <Icon className="arm-select-input-overlay-icon" icon={selectOverlayIcon.icon} iconSet={selectOverlayIcon.iconSet} />}
        </div>
      </InputWrapper>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS
) as (<TSelectId extends string, TSelectData = any>(
  props: ISelectInputProps<TSelectId, TSelectData>,
  ref: React.ForwardedRef<HTMLSelectElement>
) => ReturnType<React.FC>) & { defaultProps?: Partial<ISelectInputProps<any, any>> };

SelectInput.defaultProps = {
  selectOverlayIcon: IconUtils.getIconDefinition('Icomoon', 'arrow-down3'),
};
