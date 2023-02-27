import * as React from 'react';

import { Form } from '../..';
import { IBindingProps } from '../../hooks/form';
import { ArmstrongId, IArmstrongExtendedOption } from '../../types';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn } from '../../types/reactExtensions';
import { concat } from '../../utils/classNames';
import { DropdownItems, IDropdownItemsProps } from '../dropdownItems';
import { Icon, IconSet, IconUtils, IIcon } from '../icon';
import { IconButton } from '../iconButton';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper';
import { ISelectOption } from '../select';

export interface IListBoxOption<Id extends ArmstrongId, TSelectData = any>
  extends IArmstrongExtendedOption<
      Id,
      Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLLIElement>, HTMLLIElement>, 'onChange' | 'ref'>
    >,
    Pick<ISelectOption<Id, TSelectData>, 'data'> {}

/** A DOM recreation of a select element */
export interface IListBoxProps<Id extends ArmstrongId, TSelectData = any>
  extends IInputWrapperProps,
    Pick<
      IDropdownItemsProps,
      | 'noItemsText'
      | 'closeOnScroll'
      | 'closeOnWindowBlur'
      | 'closeOnWindowClick'
      | 'closeOnBackgroundClick'
      | 'closeOnSelection'
      | 'alignment'
      | 'position'
    > {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id>;

  /** The options to be shown in the input */
  options: IListBoxOption<Id, TSelectData>[];

  /** Called on change to get the  */
  onSelectOption?: (option?: IListBoxOption<Id>) => void;

  /** the icon overlaying the select element to the right, usually a down arrow */
  selectOverlayIcon?: IIcon<IconSet> | JSX.Element;

  /** the current value */
  value?: Id;

  /** the string to show when there is no value */
  placeholder?: string;

  /** should allow deletion of value with a cross */
  deleteButton?: boolean | IIcon<IconSet>;

  /** ClassName for the wrapper element */
  wrapperClassName?: string;

  /** the className given to the content of the dropdown */
  dropdownClassName?: string;
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
      wrapperClassName,
      noItemsText,
      dropdownClassName,
      closeOnBackgroundClick,
      closeOnScroll,
      closeOnWindowBlur,
      closeOnWindowClick,
      closeOnSelection,
      alignment,
      position,
    }: IListBoxProps<Id, TSelectData>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const internalRef = React.useRef<HTMLDivElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

    const [boundValue, setBoundValue, bindConfig] = Form.useBindingState(bind, {
      value,
      validationErrorMessages,
      validationErrorIcon,
      validationMode,
    });

    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const onChangeEvent = React.useCallback(
      (option: IListBoxOption<Id> | undefined) => {
        onSelectOption?.(option);
        setBoundValue?.(option?.id ?? undefined!);
      },
      [onSelectOption, options, bind]
    );

    const currentOptionText = React.useMemo(
      () => options.find(option => option.id === boundValue)?.name ?? boundValue,
      [boundValue, options]
    );

    const onClickDelete = React.useCallback(
      (event: React.MouseEvent) => {
        onChangeEvent(undefined);
        setDropdownOpen(false);
        event.stopPropagation();
      },
      [setDropdownOpen, onChangeEvent]
    );

    return (
      <DropdownItems
        isOpen={dropdownOpen}
        onOpenChange={setDropdownOpen}
        items={options.map(option => ({
          content: option.name ?? bindConfig.getFormattedValueFromData(option.id)?.toString() ?? option.id?.toString(),
          id: option.id,
          leftIcon: option.leftIcon,
          rightIcon: option.rightIcon,
          group: option.group,
          htmlProps: option.htmlProps,
        }))}
        onItemSelected={item => onChangeEvent(options.find(option => option.id === item)!)}
        allowKeyboardNavigation
        focusableWrapper
        currentValue={[boundValue!]}
        childRootElementSelector=".arm-input-inner"
        className={concat('arm-listbox-wrapper', wrapperClassName)}
        noItemsText={noItemsText}
        contentClassName={concat('arm-listbox-options', dropdownClassName)}
        closeOnBackgroundClick={closeOnBackgroundClick}
        closeOnScroll={closeOnScroll}
        closeOnWindowBlur={closeOnWindowBlur}
        closeOnWindowClick={closeOnWindowClick}
        closeOnSelection={closeOnSelection}
        stretch
        alignment={alignment}
        position={position}
      >
        <InputWrapper
          ref={internalRef}
          className={concat('arm-listbox', className)}
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
              {currentOptionText ? (
                <p>{currentOptionText}</p>
              ) : (
                placeholder && <p className="placeholder">{placeholder}</p>
              )}
            </div>
            {selectOverlayIcon &&
              (IconUtils.isIconDefinition(selectOverlayIcon) ? (
                <Icon
                  className="arm-listbox-overlay-icon"
                  icon={selectOverlayIcon.icon}
                  iconSet={selectOverlayIcon.iconSet}
                />
              ) : (
                selectOverlayIcon
              ))}
          </div>

          {deleteButton && boundValue && (
            <IconButton
              type="button"
              className="arm-listbox-delete"
              onClick={onClickDelete}
              icon={typeof deleteButton === 'boolean' ? IconUtils.getIconDefinition('Icomoon', 'cross2') : deleteButton}
              minimalStyle
            />
          )}
        </InputWrapper>
      </DropdownItems>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId, TSelectData = any>(
  props: ArmstrongFCProps<IListBoxProps<Id, TSelectData>, HTMLDivElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IListBoxProps<any, any>>;

ListBox.defaultProps = {
  selectOverlayIcon: IconUtils.getIconDefinition('Icomoon', 'arrow-down3'),
  deleteButton: true,
};
