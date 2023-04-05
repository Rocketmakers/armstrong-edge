import { NullOrUndefined } from '../../types';
import { CodeInputPartDefinition } from '.';

export const getLengthFromPart = <T extends NullOrUndefined<string>>(part: CodeInputPartDefinition<T>) => {
  if (typeof part === 'number') {
    return part;
  }
  if (typeof part === 'string') {
    return 0;
  }
  return part.length;
};
