import * as React from 'react';

import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongVFCProps } from '../../types/reactExtensions';
import { concat } from '../../utils/classNames';
import { Icons } from './icon.icons';

import './icon.basic.scss';

/** The name of a set of icons */
export type IconSet = keyof Icons;

/** The name of an icon in the given set */
export type IconName<Set extends IconSet> = Icons[Set];

/** core props for rendering and Armstrong Icon */
export interface IIcon<TIconSet extends IconSet> {
  /** Icon set - IcoMoon | LinearIcon */
  iconSet: TIconSet;

  /** Icon name in the given iconSet */
  icon: IconName<TIconSet>;
}

export interface IIconProps<TIconSet extends IconSet>
  extends IIcon<TIconSet>,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /** CSS className property */
  className?: string;

  /** identifier for driving this component with Cypress */
  cypressTag?: string;
}

/** Render an icon using one of the supported icon sets */
export const Icon = React.forwardRef(
  <TIconSet extends IconSet>(
    { className, iconSet, icon, onClick, cypressTag, ...nativeProps }: IIconProps<TIconSet>,
    forwardedRef: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        aria-hidden
        {...nativeProps}
        ref={forwardedRef}
        data-icon-set={iconSet}
        data-i={icon}
        className={concat('arm-icon', className)}
        data-clickable={!!onClick}
        onClick={onClick}
        data-cy={cypressTag}
      />
    );
  }
) as (<TIconSet extends IconSet>(props: ArmstrongVFCProps<IIconProps<TIconSet>, HTMLDivElement>) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IIconProps<IconSet>>;

type IIconsetIconProps<TIconSet extends IconSet> = Omit<IIconProps<TIconSet>, 'iconSet'>;

/** Renders an Icomoon icon - requires the consuming application to have manually added the Icomoon font file */
export const IcomoonIcon = React.forwardRef<HTMLDivElement, IIconsetIconProps<'Icomoon'>>(
  ({ icon, ...props }, forwardedRef) => <Icon {...props} ref={forwardedRef} iconSet="Icomoon" icon={icon} />
);

/** Renders an LinearIcon icon - requires the consuming application to have manually added the LinearIcon font file */
export const LinearIcon = React.forwardRef<HTMLDivElement, IIconsetIconProps<'LinearIcons'>>(
  ({ icon, ...props }, forwardedRef) => <Icon {...props} ref={forwardedRef} iconSet="LinearIcons" icon={icon} />
);
