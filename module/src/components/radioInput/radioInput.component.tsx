import * as React from 'react';

import { Form } from '../..';
import { FormValidationMode, IBindingProps } from '../../hooks/form';
import { ClassNames } from '../../utils/classNames';
import { Icon, IconSet, IIcon, IIconProps } from '../icon';
import { ValidationErrors } from '../validationErrors';

export interface IRadioInputOption<TRadioId extends string> {
  id: TRadioId;
  name: string;
  icon?: IIconProps<IconSet>;
}

export interface IRadioInputProps<TRadioId extends string> {
  /** (IBindingProps) prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TRadioId>;

  /** (IRadioInputOption[]) The options to be shown in the input */
  options: IRadioInputOption<TRadioId>[];

  /** (string) CSS className property */
  className?: string;

  /** (string[]) array of validation errors to render */
  validationErrorMessages?: string[];

  /** (icon|message|both) how to render the validation errors */
  validationMode?: FormValidationMode;

  /** (IIcon) the icon to use for validation errors */
  validationErrorIcon?: IIcon<IconSet>;

  value?: TRadioId;
}

export const RadioInput = React.forwardRef(
  <TSelectId extends string>(
    { bind, options, className, value, validationErrorIcon, validationMode, validationErrorMessages }: IRadioInputProps<TSelectId>,
    ref
  ) => {
    const [
      boundValue,
      setBoundValue,
      { myValidationErrorMessages, validationErrorIcon: boundValidationErrorIcon, shouldShowValidationErrorMessage },
    ] = Form.useBindingTools(bind, {
      value,
      validationErrorMessages,
      validationErrorIcon,
      validationMode,
    });

    return (
      <>
        <div className={ClassNames.concat('arm-radio-input', className)} ref={ref}>
          {options.map((option) => (
            <div className="arm-radio-input-option" key={option.id}>
              <label>
                <input type="radio" checked={option.id === boundValue} onClick={() => setBoundValue(option.id)} />
                {option.icon && <Icon {...option.icon} />}
                <p>{option.name}</p>
              </label>
            </div>
          ))}

          {shouldShowValidationErrorMessage && myValidationErrorMessages && (
            <ValidationErrors validationErrors={myValidationErrorMessages} icon={boundValidationErrorIcon} />
          )}
        </div>
      </>
    );
  }
);
