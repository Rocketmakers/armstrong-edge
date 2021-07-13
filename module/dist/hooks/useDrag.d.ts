import * as React from 'react';
interface IPosition {
    left: number;
    top: number;
}
export interface IDragReleaseCallbackArgs {
    currentPosition: IPosition;
    startPosition: IPosition;
    changePosition: IPosition;
}
/** Track the position of the cursor after a mouse down event, and fire a callback when the mouse is released */
export declare function useDrag(onRelease?: (args: IDragReleaseCallbackArgs) => void): {
    currentPosition: IPosition | undefined;
    startPosition: IPosition | undefined;
    changePosition: {
        left: number;
        top: number;
    } | undefined;
    isDragging: boolean;
    props: {
        onMouseDown: (event: React.MouseEvent) => void;
        onMouseUp: (event: React.MouseEvent) => void;
    };
};
export {};
