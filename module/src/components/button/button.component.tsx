import * as React from 'react';

import { IconSet } from '../icon';
import { IIconWrapperProps } from '../iconWrapper';

export interface IButtonProps extends IIconWrapperProps<IconSet, IconSet> {}

export const Button: React.FC<IButtonProps> = () => {
  return <button></button>;
};
