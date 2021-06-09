import * as React from 'react';

import { Form, IListBoxOption } from '../..';
import { FormValidationMode, IBindingProps } from '../../hooks/form';
import { ArmstrongId } from '../../types';
import { ClassNames } from '../../utils/classNames';
import { DropdownItems } from '../dropdownItems';
import { Icon, IconSet, IconUtils, IIcon } from '../icon';
import { IconButton } from '../iconButton';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper';
import { Tag } from '../tag';

export interface IListBoxMultiProps<Id extends ArmstrongId, TSelectData = any> extends IInputWrapperProps {
  /** (IBindingProps) prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id[]>;

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
  value?: Id[];

  /** ((newValue: ArmstrongId[]) => void) fired when the value changes */
  onValueChange?: (neWValue: Id[]) => void;

  /** (string) the string to show when there is no value */
  placeholder?: string;

  /** (boolean) should allow deletion of value with a cross */
  deleteButton?: boolean;

  /** (boolean) if set, will render a string like "X selected" instead of the selected values as tags */
  renderPreview?: (selectedOptions: IListBoxOption<Id, TSelectData>[]) => React.ReactChild;
}

/** A select input which takes an array of options */
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
      renderPreview,
      onValueChange,
      disableOnPending,
    }: IListBoxMultiProps<Id, TSelectData>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const internalRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

    const [boundValue, setBoundValue, bindConfig] = Form.useBindingTools(bind, {
      value,
      validationErrorMessages,
      validationErrorIcon,
      validationMode,
      onChange: onValueChange,
    });

    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const removeItem = React.useCallback(
      (id: ArmstrongId) => {
        setBoundValue(boundValue?.filter((item) => item !== id) || []);
      },
      [boundValue, setBoundValue]
    );

    const onItemSelected = React.useCallback(
      (option: IListBoxOption<Id> | undefined) => {
        onSelectOption?.(option);

        if (option) {
          if (boundValue?.find((item) => item === option.id)) {
            removeItem(option.id);
          } else {
            setBoundValue([...(boundValue || []), option.id]);
          }
        } else {
          setBoundValue([]);
        }
      },
      [onSelectOption, options, bind, boundValue, setBoundValue]
    );

    const currentOptions = React.useMemo(
      () =>
        boundValue?.map<IListBoxOption<Id, TSelectData>>(
          (item) => options.find((option) => option.id === item) || { id: item, name: item.toString() }
        ),
      [boundValue, options]
    );

    return (
      <DropdownItems
        isOpen={dropdownOpen}
        onOpenChange={setDropdownOpen}
        items={options.map((option) => ({
          content: option.name ?? option.id.toString(),
          id: option.id,
          leftIcon: option.leftIcon,
          rightIcon: option.rightIcon,
          group: option.group,
        }))}
        onItemSelected={(item) => onItemSelected(options.find((option) => option.id === item)!)}
        allowKeyboardNavigation
        focusableWrapper
        currentValue={boundValue}
        childRootElementSelector=".arm-input-inner"
        closeOnSelection={false}
      >
        <InputWrapper
          ref={internalRef}
          className={ClassNames.concat('arm-listbox-multi', className)}
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
        >
          <div className="arm-listbox-multi-inner">
            <div className="arm-listbox-multi-content">
              {currentOptions?.length ? (
                <>
                  {renderPreview
                    ? renderPreview(currentOptions)
                    : currentOptions.map((tag) => (
                        <Tag
                          content={tag.name ?? tag.id.toString()}
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
            (IconUtils.isIconDefinition(selectOverlayIcon) ? (
              <Icon className="arm-listbox-multi-overlay-icon" icon={selectOverlayIcon.icon} iconSet={selectOverlayIcon.iconSet} />
            ) : (
              selectOverlayIcon
            ))}

          {deleteButton && !!boundValue?.length && (
            <IconButton
              className="arm-listbox-multi-delete"
              onClick={(event) => {
                onItemSelected(undefined);
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
  props: React.PropsWithChildren<IListBoxMultiProps<Id, TSelectData>> & React.RefAttributes<HTMLSelectElement>
) => ReturnType<React.FC>) & { defaultProps?: Partial<IListBoxMultiProps<any, any>> };

ListBoxMulti.defaultProps = {
  selectOverlayIcon: IconUtils.getIconDefinition('Icomoon', 'arrow-down3'),
  deleteButton: true,
};
