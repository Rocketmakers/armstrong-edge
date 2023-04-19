import React from 'react';
import { LoadingIndicatorProps, components } from 'react-select';
import { ArmstrongId, IArmstrongReactSelectOption } from '../../../types';
import { IIcon, IconSet, Icon, IconUtils } from '../../icon';
import { Spinner } from '../../spinner';

const { LoadingIndicator } = components;

export interface ILoadingIndicatorProps<
  Id extends ArmstrongId,
  isMulti extends boolean
> extends LoadingIndicatorProps<IArmstrongReactSelectOption<Id>, isMulti> {
  icon: IIcon<IconSet>;
}

export const CustomLoadingIndicator: React.FC<
  ILoadingIndicatorProps<any, boolean>
> = (props) => {
  return (
    <Spinner
      className="arm-status-spinner"
      fillContainer={false}
      icon={IconUtils.getIconDefinition('Icomoon', 'spinner2')}
    />
  );
};
