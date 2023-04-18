import * as React from 'react';

import { useEventListener } from '../../hooks/useEventListener';

interface IPosition {
  left: number;
  top: number;
}

function mouseEventToPosition(event: Pick<React.MouseEvent, 'clientX' | 'clientY'>): IPosition {
  return { left: event.clientX, top: event.clientY };
}

export interface IDragReleaseCallbackArgs {
  currentPosition: IPosition;
  startPosition: IPosition;
  changePosition: IPosition;
}

/** Track the position of the cursor after a mouse down event, and fire a callback when the mouse is released */
export function useDrag(onRelease?: (args: IDragReleaseCallbackArgs) => void) {
  const [startPosition, setStartPosition] = React.useState<IPosition | undefined>(undefined);
  const [currentPosition, setCurrentPosition] = React.useState<IPosition | undefined>(undefined);
  const [isDragging, setIsDragging] = React.useState(false);

  const changePosition = React.useMemo(() => {
    if (!startPosition || !currentPosition) {
      return undefined;
    }
    return {
      left: currentPosition.left - startPosition.left,
      top: currentPosition.top - startPosition.top,
    };
  }, [startPosition, currentPosition]);

  const onMouseDown = React.useCallback((event: React.MouseEvent) => {
    const position = mouseEventToPosition(event);
    setStartPosition(position);
    setCurrentPosition(position);
    setIsDragging(true);
    event.preventDefault();
  }, []);

  const onMouseUp = React.useCallback((event: React.MouseEvent) => {
    event.preventDefault();
  }, []);

  const onMouseMoveWindow = React.useCallback(
    (event: React.MouseEvent) => {
      if (isDragging) {
        const position = mouseEventToPosition(event);
        setCurrentPosition(position);
      }
    },
    [isDragging]
  );

  const onMouseUpWindow = React.useCallback(() => {
    if (isDragging) {
      onRelease?.({
        startPosition: startPosition!,
        currentPosition: currentPosition!,
        changePosition: changePosition!,
      });
      setStartPosition(undefined);
      setCurrentPosition(undefined);
      setIsDragging(false);
    }
  }, [isDragging, currentPosition, startPosition, changePosition, onRelease]);

  useEventListener('mousemove', onMouseMoveWindow as any);
  useEventListener('mouseup', onMouseUpWindow);

  return {
    currentPosition,
    startPosition,
    changePosition,
    isDragging,
    props: {
      onMouseDown,
      onMouseUp,
    },
  };
}
