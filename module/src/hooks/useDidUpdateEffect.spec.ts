import { renderHook } from '@testing-library/react';

import { useDidUpdateEffect } from './useDidUpdateEffect';

/* useDidUpdateEffect */
describe('useDidUpdateEffect', () => {
  it('should run the effect callback when the dependencies change', () => {
    const effectCallback = jest.fn();

    const { rerender } = renderHook(deps => useDidUpdateEffect(effectCallback, deps), {
      initialProps: [1, 2, 3], // Initial dependencies
    });

    expect(effectCallback).not.toHaveBeenCalled();

    rerender([4, 5, 6]); // Dependencies change

    expect(effectCallback).toHaveBeenCalledTimes(1);

    rerender([4, 5, 6]); // Dependencies do not change

    expect(effectCallback).toHaveBeenCalledTimes(1);

    rerender([7, 8, 9]); // Dependencies change

    expect(effectCallback).toHaveBeenCalledTimes(2);
  });

  it('should not run the effect callback on the first render', () => {
    const effectCallback = jest.fn();

    renderHook(() => useDidUpdateEffect(effectCallback, [1, 2, 3]));

    expect(effectCallback).not.toHaveBeenCalled();
  });

  it('should return the cleanup function returned by the effect callback', () => {
    const cleanupFunction = jest.fn();
    const effectCallback = jest.fn().mockReturnValue(cleanupFunction);

    const { rerender } = renderHook(deps => useDidUpdateEffect(effectCallback, deps), {
      initialProps: [1, 2, 3],
    });

    expect(effectCallback).not.toHaveBeenCalled();

    rerender([4, 5, 6]);

    expect(effectCallback).toHaveBeenCalledTimes(1);
    expect(cleanupFunction).not.toHaveBeenCalled();

    rerender([7, 8, 9]);

    expect(effectCallback).toHaveBeenCalledTimes(2);
    expect(cleanupFunction).toHaveBeenCalledTimes(1);
  });
});
