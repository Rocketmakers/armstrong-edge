import * as React from 'react';

import { Form } from '../..';
import { FormValidationMode, IBindingProps } from '../../hooks/form';
import { ArmstrongId } from '../../types';
import { ClassNames } from '../../utils/classNames';
import { DropdownItems, IDropdownItem } from '../dropdownItems';
import { Icon, IconSet, IconUtils, IIcon } from '../icon';
import { IconButton } from '../iconButton';
import { IIconWrapperProps } from '../iconWrapper';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper';
import { ISelectOption } from '../select';

export interface IListBoxOption<Id extends ArmstrongId, TSelectData = any>
  extends IIconWrapperProps<IconSet, IconSet>,
    ISelectOption<Id, TSelectData>,
    Pick<IDropdownItem, 'group'> {}

/** A DOM recreation of a select element */
export interface IListBoxProps<Id extends ArmstrongId, TSelectData = any> extends IInputWrapperProps {
  /** (IBindingProps) prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id>;

  /** (IListBoxOption[]) The options to be shown in the input */
  options: IListBoxOption<Id, TSelectData>[];

  /** ((option: IListBoxOption) => void) Called on change to get the  */
  onSelectOption?: (option?: IListBoxOption<Id>) => void;

  /** (string[]) array of validation errors to render */
  validationErrorMessages?: string[];

  /** (icon|message|both) how to render the validation errors */
  validationMode?: FormValidationMode;

  /** (icon) the icon overlaying the select element to the right, usually a down arrow */
  selectOverlayIcon?: IIcon<IconSet> | JSX.Element;

  /** (ArmstrongId) the current value */
  value?: Id;

  /** (string) the string to show when there is no value */
  placeholder?: string;

  /** (boolean) should allow deletion of value with a cross */
  deleteButton?: boolean;
}

/** A select input which takes an array of options */
export const ListBox = React.forwardRef(
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
      value,
      errorIcon: validationErrorIcon,
      validationErrorMessages,
      validationMode,
      selectOverlayIcon,
      pending,
      disabled,
      statusPosition,
      placeholder,
      deleteButton,
      disableOnPending,
      scrollValidationErrorsIntoView,
    }: IListBoxProps<Id, TSelectData>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const internalRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

    const [boundValue, setBoundValue, bindConfig] = Form.useBindingTools(bind, {
      value,
      validationErrorMessages,
      validationErrorIcon,
      validationMode,
    });

    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const onChangeEvent = React.useCallback(
      (option: IListBoxOption<Id> | undefined) => {
        onSelectOption?.(option);
        setBoundValue(option?.id ?? undefined!);
      },
      [onSelectOption, options, bind]
    );

    const currentOptionText = React.useMemo(() => options.find((option) => option.id === boundValue)?.name ?? boundValue, [boundValue, options]);

    return (
      <DropdownItems
        isOpen={dropdownOpen}
        onOpenChange={setDropdownOpen}
        items={options.map((option) => ({
          content: option.name ?? bindConfig.getFormattedValueFromData(option.id)?.toString() ?? option.id.toString(),
          id: option.id,
          leftIcon: option.leftIcon,
          rightIcon: option.rightIcon,
          group: option.group,
        }))}
        onItemSelected={(item) => onChangeEvent(options.find((option) => option.id === item)!)}
        allowKeyboardNavigation
        focusableWrapper
        currentValue={[boundValue!]}
        childRootElementSelector=".arm-input-inner"
      >
        <InputWrapper
          ref={internalRef}
          className={ClassNames.concat('arm-listbox', className)}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          leftOverlay={leftOverlay}
          rightOverlay={rightOverlay}
          validationErrorMessages={bindConfig.validationErrorMessages}
          errorIcon={bindConfig.validationErrorIcon}
          validationMode={bindConfig.validationMode}
          pending={pending}
          disabled={disabled}
          disableOnPending={disableOnPending}
          statusPosition={statusPosition}
          scrollValidationErrorsIntoView={scrollValidationErrorsIntoView}
        >
          <div className="arm-listbox-inner">
            <div className="arm-listbox-content">
              {currentOptionText ? <p>{currentOptionText}</p> : placeholder && <p className="placeholder">{placeholder}</p>}
            </div>
            {selectOverlayIcon &&
              (IconUtils.isIconDefinition(selectOverlayIcon) ? (
                <Icon className="arm-listbox-overlay-icon" icon={selectOverlayIcon.icon} iconSet={selectOverlayIcon.iconSet} />
              ) : (
                selectOverlayIcon
              ))}
          </div>

          {deleteButton && boundValue && (
            <IconButton
              className="arm-listbox-delete"
              onClick={(event) => {
                onChangeEvent(undefined);
                setDropdownOpen(false);
                event.stopPropagation();
              }}
              onMouseDown={(event) => event.stopPropagation()}
              onMouseUp={(event) => event.stopPropagation()}
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
) as (<Id extends ArmstrongId, TSelectData = any>(
  props: React.PropsWithChildren<IListBoxProps<Id, TSelectData>> & React.RefAttributes<HTMLSelectElement>
) => ReturnType<React.FC>) & { defaultProps?: Partial<IListBoxProps<any, any>> };

ListBox.defaultProps = {
  selectOverlayIcon: IconUtils.getIconDefinition('Icomoon', 'arrow-down3'),
  deleteButton: true,
};
