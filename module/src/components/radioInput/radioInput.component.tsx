import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { Icon, IconSet, IIcon } from '../icon';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';

export interface IRadioInputProps
  extends IIconWrapperProps<IconSet, IconSet>,
    Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'> {
  /** ((newValue: string) => void) fired when the user changes the current value */
  onChange?: (newValue: boolean) => void;

  /** (string) the name to render in a label, fallsd back to ID */
  name: string;

  /** (IIcon) icon to render on the input when checked */
  checkedIcon?: IIcon<IconSet>;

  /** (IIcon) icon to render on the input when not checked */
  uncheckedIcon?: IIcon<IconSet>;
}

/** Render a single radio input */
export const RadioInput = React.forwardRef<HTMLInputElement, IRadioInputProps>(
  ({ onChange, name, className, checked, leftIcon, rightIcon, checkedIcon, uncheckedIcon, ...nativeProps }, ref) => {
    return (
      <div className={ClassNames.concat('arm-radio-input', className)} data-checked={checked} data-has-checked-icon={!!checkedIcon}>
        <label>
          <div className="arm-radio-input-radio">
            <input
              className="arm-radio-input-radio-input"
              ref={ref}
              type="radio"
              checked={checked}
              onChange={() => onChange?.(!checked)}
              {...nativeProps}
            />

            {checkedIcon && <Icon className="arm-radio-input-checked-icon" iconSet={checkedIcon.iconSet} icon={checkedIcon.icon} />}
            {uncheckedIcon && <Icon className="arm-radio-input-unchecked-icon" iconSet={uncheckedIcon.iconSet} icon={uncheckedIcon.icon} />}
          </div>

          <IconWrapper leftIcon={leftIcon} rightIcon={rightIcon}>
            <p>{name}</p>
          </IconWrapper>
        </label>
      </div>
    );
  }
);
