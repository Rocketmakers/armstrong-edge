import * as React from 'react';

import { ClassUtils } from '../../utils/classNames';
import { Icons } from './icon.icons';

/** The name of a set of icons */
export type IconSet = keyof typeof Icons;

/** The name of an icon in the given set */
export type IconName<Set extends IconSet> = keyof typeof Icons[Set];

/** core props for rendering and Armstrong Icon */
export interface IIcon<TIconSet extends IconSet> {
  /** (string) Icon set - IcoMoon | LinearIcon */
  iconSet: TIconSet;

  /** (string) Icon name in the given iconSet */
  icon: IconName<TIconSet>;
}

export interface IIconProps<TIconSet extends IconSet> extends IIcon<TIconSet> {
  /** (string) CSS className property */
  className?: string;
}

/** Render an icon using one of the supported icon sets */
export const Icon = <TIconSet extends IconSet>({ className, iconSet, icon }: React.PropsWithChildren<IIconProps<TIconSet>>) => {
  const iconClassName = Icons[iconSet][icon] as any as string;

  return <div data-icon-set={iconSet} className={ClassUtils.concat('arm-icon', iconClassName, className)} />;
};

type IIconsetIconProps<TIconSet extends IconSet> = Omit<IIconProps<TIconSet>, 'iconSet'>;

/** Renders an Icomoon icon - requires the consuming application to have manually added the Icomoon font file */
export const IcomoonIcon: React.FunctionComponent<IIconsetIconProps<'Icomoon'>> = ({ icon, ...props }) => (
  <Icon {...props} iconSet="Icomoon" icon={icon} />
);

/** Renders an LinearIcon icon - requires the consuming application to have manually added the LinearIcon font file */
export const LinearIcon: React.FunctionComponent<IIconsetIconProps<'LinearIcons'>> = ({ icon, ...props }) => (
  <Icon {...props} iconSet="LinearIcons" icon={icon} />
);
