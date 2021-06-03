import * as React from 'react';

import { Arrays, Form, ValidationErrors } from '../..';
import { FormValidationMode, IBindingProps } from '../../hooks/form';
import { ArmstrongId } from '../../types';
import { ClassNames } from '../../utils/classNames';
import { CheckboxInput, ICheckboxInputProps } from '../checkboxInput/checkboxInput.component';
import { IconSet, IIcon } from '../icon';
import { IIconWrapperProps } from '../iconWrapper';

export interface ICheckboxInputListOption<Id extends ArmstrongId> extends IIconWrapperProps<IconSet, IconSet> {
  id: Id;
  name: string;
  group?: string;
}

export interface ICheckboxInputListProps<Id extends ArmstrongId> extends Pick<ICheckboxInputProps, 'checkedIcon' | 'uncheckedIcon'> {
  /** (IBindingProps) prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id[]>;

  /** (ICheckboxInputListOption[]) The options to be shown in the input */
  options: ICheckboxInputListOption<Id>[];

  /** (string) CSS className property */
  className?: string;

  /** (string[]) array of validation errors to render */
  validationErrorMessages?: string[];

  /** (icon|message|both) how to render the validation errors */
  validationMode?: FormValidationMode;

  /** (IIcon) the icon to use for validation errors */
  validationErrorIcon?: IIcon<IconSet>;

  /** (Id) the current value of the CheckboxInput */
  value?: Id[];

  /** ((newValue: Id) => void) */
  onChange?: (newValue: Id[]) => void;

  /** (boolean) show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
  error?: boolean;
}

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
      validationErrorIcon,
      error,
      validationErrorMessages,
    }: ICheckboxInputListProps<Id>,
    ref
  ) => {
    const [boundValue, setBoundValue, bindConfig] = Form.useBindingTools(bind, {
      validationErrorIcon,
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
          setBoundValue(boundValue?.filter((val) => val !== option.id) || []);
        } else {
          setBoundValue([...(boundValue || []), option.id]);
        }
      },
      [boundValue, includesOption]
    );

    return (
      <>
        <div className={ClassNames.concat('arm-checkbox-input-list', className)} data-error={error || !!validationErrorMessages?.length} ref={ref}>
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
                  onChange={() => onCheckboxInputChange(option)}
                  name={option.name ?? option.id}
                  checkedIcon={checkedIcon}
                  uncheckedIcon={uncheckedIcon}
                  label={option.name ?? option.id}
                />
              ))}
            </React.Fragment>
          ))}
        </div>

        {bindConfig.shouldShowValidationErrorMessage && bindConfig.validationErrorMessages && (
          <ValidationErrors validationErrors={bindConfig.validationErrorMessages} icon={bindConfig.validationErrorIcon} />
        )}
      </>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(
  props: React.PropsWithChildren<ICheckboxInputListProps<Id>> & React.RefAttributes<HTMLSelectElement>
) => ReturnType<React.FC>) & { defaultProps?: Partial<ICheckboxInputListProps<any>> };
