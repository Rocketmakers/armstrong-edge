import * as React from 'react';

import { IBindingProps, useBindingTools } from '../../hooks/form';
import { ClassNames } from '../../utils/classNames';
import { Icon, IconSet, IconUtils, IIcon } from '../icon';

export interface ICharacterLimitProps {
  /** (IBindingProps) prop for binding to an Armstrong form binder (see forms documentation) */
  bind: IBindingProps<string>;

  /** (string) the current value of the string to count */
  value?: string;

  /** (input) the character limit for the bound input */
  limit: number;

  /** (boolean) the limit should be imposed by the bind in this component - by default you will have to handle this yourself */
  shouldImpose?: boolean;

  /** (string) CSS className property */
  className?: string;

  /** (IIcon) icon to render if error */
  exceedsIcon?: IIcon<IconSet>;
}

export const CharacterLimit: React.FC<ICharacterLimitProps> = ({ bind, limit, shouldImpose, value, className, exceedsIcon }) => {
  const [boundValue, setBoundValue] = useBindingTools(bind, { value });

  const exceeded = boundValue && boundValue.length > limit;

  React.useLayoutEffect(() => {
    if (shouldImpose && exceeded) {
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
