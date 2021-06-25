import * as React from 'react';

import { Arrays, Form, IInputWrapperProps } from '../..';
import { IBindingProps } from '../../hooks/form';
import { ArmstrongId } from '../../types';
import { ClassNames } from '../../utils/classNames';
import { IconSet } from '../icon';
import { IIconWrapperProps } from '../iconWrapper';
import { IRadioInputProps, RadioInput } from '../radioInput/radioInput.component';
import { ValidationErrors } from '../validationErrors';

export interface IRadioInputListOption<Id extends ArmstrongId> extends IIconWrapperProps<IconSet, IconSet> {
  id: Id;
  name?: string;
  group?: string;
}

export interface IRadioInputListProps<Id extends ArmstrongId>
  extends Pick<IRadioInputProps, 'checkedIcon' | 'uncheckedIcon'>,
    Pick<IInputWrapperProps, 'scrollValidationErrorsIntoView' | 'validationMode' | 'errorIcon' | 'validationErrorMessages'> {
  /** (IBindingProps) prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id>;

  /** (IRadioInputListOption[]) The options to be shown in the input */
  options: IRadioInputListOption<Id>[];

  /** (string) CSS className property */
  className?: string;

  /** (Id) the current value of the radioInput */
  value?: Id;

  /** ((newValue: Id) => void) */
  onChange?: (newValue: Id) => void;

  /** (boolean) show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
  error?: boolean;
}

/** Render a list of radio inputs which binds to a single string */
export const RadioInputList = React.forwardRef(
  <Id extends string>(
    {
      bind,
      options,
      className,
      value,
      errorIcon,
      validationMode,
      validationErrorMessages,
      onChange,
      checkedIcon,
      uncheckedIcon,
      error,
    }: IRadioInputListProps<Id>,
    ref
  ) => {
    const [boundValue, setBoundValue, bindConfig] = Form.useBindingTools(bind, {
      value,
      validationErrorMessages,
      validationErrorIcon: errorIcon,
      validationMode,
      onChange,
    });

    const groupedOptions = React.useMemo(() => Arrays.arrayToArraysByKey(options, (option) => option.group || ''), [options]);

    return (
      <>
        <div className={ClassNames.concat('arm-radio-input-list', className)} ref={ref} data-error={error || !!validationErrorMessages?.length}>
          {groupedOptions.map((group) => (
            <React.Fragment key={group.key}>
              {group.key && (
                <div className="arm-radio-input-list-group-title">
                  <p>{group.key}</p>
                </div>
              )}

              {group.items.map((option) => (
                <RadioInput
                  key={option.id}
                  leftIcon={option.leftIcon}
                  rightIcon={option.rightIcon}
                  id={option.id}
                  checked={boundValue === option.id}
                  onChange={() => setBoundValue(option.id)}
                  name={option.name ?? option.id}
                  checkedIcon={checkedIcon}
                  uncheckedIcon={uncheckedIcon}
                />
              ))}
            </React.Fragment>
          ))}

          {bindConfig.shouldShowValidationErrorMessage && bindConfig.validationErrorMessages && (
            <ValidationErrors validationErrors={bindConfig.validationErrorMessages} icon={bindConfig.validationErrorIcon} />
          )}
        </div>
      </>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(
  props: React.PropsWithChildren<IRadioInputListProps<Id>> & React.RefAttributes<HTMLSelectElement>
) => ReturnType<React.FC>) & { defaultProps?: Partial<IRadioInputListProps<any>> };
