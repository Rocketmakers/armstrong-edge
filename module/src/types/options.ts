import * as React from "react";

import { ArmstrongId, DataAttributes } from "./core";

/** an option in an array of options, intended for use in a component like a Select or RadioList */
export interface IArmstrongOption<Id extends ArmstrongId> {
  /** the value to be bound */
  id: Id;

  /** the name to be rendered for the option */
  content?: JSX.Element;

  /** is the option available - if not, will be greyed out and unable to select */
  disabled?: boolean;
}

export type IArmstrongReactSelectOption<Id extends ArmstrongId> = Omit<
  IArmstrongOption<Id>,
  "htmlProps"
>;
export interface IArmstrongReactSelectCreatingOption<Id extends ArmstrongId>
  extends IArmstrongReactSelectOption<Id> {
  label: Id;
  value: Id;
  __isNew__: boolean;
}

export interface IArmstrongOptionWithInput<Id extends ArmstrongId, InputProps>
  extends IArmstrongOption<Id> {
  /** props to spread onto the input element */
  htmlInputProps?: InputProps & DataAttributes;
}
