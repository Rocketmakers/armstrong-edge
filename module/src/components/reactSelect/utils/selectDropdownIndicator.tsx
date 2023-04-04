import React from 'react';
import { components, DropdownIndicatorProps } from 'react-select';

import { ArmstrongId, IArmstrongReactSelectOption } from '../../../types';
import { Icon, IconSet, IIcon } from '../../icon';

const { DropdownIndicator } = components;

// eslint-disable-next-line @typescript-eslint/naming-convention -- this component is being deleted shortly.
export interface IDropdownIndicatorProps<Id extends ArmstrongId, isMulti extends boolean>
  extends DropdownIndicatorProps<IArmstrongReactSelectOption<Id>, isMulti> {
  icon: IIcon<IconSet>;
}

export const CustomDropdownIndicator: React.FC<IDropdownIndicatorProps<any, boolean>> = props => {
  return (
    <DropdownIndicator {...props}>
      <Icon iconSet={props.icon?.iconSet} icon={props.icon?.icon} />
    </DropdownIndicator>
  );
};
