import * as React from 'react';

import { ArmstrongId } from '../../types';
import { ClassNames } from '../../utils';
import { IRadioInputListProps, RadioInputList } from '../radioInputList';

export interface IRadioOptionsListProps<Id extends ArmstrongId> extends Omit<IRadioInputListProps<Id>, 'hideRadio'> {}

export const RadioOptionsList = <Id extends ArmstrongId>({ className, ...props }: IRadioInputListProps<Id>): ReturnType<React.FC> => {
  return <RadioInputList {...props} className={ClassNames.concat('arm-radio-options-list', className)} hideRadio />;
};
