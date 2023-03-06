import { CodeInputPartDefinition } from '.';

export namespace CodeInputUtils {
  export const getPartLength = (part: CodeInputPartDefinition<any>) => {
    if (typeof part === 'number') {
      return part;
    }
    if (typeof part === 'string') {
      return 0;
    }
    return part.length;
  };
}
