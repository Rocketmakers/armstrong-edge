import { IconSet } from '../components/icon/icon.component';
import { IIconWrapperProps } from '../components/iconWrapper/iconWrapper.component';
import { ArmstrongId } from '../types';

export interface IArmstrongOption<Id extends ArmstrongId, HtmlProps> {
  /** the value to be bound */
  id: Id;

  /** the name to be rendered for the option */
  name?: string;

  /** props to spread onto the root element of the option */
  htmlProps?: HtmlProps;

  /** is the option available - if not, will be greyed out and unable to select */
  disabled?: boolean;
}

export interface IArmstrongExtendedOption<Id extends ArmstrongId, HtmlProps>
  extends IArmstrongOption<Id, HtmlProps>,
    IIconWrapperProps<IconSet, IconSet> {
  /** a group to show this item under */
  group?: string;
}

export interface IArmstrongExtendedOptionWithInput<Id extends ArmstrongId, HtmlProps, InputProps> extends IArmstrongExtendedOption<Id, HtmlProps> {
  /** props to spread onto the input element */
  htmlInputProps?: InputProps;
}
