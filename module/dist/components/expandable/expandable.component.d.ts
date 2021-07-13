import * as React from 'react';
export interface IExpandableProps extends React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement> {
    /** is the expandable region open, if false will take up no space */
    isOpen?: boolean;
    /** which direction should the children open */
    direction?: 'vertical' | 'horizontal';
}
/** A div which expands to fit its children when isOpen is true, otherwise it takes up no space - can work horizontally or vertically */
export declare const Expandable: React.FC<IExpandableProps>;
