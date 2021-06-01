import * as React from 'react';

import { FormValidationMode, IBindingProps } from '../../hooks/form';
import { ClassNames } from '../../utils/classNames';
import { DropdownItems } from '../dropdownItems';
import { Icon, IconSet, IconUtils, IIcon, IIconProps } from '../icon';
import { IconButton } from '../iconButton';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper';
import { useMyValidationErrorMessages } from '../validationErrors';

export interface ISelectInputOption<TSelectId extends string, TSelectData = any> {
  id: TSelectId;
  name: string;
  icon?: IIconProps<IconSet>;
  data?: TSelectData;
}

export interface ISelectInputProps<TSelectId extends string, TSelectData = any> extends IInputWrapperProps {
  /** (IBindingProps) prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TSelectId>;

  /** (ISelectInputOption[]) The options to be shown in the input */
  options: ISelectInputOption<TSelectId, TSelectData>[];

  /** ((option: ISelectInputOption) => void) Called on change to get the  */
  onSelectOption?: (option?: ISelectInputOption<TSelectId>) => void;

  /** (string[]) array of validation errors to render */
  validationErrorMessages?: string[];

  /** (icon|message|both) how to render the validation errors */
  validationMode?: FormValidationMode;

  /** (icon) the icon overlaying the select element to the right, usually a down arrow */
  selectOverlayIcon?: IIcon<IconSet> | JSX.Element;

  /** (string) the current value */
  value?: string;

  /** (string) the string to show when there is no value */
  placeholder?: string;

  /** (boolean) should allow deletion of value with a cross */
  deleteButton?: boolean;
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
      value,
      validationErrorIcon,
      validationErrorMessages,
      validationMode,
      selectOverlayIcon,
      pending,
      disabled,
      placeholder,
      deleteButton,
      disableOnPending,
    }: ISelectInputProps<TSelectId, TSelectData>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const internalRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const onChangeEvent = React.useCallback(
      (option: ISelectInputOption<TSelectId> | undefined) => {
        onSelectOption?.(option);
        if (bind) {
          const selectedOptionId = bind.bindConfig?.format?.toData?.(option?.id) || option?.id;
          bind.setValue(selectedOptionId!);
        }
      },
      [onSelectOption, options, bind]
    );

    const currentValue = value ?? bind?.bindConfig?.format?.fromData?.(bind?.value) ?? bind?.value ?? '';

    const allValidationErrorMessages = useMyValidationErrorMessages(bind, validationErrorMessages);

    return (
      <DropdownItems
        isOpen={dropdownOpen}
        onOpenChange={setDropdownOpen}
        items={options.map((option) => ({ content: option.id, id: option.id, icon: option.icon }))}
        onItemSelected={(item) => onChangeEvent(options.find((option) => option.id === item)!)}
        allowKeyboardNavigation
        focusableWrapper
        currentValue={[currentValue]}
      >
        <InputWrapper
          ref={internalRef}
          className={ClassNames.concat('arm-select-input', className)}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          leftOverlay={leftOverlay}
          rightOverlay={rightOverlay}
          validationErrorMessages={allValidationErrorMessages}
          validationErrorIcon={validationErrorIcon || bind?.formConfig?.validationErrorIcon}
          validationMode={validationMode || bind?.formConfig?.validationMode}
          pending={pending}
          disabled={disabled}
          disableOnPending={disableOnPending}
        >
          <div className="arm-select-input-inner">
            <div className="arm-select-input-content">
              {currentValue ? <p>{currentValue}</p> : placeholder && <p className="placeholder">{placeholder}</p>}
            </div>
            {selectOverlayIcon &&
              (IconUtils.isIconDefinition(selectOverlayIcon) ? (
                <Icon className="arm-select-input-overlay-icon" icon={selectOverlayIcon.icon} iconSet={selectOverlayIcon.iconSet} />
              ) : (
                selectOverlayIcon
              ))}
          </div>

          {deleteButton && currentValue && (
            <IconButton
              onMouseDown={(event) => event.stopPropagation()}
              onMouseUp={(event) => event.stopPropagation()}
              className="arm-select-input-delete"
              onClick={(event) => {
                onChangeEvent(undefined);
                setDropdownOpen(false);
                event.stopPropagation();
              }}
              icon={IconUtils.getIconDefinition('Icomoon', 'cross2')}
              iconOnly
            />
          )}
        </InputWrapper>
      </DropdownItems>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TSelectId extends string, TSelectData = any>(
  props: React.PropsWithRef<ISelectInputProps<TSelectId, TSelectData>> & React.RefAttributes<HTMLSelectElement>
) => ReturnType<React.FC>) & { defaultProps?: Partial<ISelectInputProps<any, any>> };

SelectInput.defaultProps = {
  selectOverlayIcon: IconUtils.getIconDefinition('Icomoon', 'arrow-down3'),
  deleteButton: true,
};
