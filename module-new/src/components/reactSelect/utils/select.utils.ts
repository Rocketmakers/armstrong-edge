import {
  ArmstrongId,
  IArmstrongReactSelectCreatingOption,
  IArmstrongReactSelectOption,
  NullOrUndefined,
} from '../../../types';

export interface GroupedOption<Id extends NullOrUndefined<ArmstrongId>> {
  label: string;
  options: IArmstrongReactSelectOption<Id>[];
}

export function isGroupedOptions<Id extends NullOrUndefined<ArmstrongId>>(
  options?: IArmstrongReactSelectOption<Id>[] | GroupedOption<Id>[]
): options is GroupedOption<Id>[] {
  return !!options?.some((o: GroupedOption<Id> | IArmstrongReactSelectOption<Id>) => (o as GroupedOption<Id>).label);
}

export function isCreatingOption<Id extends NullOrUndefined<ArmstrongId>>(
  option?: IArmstrongReactSelectOption<Id> | IArmstrongReactSelectCreatingOption<Id>
): option is IArmstrongReactSelectCreatingOption<Id> {
  return !!(option as IArmstrongReactSelectCreatingOption<Id>)?.isNew;
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
