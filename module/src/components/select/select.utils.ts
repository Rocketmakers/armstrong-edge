import { ArmstrongId, IArmstrongOption, NullOrUndefined } from '../../types';
import type { IReactSelectCreateOption } from './select.component';

export interface GroupedOption<Id extends NullOrUndefined<ArmstrongId>> {
  label: string;
  options: IArmstrongOption<Id>[];
}

export function isGroupedOptions<Id extends NullOrUndefined<ArmstrongId>>(
  options?: IArmstrongOption<Id>[] | GroupedOption<Id>[]
): options is GroupedOption<Id>[] {
  return !!options?.some((o: GroupedOption<Id> | IArmstrongOption<Id>) => (o as GroupedOption<Id>).label);
}

export function isCreatingOption(
  option?: IArmstrongOption<ArmstrongId> | IReactSelectCreateOption | null
): option is IReactSelectCreateOption {
  const castOption = option as IReactSelectCreateOption;
  return !!castOption?.label && !!castOption?.value;
}

export const emptyStyles = () => {
  return {
    control: () => ({}),
    valueContainer: () => ({}),
    indicatorsContainer: () => ({}),
    indicatorSeparator: () => ({}),
    dropdownIndicator: () => ({}),
    loadingIndicator: () => ({}),
    input: () => ({}),
    singleValue: () => ({}),
    multiValue: () => ({}),
    multiValueLabel: () => ({}),
    multiValueRemove: () => ({}),
    clearIndicator: () => ({}),
    menu: () => ({}),
    menuList: () => ({}),
    menuPortal: () => ({}),
    noOptionsMessage: () => ({}),
    loadingMessage: () => ({}),
    placeholder: () => ({}),
    option: () => ({}),
    group: () => ({}),
    groupHeading: () => ({}),
  };
};
