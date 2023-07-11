import { ArmstrongId, IArmstrongOption, NullOrUndefined } from '../../types';
import type { IReactSelectCreateOption } from './select.component';
export interface GroupedOption<Id extends NullOrUndefined<ArmstrongId>> {
    label: string;
    options: IArmstrongOption<Id>[];
}
export declare function isGroupedOptions<Id extends NullOrUndefined<ArmstrongId>>(options?: IArmstrongOption<Id>[] | GroupedOption<Id>[]): options is GroupedOption<Id>[];
export declare function isCreatingOption(option?: IArmstrongOption<ArmstrongId> | IReactSelectCreateOption | null): option is IReactSelectCreateOption;
export declare const emptyStyles: () => {
    control: () => {};
    valueContainer: () => {};
    indicatorsContainer: () => {};
    indicatorSeparator: () => {};
    dropdownIndicator: () => {};
    loadingIndicator: () => {};
    input: () => {};
    singleValue: () => {};
    multiValue: () => {};
    multiValueLabel: () => {};
    multiValueRemove: () => {};
    clearIndicator: () => {};
    menu: () => {};
    menuList: () => {};
    menuPortal: () => {};
    noOptionsMessage: () => {};
    loadingMessage: () => {};
    placeholder: () => {};
    option: () => {};
    group: () => {};
    groupHeading: () => {};
};
