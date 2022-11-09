import {
  ArmstrongId,
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
