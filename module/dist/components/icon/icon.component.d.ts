import * as React from 'react';
import { Icons } from './icon.icons';
/** The name of a set of icons */
export declare type IconSet = keyof Icons;
/** The name of an icon in the given set */
export declare type IconName<Set extends IconSet> = Icons[Set];
/** core props for rendering and Armstrong Icon */
export interface IIcon<TIconSet extends IconSet> {
    /** Icon set - IcoMoon | LinearIcon */
    iconSet: TIconSet;
    /** Icon name in the given iconSet */
    icon: IconName<TIconSet>;
}
export interface IIconProps<TIconSet extends IconSet> extends IIcon<TIconSet>, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /** CSS className property */
    className?: string;
}
/** Render an icon using one of the supported icon sets */
export declare const Icon: <TIconSet extends keyof Icons>({ className, iconSet, icon, onClick, ...nativeProps }: React.PropsWithChildren<IIconProps<TIconSet>>) => JSX.Element;
declare type IIconsetIconProps<TIconSet extends IconSet> = Omit<IIconProps<TIconSet>, 'iconSet'>;
/** Renders an Icomoon icon - requires the consuming application to have manually added the Icomoon font file */
export declare const IcomoonIcon: React.FunctionComponent<IIconsetIconProps<'Icomoon'>>;
/** Renders an LinearIcon icon - requires the consuming application to have manually added the LinearIcon font file */
export declare const LinearIcon: React.FunctionComponent<IIconsetIconProps<'LinearIcons'>>;
export {};
