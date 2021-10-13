import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { Icon, IconSet, IIcon } from '../icon';
import { IIconWrapperProps } from '../iconWrapper';
import { OptionContent } from '../optionContent';

export interface IRadioInputProps
  extends IIconWrapperProps<IconSet, IconSet>,
    Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange'> {
  /** fired when the user changes the current value */
  onChange?: (newValue: boolean) => void;

  /** the name to render in a label */
  label?: React.ReactChild;

  /** icon to render on the input when checked */
  checkedIcon?: IIcon<IconSet>;

  /** icon to render on the input when not checked */
  uncheckedIcon?: IIcon<IconSet>;

  /** props to spread onto the input element */
  inputProps?: Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange' | 'type' | 'ref' | 'checked'>;

  /** the direction for the content to flow */
  direction?: 'horizontal' | 'vertical';
}

/** Render a single radio input */
export const RadioInput = React.forwardRef<HTMLInputElement, IRadioInputProps>(
  ({ onChange, label, className, checked, leftIcon, rightIcon, checkedIcon, uncheckedIcon, inputProps, direction, name, ...nativeProps }, ref) => {
    return (
      <div
        className={ClassNames.concat('arm-radio-input', className)}
        data-checked={checked}
        data-has-checked-icon={!!checkedIcon}
        {...nativeProps}
        data-direction={direction}
      >
        <label>
          <div className="arm-radio-input-radio">
            <input
              {...inputProps}
              className={ClassNames.concat('arm-radio-input-radio-input', inputProps?.className)}
              ref={ref}
              type="radio"
              checked={checked}
              onChange={() => onChange?.(!checked)}
            />

            {checkedIcon && <Icon className="arm-radio-input-checked-icon" iconSet={checkedIcon.iconSet} icon={checkedIcon.icon} />}
            {uncheckedIcon && <Icon className="arm-radio-input-unchecked-icon" iconSet={uncheckedIcon.iconSet} icon={uncheckedIcon.icon} />}
          </div>

          <OptionContent content={label} name={name} leftIcon={leftIcon} rightIcon={rightIcon} />
        </label>
      </div>
    );
  }
);

RadioInput.defaultProps = {
  direction: 'horizontal',
};
