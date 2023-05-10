import React from 'react';
import { components, DropdownIndicatorProps } from 'react-select';

import { ArmstrongId, IArmstrongReactSelectOption } from '../../../types';

const { DropdownIndicator } = components;

// eslint-disable-next-line @typescript-eslint/naming-convention -- this component is being deleted shortly.
export interface IDropdownIndicatorProps<Id extends ArmstrongId, isMulti extends boolean>
  extends DropdownIndicatorProps<IArmstrongReactSelectOption<Id>, isMulti> {
  icon: JSX.Element;
}

export const CustomDropdownIndicator: React.FC<IDropdownIndicatorProps<ArmstrongId, boolean>> = props => {
  return <DropdownIndicator {...props}>{props.icon}</DropdownIndicator>;
};
