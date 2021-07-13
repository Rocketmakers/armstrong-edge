import * as React from 'react';
import { ArmstrongId } from '../../types';
import { IconSet } from '../icon';
import { IIconWrapperProps } from '../iconWrapper';
export interface ITab<Id extends ArmstrongId> extends IIconWrapperProps<IconSet, IconSet> {
    /** The ID of the tab, to be passed into onTabChange */
    id: Id;
    /** The text to render inside the tab, falls back to id if not given and no icon is set */
    content?: string;
}
export interface ITabControlTabProps<Id extends ArmstrongId> extends ITab<Id>, Omit<React.HTMLAttributes<HTMLButtonElement>, 'id' | 'ref'> {
    /** adds a data-is-current data attribute */
    isCurrent?: boolean;
}
/** A single tab used in the TabControl component */
export declare const TabControlTab: (<Id extends ArmstrongId>(props: ITabControlTabProps<Id> & React.RefAttributes<HTMLButtonElement>) => ReturnType<React.FC>) & {
    defaultProps?: Partial<ITabControlTabProps<any>> | undefined;
};
export interface ITabControlProps<Id extends ArmstrongId> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'ref'> {
    /** The tabs to render in the TabControl */
    tabs: ITab<Id>[];
    /** The tab to be displayed as the current tab (adds a data-is-current data attribute to the tab with the given ID) */
    currentTab?: Id;
    /** fired when a user clicks on a tab */
    onTabChange?: (newTabId: Id) => void;
}
/** Render an array of tabs, which can be bound using the currentTab and onTabChange props */
export declare const TabControl: (<Id extends ArmstrongId>(props: ITabControlProps<Id> & React.RefAttributes<HTMLDivElement>) => ReturnType<React.FC>) & {
    defaultProps?: Partial<ITabControlProps<any>> | undefined;
};
