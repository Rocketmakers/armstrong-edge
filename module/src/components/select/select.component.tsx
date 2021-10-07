import * as React from 'react';

import { Form } from '../..';
import { IBindingProps } from '../../hooks/form';
import { ArmstrongId } from '../../types';
import { ClassNames } from '../../utils/classNames';
import { Icon, IconSet, IconUtils, IIcon } from '../icon';
import { IconButton } from '../iconButton';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper';

export interface ISelectOption<Id extends ArmstrongId, TSelectData = any> {
  /** the value to be bound */
  id: Id;

  /** the name to be rendered for the option */
  name?: string;

  /** data which will be passed into the onSelectOption callback */
  data?: TSelectData;
  disabled?: boolean;
}

export interface ISelectProps<Id extends ArmstrongId, TSelectData = any>
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
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

  /** should allow deletion of value with a cross */
  deleteButton?: boolean;

  value?: Id;
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
      placeholderOptionEnabled,
      ...nativeProps
    }: ISelectProps<Id, TSelectData>,
    ref: React.ForwardedRef<HTMLSelectElement>
  ) => {
    const internalRef = React.useRef<HTMLSelectElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

    const [boundValue, setBoundValue, bindConfig] = Form.useBindingTools(bind, { value, validationErrorMessages });

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
        const selectedOption = options.find((option) => option.id.toString() === newValue);
        if (selectedOption) {
          setBoundValue?.(selectedOption.id);
          onSelectOption?.(selectedOption);
        } else if (!newValue && placeholderOption && placeholderOptionEnabled) {
          clearSelect();
        }
      },
      [onSelectOption, options, onChange, bind, placeholderOption, placeholderOptionEnabled, clearSelect, setBoundValue]
    );

    return (
      <InputWrapper
        className={ClassNames.concat('arm-select', className)}
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
      >
        <div className="arm-select-inner">
          <select
            className="arm-select-select"
            {...nativeProps}
            ref={internalRef}
            onChange={onChangeEvent}
            value={boundValue}
            disabled={disabled}
            defaultValue={placeholderOption && !nativeProps.defaultValue ? '' : nativeProps.defaultValue}
          >
            {placeholderOption && (
              <option value="" disabled={!placeholderOptionEnabled}>
                {placeholderOption}
              </option>
            )}
            {options.map((option) => (
              <option key={option.id} value={option.id} disabled={option.disabled}>
                {option.name || option.id}
              </option>
            ))}
          </select>
          {selectOverlayIcon &&
            (IconUtils.isIconDefinition(selectOverlayIcon) ? (
              <Icon className="arm-select-overlay-icon" icon={selectOverlayIcon.icon} iconSet={selectOverlayIcon.iconSet} />
            ) : (
              selectOverlayIcon
            ))}
        </div>
        {deleteButton && boundValue && (
          <IconButton
            className="arm-select-delete"
            onClick={(event) => {
              clearSelect();
              event.stopPropagation();
            }}
            onMouseDown={(e) => e.stopPropagation()}
            icon={IconUtils.getIconDefinition('Icomoon', 'cross2')}
            minimalStyle
          />
        )}
      </InputWrapper>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId, TSelectData = any>(
  props: React.PropsWithRef<ISelectProps<Id, TSelectData>> & React.RefAttributes<HTMLSelectElement>
) => ReturnType<React.FC>) & { defaultProps?: Partial<ISelectProps<any, any>> };

Select.defaultProps = {
  selectOverlayIcon: IconUtils.getIconDefinition('Icomoon', 'arrow-down3'),
};
