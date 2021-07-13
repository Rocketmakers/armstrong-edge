import * as React from 'react';
import { IconSet, IIcon } from '../icon/icon.component';
export interface IIconWrapperProps<TLeftIcon extends IconSet, TRightIcon extends IconSet> {
    /** icon definition for left icon, optionally uses custom JSX */
    leftIcon?: IIcon<TLeftIcon> | JSX.Element;
    /** icon definition for right icon, optionally uses custom JSX */
    rightIcon?: IIcon<TRightIcon> | JSX.Element;
}
/** Wraps its children with optional icons on either side */
export declare const IconWrapper: <TLeftIcon extends keyof import("../icon/icon.icons").Icons, TRightIcon extends keyof import("../icon/icon.icons").Icons>({ leftIcon, rightIcon, children, }: React.PropsWithChildren<IIconWrapperProps<TLeftIcon, TRightIcon>>) => JSX.Element;
