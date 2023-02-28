import * as React from 'react';

import { Form, IListBoxOption, IListBoxProps } from '../..';
import { IBindingProps } from '../../hooks/form';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn } from '../../types';
import { ArmstrongId } from '../../types/core';
import { concat } from '../../utils/classNames';
import { DropdownItems } from '../dropdownItems';
import { getIconDefinition, Icon, IconSet, IIcon, isIconDefinition } from '../icon';
import { IconButton } from '../iconButton';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper';
import { Tag } from '../tag';

export interface IListBoxMultiProps<Id extends ArmstrongId, TSelectData = any>
  extends IInputWrapperProps,
    Pick<
      IListBoxProps<Id, TSelectData>,
      | 'options'
      | 'onSelectOption'
      | 'selectOverlayIcon'
      | 'placeholder'
      | 'wrapperClassName'
      | 'deleteButton'
      | 'noItemsText'
      | 'dropdownClassName'
      | 'closeOnScroll'
      | 'closeOnWindowBlur'
      | 'closeOnWindowClick'
      | 'closeOnBackgroundClick'
      | 'closeOnSelection'
      | 'alignment'
      | 'position'
    > {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id[]>;

  /** the icon overlaying the select element to the right, usually a down arrow */
  selectOverlayIcon?: IIcon<IconSet> | JSX.Element;

  /** the current value */
  value?: Id[];

  /** fired when the value changes */
  onValueChange?: (neWValue: Id[]) => void;

  /** if set, will render the result of this function instead of Tags, i.e. a string like "X selected" or a custom component */
  renderPreview?: (selectedOptions: IListBoxOption<Id, TSelectData>[]) => React.ReactChild;
}

/** A DOM recreation of a select element, which binds to an array of Id values */
export const ListBoxMulti = React.forwardRef(
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
      placeholder,
      deleteButton,
      statusPosition,
      scrollValidationErrorsIntoView,
      renderPreview,
      onValueChange,
      disableOnPending,
      wrapperClassName,
      noItemsText,
      dropdownClassName,
      closeOnScroll,
      closeOnWindowBlur,
      closeOnWindowClick,
      closeOnBackgroundClick,
      closeOnSelection,
      alignment,
      position,
    }: IListBoxMultiProps<Id, TSelectData>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const internalRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

    const [boundValue, setBoundValue, bindConfig] = Form.useBindingState(bind, {
      value,
      validationErrorMessages,
      validationErrorIcon,
      validationMode,
      onChange: onValueChange,
    });

    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const removeItem = React.useCallback(
      (id: ArmstrongId) => {
        setBoundValue?.(boundValue?.filter(item => item !== id) || []);
      },
      [boundValue, setBoundValue]
    );

    const onItemSelected = React.useCallback(
      (option: IListBoxOption<Id> | undefined) => {
        onSelectOption?.(option);

        if (option) {
          if (boundValue?.find(item => item === option.id)) {
            removeItem(option.id);
          } else {
            setBoundValue?.([...(boundValue || []), option.id]);
          }
        } else {
          setBoundValue?.([]);
        }
      },
      [onSelectOption, options, bind, boundValue, setBoundValue]
    );

    const currentOptions = React.useMemo(
      () =>
        boundValue?.map<IListBoxOption<Id, TSelectData>>(
          item =>
            options.find(option => option.id === item) || {
              id: item,
              name: item?.toString(),
            }
        ),
      [boundValue, options]
    );

    return (
      <DropdownItems
        isOpen={dropdownOpen}
        onOpenChange={setDropdownOpen}
        items={options.map(option => ({
          content: option.name ?? option.id?.toString(),
          id: option.id,
          leftIcon: option.leftIcon,
          rightIcon: option.rightIcon,
          group: option.group,
        }))}
        onItemSelected={item => onItemSelected(options.find(option => option.id === item)!)}
        allowKeyboardNavigation
        focusableWrapper
        currentValue={boundValue}
        childRootElementSelector=".arm-input-inner"
        closeOnSelection={closeOnSelection}
        className={concat('arm-listbox-multi-wrapper', wrapperClassName)}
        noItemsText={noItemsText}
        contentClassName={concat('arm-listbox-options', dropdownClassName)}
        closeOnScroll={closeOnScroll}
        closeOnWindowBlur={closeOnWindowBlur}
        closeOnWindowClick={closeOnWindowClick}
        closeOnBackgroundClick={closeOnBackgroundClick}
        stretch
        alignment={alignment}
        position={position}
      >
        <InputWrapper
          ref={internalRef}
          className={concat('arm-listbox-multi', className)}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          leftOverlay={leftOverlay}
          rightOverlay={rightOverlay}
          validationErrorMessages={bindConfig.validationErrorMessages}
          errorIcon={bindConfig.validationErrorIcon}
          validationMode={bindConfig.validationMode}
          statusPosition={statusPosition}
          pending={pending}
          disabled={disabled}
          disableOnPending={disableOnPending}
          scrollValidationErrorsIntoView={scrollValidationErrorsIntoView}
        >
          <div className="arm-listbox-multi-inner">
            <div className="arm-listbox-multi-content">
              {currentOptions?.length ? (
                <>
                  {renderPreview
                    ? renderPreview(currentOptions)
                    : currentOptions.map(tag => (
                        <Tag
                          content={tag.name ?? tag.id?.toString()}
                          leftIcon={tag.leftIcon}
                          rightIcon={tag.rightIcon}
                          key={tag.id}
                          onRemove={() => removeItem(tag.id)}
                        />
                      ))}
                </>
              ) : (
                placeholder && <p className="placeholder">{placeholder}</p>
              )}
            </div>
          </div>

          {selectOverlayIcon &&
            (isIconDefinition(selectOverlayIcon) ? (
              <Icon
                className="arm-listbox-multi-overlay-icon"
                icon={selectOverlayIcon.icon}
                iconSet={selectOverlayIcon.iconSet}
              />
            ) : (
              selectOverlayIcon
            ))}

          {deleteButton && !!boundValue?.length && (
            <IconButton
              type="button"
              className="arm-listbox-multi-delete"
              onClick={event => {
                onItemSelected(undefined);
                setDropdownOpen(false);
                event.stopPropagation();
              }}
              onMouseDown={event => event.stopPropagation()}
              onMouseUp={event => event.stopPropagation()}
              icon={getIconDefinition('Icomoon', 'cross2')}
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
  props: ArmstrongFCProps<IListBoxMultiProps<Id, TSelectData>, HTMLSelectElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IListBoxMultiProps<any, any>>;

ListBoxMulti.defaultProps = {
  selectOverlayIcon: getIconDefinition('Icomoon', 'arrow-down3'),
  deleteButton: true,
  closeOnSelection: false,
};

ListBoxMulti.displayName = 'ListBoxMulti';
