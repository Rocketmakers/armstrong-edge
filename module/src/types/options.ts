import * as React from 'react';

import { IconSet } from '../components/icon/icon.component';
import { IIconWrapperProps } from '../components/iconWrapper/iconWrapper.component';
import { ArmstrongId } from './core';

/** an option in an array of options, intended for use in a component like a Select or RadioList */
export interface IArmstrongOption<Id extends ArmstrongId, HtmlProps = unknown> {
  /** the value to be bound */
  id: Id;

  /** the name to be rendered for the option */
  name?: string;

  /** props to spread onto the root element of the option */
  htmlProps?: HtmlProps;

  /** is the option available - if not, will be greyed out and unable to select */
  disabled?: boolean;
}

/** an option in an array of options, intended for use in a component like a Select or RadioList, with additional JSX related options */
export interface IArmstrongExtendedOption<Id extends ArmstrongId, HtmlProps = unknown>
  extends IArmstrongOption<Id, HtmlProps>,
    IIconWrapperProps<IconSet, IconSet> {
  /** a group to show this item under */
  group?: string;

  /** JSX to render inside the option - replaces name, can take a function which receives the active state of the option */
  content?: React.ReactChild | ((active: boolean) => React.ReactChild);
}

export interface IArmstrongExtendedOptionWithInput<Id extends ArmstrongId, HtmlProps, InputProps> extends IArmstrongExtendedOption<Id, HtmlProps> {
  /** props to spread onto the input element */
  htmlInputProps?: InputProps;
}
