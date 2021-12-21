import * as React from 'react';

import { Arrays, Form, IInputWrapperProps, ValidationErrors } from '../..';
import { IBindingProps } from '../../hooks/form';
import { ArmstrongId } from '../../types/core';
import { IArmstrongExtendedOption, IArmstrongExtendedOptionWithInput } from '../../types/options';
import { ClassNames } from '../../utils/classNames';
import { CheckboxInput, ICheckboxInputProps } from '../checkboxInput/checkboxInput.component';

export interface ICheckboxInputListOption<Id extends ArmstrongId>
  extends Omit<
    IArmstrongExtendedOptionWithInput<
      Id,
      Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange' | 'type' | 'ref'>,
      ICheckboxInputProps['inputProps']
    >,
    'content'
  > {
  /** JSX to render as the label - replaces name, can take a function which receives the active state of the option and returns the JSX to render */
  label: IArmstrongExtendedOption<Id>['content'];
}

export interface ICheckboxInputListProps<Id extends ArmstrongId>
  extends Pick<ICheckboxInputProps, 'checkedIcon' | 'uncheckedIcon' | 'hideCheckbox'>,
    Pick<IInputWrapperProps, 'scrollValidationErrorsIntoView' | 'validationMode' | 'errorIcon' | 'validationErrorMessages'> {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id[]>;

  /** The options to be shown in the input */
  options: ICheckboxInputListOption<Id>[];

  /** CSS className property */
  className?: string;

  /** the current value of the CheckboxInput */
  value?: Id[];

  /** fired when the value of the checkbox input changes */
  onChange?: (newValue: Id[]) => void;

  /** show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
  error?: boolean;

  /** the direction for the options in the list to flow */
  direction?: 'horizontal' | 'vertical';
}

/** A list of checkboxes which binds to an array of IDs */
export const CheckboxInputList = React.forwardRef(
  <Id extends ArmstrongId>(
    {
      bind,
      options,
      className,
      validationMode,
      value,
      checkedIcon,
      onChange,
      uncheckedIcon,
      errorIcon,
      scrollValidationErrorsIntoView,
      error,
      validationErrorMessages,
      direction,
      hideCheckbox,
    }: ICheckboxInputListProps<Id>,
    ref
  ) => {
    const [boundValue, setBoundValue, bindConfig] = Form.useBindingTools(bind, {
      validationErrorIcon: errorIcon,
      validationErrorMessages,
      validationMode,
      value,
      onChange,
    });

    const groupedOptions = React.useMemo(() => Arrays.arrayToArraysByKey(options, (option) => option.group || ''), [options]);

    const includesOption = React.useCallback((option: ICheckboxInputListOption<Id>) => boundValue?.includes(option.id), [boundValue]);

    const onCheckboxInputChange = React.useCallback(
      (option: ICheckboxInputListOption<Id>) => {
        if (includesOption(option)) {
          setBoundValue?.(boundValue?.filter((val) => val !== option.id) || []);
        } else {
          setBoundValue?.([...(boundValue || []), option.id]);
        }
      },
      [boundValue, includesOption]
    );

    return (
      <>
        <div
          className={ClassNames.concat('arm-checkbox-input-list', className)}
          data-error={error || !!validationErrorMessages?.length}
          ref={ref}
          data-direction={direction}
        >
          {groupedOptions.map((group) => (
            <React.Fragment key={group.key}>
              {group.key && (
                <div className="arm-checkbox-input-list-group-title">
                  <p>{group.key}</p>
                </div>
              )}

              {group.items.map((option) => (
                <CheckboxInput
                  key={option.id}
                  leftIcon={option.leftIcon}
                  rightIcon={option.rightIcon}
                  checked={includesOption(option)}
                  onChange={() => !option.disabled && onCheckboxInputChange(option)}
                  name={option.name ?? option.id?.toString()}
                  checkedIcon={checkedIcon}
                  uncheckedIcon={uncheckedIcon}
                  label={option.label}
                  inputProps={option.htmlInputProps}
                  disabled={option.disabled}
                  direction={direction === 'horizontal' ? 'vertical' : 'horizontal'}
                  hideCheckbox={hideCheckbox}
                  {...option.htmlProps}
                />
              ))}
            </React.Fragment>
          ))}
        </div>

        {bindConfig.shouldShowValidationErrorMessage && bindConfig.validationErrorMessages && (
          <ValidationErrors
            validationErrors={bindConfig.validationErrorMessages}
            icon={bindConfig.validationErrorIcon}
            scrollIntoView={scrollValidationErrorsIntoView}
          />
        )}
      </>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(
  props: React.PropsWithChildren<ICheckboxInputListProps<Id>> & React.RefAttributes<HTMLSelectElement>
) => ReturnType<React.FC>) & { defaultProps?: Partial<ICheckboxInputListProps<any>> };

CheckboxInputList.defaultProps = {
  direction: 'vertical',
};
