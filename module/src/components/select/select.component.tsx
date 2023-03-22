import * as React from 'react';
import { Button, Form } from '../..';
import { IBindingProps } from '../../hooks/form';
import {
  ArmstrongFCExtensions,
  ArmstrongFCReturn,
  ArmstrongVFCProps,
} from '../../types';
import { ArmstrongId } from '../../types/core';
import { IArmstrongOption } from '../../types/options';
import { concat } from '../../utils/classNames';
import { Icon, IconSet, IconUtils, IIcon } from '../icon';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper';

export interface ISelectOption<Id extends ArmstrongId, TSelectData = any>
  extends IArmstrongOption<
    Id,
    Omit<
      React.DetailedHTMLProps<
        React.BaseHTMLAttributes<HTMLOptionElement>,
        HTMLOptionElement
      >,
      'ref' | 'onClick' | 'value' | 'disabled'
    >
  > {
  /** data which will be passed into the onSelectOption callback */
  data?: TSelectData;
}

export interface ISelectProps<Id extends ArmstrongId, TSelectData = any>
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    Omit<IInputWrapperProps, 'onClick'> {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id>;

  /** The options to be shown in the input */
  options: ISelectOption<Id, TSelectData>[];

  /** Called on change to get the  */
  onSelectOption?: (option?: ISelectOption<Id>) => void;

  /** Text to show as a placeholder when nothing is selected */
  placeholderOption?: string;

  /** Should the placeholder option be re-selectable? effectively allows the select to be cleared by the user. */
  placeholderOptionEnabled?: boolean;

  /** the icon overlaying the select element to the right, usually a down arrow */
  selectOverlayIcon?: IIcon<IconSet> | JSX.Element;

  /** should allow deletion of value with a button with a cross or a given icon */
  deleteButton?: boolean | IIcon<IconSet>;

  /** the current value of the select */
  value?: NonNullable<Id>;
}

/** A select input which takes an array of options */
export const Select = React.forwardRef(
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
      scrollValidationErrorsIntoView,
      placeholderOption,
      statusPosition,
      placeholderOptionEnabled,
      hideIconOnStatus,
      ...nativeProps
    }: ISelectProps<Id, TSelectData>,
    ref: React.ForwardedRef<HTMLSelectElement>
  ) => {
    const internalRef = React.useRef<HTMLSelectElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

    const [boundValue, setBoundValue, bindConfig] = Form.useBindingState(bind, {
      value,
      validationErrorMessages,
    });

    console.log(bindConfig);

    const clearSelect = React.useCallback(() => {
      onSelectOption?.(undefined);
      bind?.setValue?.(undefined!);
    }, [onSelectOption, bind?.setValue]);

    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
          onChange(event);
        }

        const { value: newValue } = event.currentTarget;
        const selectedOption = options.find(
          (option) => option.id?.toString() === newValue
        );
        if (selectedOption) {
          setBoundValue?.(selectedOption.id);
          onSelectOption?.(selectedOption);
        } else if (!newValue && placeholderOption && placeholderOptionEnabled) {
          clearSelect();
        }
      },
      [
        onSelectOption,
        options,
        onChange,
        bind,
        placeholderOption,
        placeholderOptionEnabled,
        clearSelect,
        setBoundValue,
      ]
    );

    return (
      <InputWrapper
        className={concat('arm-select', className)}
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
        scrollValidationErrorsIntoView={scrollValidationErrorsIntoView}
        statusPosition={statusPosition}
        hideIconOnStatus={hideIconOnStatus}
      >
        <div className="arm-select-inner">
          <select
            className="arm-select-select"
            {...nativeProps}
            ref={internalRef}
            onChange={onChangeEvent}
            value={boundValue ?? undefined}
            disabled={disabled}
            defaultValue={
              placeholderOption && !nativeProps.defaultValue && !boundValue
                ? ''
                : nativeProps.defaultValue
            }
          >
            {placeholderOption && (
              <option value="" disabled={!placeholderOptionEnabled}>
                {placeholderOption}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.id}
                value={option.id ?? undefined}
                disabled={option.disabled}
                {...option.htmlProps}
              >
                {option.name || option.id}
              </option>
            ))}
          </select>
          {selectOverlayIcon &&
            (IconUtils.isIconDefinition(selectOverlayIcon) ? (
              <Icon
                className="arm-select-overlay-icon"
                icon={selectOverlayIcon.icon}
                iconSet={selectOverlayIcon.iconSet}
              />
            ) : (
              selectOverlayIcon
            ))}
        </div>

        {deleteButton && boundValue && (
          <Button
            onClick={(event) => {
              clearSelect();
              event.stopPropagation();
            }}
            onMouseDown={(e) => e.stopPropagation()}
            className="arm-select-delete"
          >
            <Icon
              iconSet={
                typeof deleteButton === 'boolean'
                  ? 'Icomoon'
                  : deleteButton.iconSet
              }
              icon={
                typeof deleteButton === 'boolean' ? 'cross2' : deleteButton.icon
              }
            />
          </Button>
        )}
      </InputWrapper>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId, TSelectData = any>(
  props: ArmstrongVFCProps<ISelectProps<Id, TSelectData>, HTMLSelectElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ISelectProps<any, any>>;

Select.defaultProps = {
  selectOverlayIcon: IconUtils.getIconDefinition('Icomoon', 'arrow-down3'),
};
