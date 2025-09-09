import * as React from 'react';

import { FormValidationMode, IBindingProps, useBindingState } from '../../form';
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
  validationErrorIcon?: React.ReactElement;

  /** (Optional) Class name for the validation errors */
  validationErrorsClassName?: string;

  /** (Optional) Title for the validation errors */
  validationErrorsTitle?: string;

  /** how to render the validation errors */
  validationMode?: FormValidationMode;
}

/** Render a character limit from a bound value, showing as an error if the user  */
export const CharacterLimit = (props: React.PropsWithChildren<ICharacterLimitProps<NullOrUndefined<string>> & { ref?: React.Ref<HTMLDivElement> }>) => {
  const {
    bind,
    limit,
    shouldEnforce,
    value,
    className,
    validationErrorIcon,
    validationErrorsClassName,
    validationErrorsTitle,
    validationMode,
    ref,
    ...nativeProps
  } = props;
    const globals = useArmstrongConfig({
      validationErrorIcon,
      validationMode,
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
          <div
            className={concat('arm-character-limit-icon', validationErrorsClassName)}
            title={validationErrorsTitle ?? 'Character limit exceeded'}
          >
            {(globals.validationMode === 'both' || globals.validationMode === 'icon') && globals.validationErrorIcon}
          </div>
        )}
      </div>
    );
};

// Type assertion for generic support - updated for React 19 ref as prop pattern
(CharacterLimit as any) = (CharacterLimit as (<TBind extends NullOrUndefined<string>>(
  props: React.PropsWithChildren<ICharacterLimitProps<TBind> & { ref?: React.Ref<HTMLDivElement> }>
) => React.ReactElement) & ArmstrongFCExtensions<ICharacterLimitProps<NullOrUndefined<string>>>);

CharacterLimit.displayName = 'CharacterLimit';
