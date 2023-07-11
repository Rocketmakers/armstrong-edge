import * as React from 'react';
export interface IExpandableProps extends React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement> {
    /** is the expandable region open, if false will take up no space */
    isOpen?: boolean;
    /** Should animate the height expansion */
    animate?: boolean;
}
/** A div which will automatically resize depending on the size of its children */
export declare const Expandable: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<IExpandableProps>, "ref"> & React.RefAttributes<HTMLDivElement>>;
