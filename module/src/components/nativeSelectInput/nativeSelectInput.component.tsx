import * as React from 'react';

import { Form } from '../..';
import { IBindingProps } from '../../hooks/form';
import { ArmstrongId } from '../../types';
import { ClassNames } from '../../utils/classNames';
import { Icon, IconSet, IconUtils, IIcon } from '../icon';
import { IconButton } from '../iconButton';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper';

export interface INativeSelectInputOption<Id extends ArmstrongId, TSelectData = any> {
  id: Id;
  name: string;
  data?: TSelectData;
  disabled?: boolean;
}

export interface INativeSelectInputProps<Id extends ArmstrongId, TSelectData = any>
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
    Omit<IInputWrapperProps, 'onClick'> {
  /** (IBindingProps) prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id>;

  /** (INativeSelectInputOption[]) The options to be shown in the input */
  options: INativeSelectInputOption<Id, TSelectData>[];

  /** ((option: INativeSelectInputOption) => void) Called on change to get the  */
  onSelectOption?: (option?: INativeSelectInputOption<Id>) => void;

  /** (icon) the icon overlaying the select element to the right, usually a down arrow */
  selectOverlayIcon?: IIcon<IconSet> | JSX.Element;

  /** (boolean) should allow deletion of value with a cross */
  deleteButton?: boolean;

  value?: Id;
}

/** A select input which takes an array of options */
export const NativeSelectInput = React.forwardRef(
  <Id extends ArmstrongId, TSelectData = any>(
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
      errorIcon: validationErrorIcon,
      validationErrorMessages,
      validationMode,
      selectOverlayIcon,
      pending,
      disabled,
      deleteButton,
      disableOnPending,
      ...nativeProps
    }: INativeSelectInputProps<Id, TSelectData>,
    ref: React.ForwardedRef<HTMLSelectElement>
  ) => {
    const internalRef = React.useRef<HTMLSelectElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

    const [boundValue, setBoundValue, bindConfig] = Form.useBindingTools(bind, { value, validationErrorMessages });

    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
          onChange(event);
        }

        const selectedOption = options.find((option) => option.id.toString() === event.currentTarget.value);

        if (selectedOption) {
          setBoundValue(selectedOption.id);
          onSelectOption?.(selectedOption);
        }
      },
      [onSelectOption, options, onChange, bind]
    );

    return (
      <InputWrapper
        className={ClassNames.concat('arm-native-select-input', className)}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        leftOverlay={leftOverlay}
        rightOverlay={rightOverlay}
        validationErrorMessages={bindConfig.validationErrorMessages}
        errorIcon={validationErrorIcon || bind?.formConfig?.validationErrorIcon}
        validationMode={validationMode || bind?.formConfig?.validationMode}
        pending={pending}
        disabled={disabled}
        disableOnPending={disableOnPending}
      >
        <div className="arm-native-select-input-inner">
          <select {...nativeProps} ref={internalRef} onChange={onChangeEvent} value={boundValue} disabled={disabled}>
            {options.map((option) => (
              <option key={option.id} value={option.id} disabled={option.disabled}>
                {option.name}
              </option>
            ))}
          </select>
          {selectOverlayIcon &&
            (IconUtils.isIconDefinition(selectOverlayIcon) ? (
              <Icon className="arm-native-select-input-overlay-icon" icon={selectOverlayIcon.icon} iconSet={selectOverlayIcon.iconSet} />
            ) : (
              selectOverlayIcon
            ))}
        </div>
        {deleteButton && boundValue && (
          <IconButton
            className="arm-select-input-delete"
            onClick={(event) => {
              onSelectOption?.(undefined);
              bind?.setValue?.(undefined!);
              event.stopPropagation();
            }}
            icon={IconUtils.getIconDefinition('Icomoon', 'cross2')}
            iconOnly
          />
        )}
      </InputWrapper>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId, TSelectData = any>(
  props: React.PropsWithRef<INativeSelectInputProps<Id, TSelectData>> & React.RefAttributes<HTMLSelectElement>
) => ReturnType<React.FC>) & { defaultProps?: Partial<INativeSelectInputProps<any, any>> };

NativeSelectInput.defaultProps = {
  selectOverlayIcon: IconUtils.getIconDefinition('Icomoon', 'arrow-down3'),
};
