import {
  ArmstrongId,
  IArmstrongReactSelectCreatingOption,
  IArmstrongReactSelectOption,
  NullOrUndefined,
} from "../../../types";
import { GroupedOption } from "./singleSelect.component";

export function isGroupedOptions<Id extends NullOrUndefined<ArmstrongId>>(
  options?: IArmstrongReactSelectOption<Id>[] | GroupedOption<Id>[]
): options is GroupedOption<Id>[] {
  return !!options?.some(
    (o: GroupedOption<Id> | IArmstrongReactSelectOption<Id>) =>
      (o as GroupedOption<Id>).label
  );
}

export function isCreatingOption<Id extends NullOrUndefined<ArmstrongId>>(
  option?:
    | IArmstrongReactSelectOption<Id>
    | IArmstrongReactSelectCreatingOption<Id>
): option is IArmstrongReactSelectCreatingOption<Id> {
  return !!option?.hasOwnProperty("__isNew__");
}
