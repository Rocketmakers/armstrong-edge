import * as React from 'react';

import { Form, ValidationErrors } from '../..';
import { IBindingProps } from '../../hooks/form';
import { Arrays } from '../../utils';
import { ClassNames } from '../../utils/classNames';
import { Button } from '../button';
import { Icon, IconSet, IIcon } from '../icon';
import { IInputWrapperProps } from '../inputWrapper';

export interface IRatingPartProps extends Pick<IRatingProps, 'filledIcon' | 'emptyIcon' | 'step'> {
  index: number;
  value?: number;
  onSelectPart: (portion: number) => void;
}

export const RatingPart: React.FC<IRatingPartProps> = ({ index, value, onSelectPart, filledIcon, emptyIcon, step }) => {
  const steps = 1 / (step || 1);

  return (
    <div
      className="arm-rating-part"
      style={value ? ({ '--rating-amount': (value - index) % 1 } as React.CSSProperties) : undefined}
      data-filled={value && value > index}
    >
      {filledIcon && <Icon className="arm-rating-part-filled" {...filledIcon} />}
      {emptyIcon && <Icon className="arm-rating-part-empty" {...emptyIcon} />}

      <div className="arm-rating-part-buttons">
        {Arrays.repeat(steps, (buttonIndex) => (
          <Button key={buttonIndex} minimalStyle onClick={() => onSelectPart(steps * buttonIndex)} aria-label={`${index + steps * buttonIndex}`} />
        ))}
      </div>
    </div>
  );
};

export interface IRatingProps
  extends Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange'>,
    Pick<IInputWrapperProps, 'scrollValidationErrorsIntoView' | 'validationMode' | 'errorIcon' | 'validationErrorMessages'> {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<number>;

  value?: number;
  onValueChange?: (newValue: number) => void;
  filledIcon?: IIcon<IconSet>;
  emptyIcon?: IIcon<IconSet>;
  maximum?: number;
  step?: number;
}

export const Rating: React.FC<IRatingProps> = ({
  bind,
  value,
  onValueChange,
  filledIcon,
  emptyIcon,
  maximum,
  className,
  validationErrorMessages,
  validationMode,
  errorIcon,
  scrollValidationErrorsIntoView,
  ...htmlProps
}) => {
  const [boundValue, setBoundValue, bindConfig] = Form.useBindingTools(bind, {
    value,
    onChange: onValueChange,
    validationErrorMessages,
    validationMode,
    validationErrorIcon: errorIcon,
  });

  return (
    <>
      <div className={ClassNames.concat('arm-rating', className)} {...htmlProps}>
        {Arrays.repeat(maximum!, (index) => (
          <RatingPart
            key={index}
            index={index}
            filledIcon={filledIcon}
            emptyIcon={emptyIcon}
            value={boundValue}
            onSelectPart={(proportion) => setBoundValue?.(index + proportion)}
          />
        ))}
      </div>

      {!!validationErrorMessages?.length && bindConfig.shouldShowValidationErrorMessage && (
        <ValidationErrors
          validationErrors={validationErrorMessages}
          icon={bindConfig.validationErrorIcon}
          scrollIntoView={scrollValidationErrorsIntoView}
        />
      )}
    </>
  );
};

Rating.defaultProps = {
  maximum: 5,
  filledIcon: { iconSet: 'Icomoon', icon: 'star-full' },
  emptyIcon: { iconSet: 'Icomoon', icon: 'star-empty' },
  step: 1,
};
