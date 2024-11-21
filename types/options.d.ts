import * as React from 'react';
import { ArmstrongId, DataAttributes } from './core';
/** an option in an array of options, intended for use in a component like a Select or RadioList */
export interface IArmstrongOption<Id extends ArmstrongId, HtmlProps = unknown, TData = unknown> {
    /** the value to be bound */
    id: Id;
    /** JSX to render inside the option - can take a function which receives the active state of the option and returns the JSX to render */
    content?: React.ReactNode | ((active: boolean) => React.ReactNode);
    /** props to spread onto the root element of the option */
    htmlProps?: HtmlProps & DataAttributes;
    /** is the option available - if not, will be greyed out and unable to select */
    disabled?: boolean;
    /** will be true if the option was created through the input, relevant to selects and tagging inputs where allowCreate=true */
    wasCreated?: boolean;
    /** optional data to be added to option and read by rendering/filtering functions */
    data?: TData;
}
/**
 * Gets option content from option definition
 * @param option The definition of the option
 * @returns The option content
 */
export declare const getContentFromOption: <Id extends ArmstrongId>(option: IArmstrongOption<Id, unknown, unknown>, active?: boolean) => React.ReactNode;
