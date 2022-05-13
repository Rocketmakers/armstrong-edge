import * as React from 'react';

import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongId, ArmstrongVFCProps } from '../../types';
import { ClassNames } from '../../utils';
import { IRadioInputListProps, RadioInputList } from '../radioInputList';

export interface IRadioOptionsListProps<Id extends ArmstrongId> extends Omit<IRadioInputListProps<Id>, 'hideRadio'> {}

export const RadioOptionsList = React.forwardRef(
  <Id extends ArmstrongId>(
    { className, ...props }: IRadioInputListProps<Id>,
    forwardedRef: React.ForwardedRef<HTMLDivElement>
  ): ReturnType<React.FC> => {
    return <RadioInputList ref={forwardedRef} {...props} className={ClassNames.concat('arm-radio-options-list', className)} hideRadio />;
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(props: ArmstrongVFCProps<IRadioOptionsListProps<Id>, HTMLDivElement>) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IRadioOptionsListProps<any>>;
