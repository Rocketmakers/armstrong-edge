import { Typescript } from './typescript';

export namespace Directions {
  export type Position = 'above' | 'below' | 'left' | 'right';

  export const swapPosition = (position: Position): Position => {
    switch (position) {
      case 'above':
        return 'below';
      case 'below':
        return 'above';
      case 'left':
        return 'right';
      case 'right':
        return 'left';
      default:
        Typescript.assertNever(position);
    }
    return position;
  };
}
