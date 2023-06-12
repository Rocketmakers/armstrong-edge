import * as React from 'react';

import { IBindingProps, useBindingState } from '../../form';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, NullOrUndefined } from '../../types';
import { concat } from '../../utils/classNames';
import { useArmstrongConfig } from '../config';

import './characterLimit.theme.css';

export interface ICharacterLimitProps<TBind extends NullOrUndefined<string>>
  extends Omit<React.RefAttributes<HTMLDivElement>, 'ref'> {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind: IBindingProps<TBind>;

  /** the current value of the string to count */
  value?: TBind;

  /** the character limit for the bound input */
  limit: number;

  /** the limit should be enforced by the bind in this component - by default you will have to handle this yourself */
  shouldEnforce?: boolean;

  /** CSS className property */
  className?: string;

  /** the icon to use for the validation errors */
  validationErrorIcon?: JSX.Element;
}

/** Render a character limit from a bound value, showing as an error if the user  */
export const CharacterLimit = React.forwardRef<HTMLDivElement, ICharacterLimitProps<NullOrUndefined<string>>>(
  ({ bind, limit, shouldEnforce, value, className, validationErrorIcon, ...nativeProps }, ref) => {
    const globals = useArmstrongConfig({
      validationErrorIcon,
    });

    const [boundValue, setBoundValue] = useBindingState(bind, { value });

    const exceeded = boundValue && boundValue.length > limit;

    React.useLayoutEffect(() => {
      if (shouldEnforce && exceeded) {
        setBoundValue?.(boundValue?.slice(0, limit));
      }
    }, [boundValue, exceeded, limit, setBoundValue, shouldEnforce]);

    return (
      <div ref={ref} className={concat('arm-character-limit', className)} data-exceeded={exceeded} {...nativeProps}>
        <div className="arm-character-limit-text">
          {boundValue?.length}/{limit}
        </div>
        {exceeded && (
          <div className="arm-character-limit-icon" title="Character limit exceeded">
            {globals.validationErrorIcon}
          </div>
        )}
      </div>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TBind extends NullOrUndefined<string>>(
  props: ArmstrongFCProps<ICharacterLimitProps<TBind>, HTMLDivElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ICharacterLimitProps<NullOrUndefined<string>>>;

CharacterLimit.displayName = 'CharacterLimit';
