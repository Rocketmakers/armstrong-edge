import React from 'react';
import { ImCheckmark } from 'react-icons/im';
import { components, OptionProps } from 'react-select';

import { ArmstrongId, IArmstrongReactSelectOption } from '../../../types';

export const SelectOption = (props: OptionProps<IArmstrongReactSelectOption<ArmstrongId>>) => (
  <components.Option {...props}>
    <>
      {props.data.content}
      {props.isSelected && <ImCheckmark />}
    </>
  </components.Option>
);
