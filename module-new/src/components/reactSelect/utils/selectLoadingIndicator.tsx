import React from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { LoadingIndicatorProps } from 'react-select';

import { ArmstrongId, IArmstrongReactSelectOption } from '../../../types';
import { Spinner } from '../../spinner';

export interface ILoadingIndicatorProps<Id extends ArmstrongId, IsMulti extends boolean>
  extends LoadingIndicatorProps<IArmstrongReactSelectOption<Id>, IsMulti> {
  icon: JSX.Element;
}

export const CustomLoadingIndicator: React.FC<ILoadingIndicatorProps<ArmstrongId, boolean>> = props => {
  return <Spinner className="arm-status-spinner" fillContainer={false} icon={props.icon} />;
};
