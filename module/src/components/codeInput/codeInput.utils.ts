import { NullOrUndefined } from "../../types";
import { CodeInputPartDefinition } from "./codeInput.types";

/**
 * Get the required character length from a code input part definition.
 * @param part The part definition.
 * @returns The required character length for the part
 */
export function getLengthFromPart<T extends NullOrUndefined<string>>(
  part: CodeInputPartDefinition<T>
) {
  if (typeof part === "number") {
    return part;
  }
  if (typeof part === "string") {
    return 0;
  }
  return part.length;
}
