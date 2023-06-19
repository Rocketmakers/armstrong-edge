import * as React from 'react';

import { ArmstrongId, DataAttributes } from './core';

/** an option in an array of options, intended for use in a component like a Select or RadioList */
export interface IArmstrongOption<Id extends ArmstrongId, HtmlProps = unknown> {
  /** the value to be bound */
  id: Id;

  /** JSX to render inside the option - can take a function which receives the active state of the option and returns the JSX to render */
  content?: React.ReactNode | ((active: boolean) => React.ReactNode);

  /** props to spread onto the root element of the option */
  htmlProps?: HtmlProps & DataAttributes;

  /** is the option available - if not, will be greyed out and unable to select */
  disabled?: boolean;
}

export const getContentFromOption = <Id extends ArmstrongId>(option: IArmstrongOption<Id>, value) => {
  return typeof option.content === 'function' ? option.content(value) : option.content;
};
