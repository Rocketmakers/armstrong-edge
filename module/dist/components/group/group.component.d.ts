import * as React from 'react';
export interface IGroupProps extends React.HTMLProps<HTMLDivElement> {
    /** A title to show above the group */
    title?: string;
}
/** Incredibly simple component designed to take some of the boilerplate out of making some elements appear in a row */
export declare const Group: React.FC<IGroupProps>;
