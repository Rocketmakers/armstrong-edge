import * as React from 'react';
import { IconSet } from '../icon';
import { IIconWrapperProps } from '../iconWrapper';
export interface ITagProps extends IIconWrapperProps<IconSet, IconSet>, React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /** the text to render inside the tag */
    content?: string;
    /** fired when the user clicks on a cross - if undefined, shows no cross */
    onRemove?: () => void;
}
export declare const Tag: React.FC<ITagProps>;
