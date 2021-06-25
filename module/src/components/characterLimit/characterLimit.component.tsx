import * as React from 'react';

import { IBindingProps, useBindingTools } from '../../hooks/form';
import { ClassNames } from '../../utils/classNames';
import { Icon, IconSet, IconUtils, IIcon } from '../icon';

export interface ICharacterLimitProps {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind: IBindingProps<string>;

  /** the current value of the string to count */
  value?: string;

  /** the character limit for the bound input */
  limit: number;

  /** the limit should be enforced by the bind in this component - by default you will have to handle this yourself */
  shouldEnforce?: boolean;

  /** CSS className property */
  className?: string;

  /** icon to render if error */
  exceedsIcon?: IIcon<IconSet>;
}

/** Render a character limit from a bound value, showing as an error if the user  */
export const CharacterLimit: React.FC<ICharacterLimitProps> = ({ bind, limit, shouldEnforce, value, className, exceedsIcon }) => {
  const [boundValue, setBoundValue] = useBindingTools(bind, { value });

  const exceeded = boundValue && boundValue.length > limit;

  React.useLayoutEffect(() => {
    if (shouldEnforce && exceeded) {
      setBoundValue(boundValue!.slice(0, limit));
    }
  }, [boundValue]);

  return (
    <div className={ClassNames.concat('arm-character-limit', className)} data-exceeded={exceeded}>
      <p>
        {boundValue?.length}/{limit}
      </p>
      {exceedsIcon && exceeded && <Icon iconSet={exceedsIcon.iconSet} icon={exceedsIcon.icon} />}
    </div>
  );
};

CharacterLimit.defaultProps = {
  exceedsIcon: IconUtils.getIconDefinition('Icomoon', 'warning'),
};
