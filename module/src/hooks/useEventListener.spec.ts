import { renderHook } from '@testing-library/react';

import { useEventListener } from './useEventListener';

describe('useEventListener', () => {
  it('adds an event listener to an element on mount and removes it on unmount', () => {
    const mockElement = document.createElement('div');
    const handler = jest.fn();

    const { unmount } = renderHook(() => useEventListener('click', handler, mockElement));

    mockElement.click();

    expect(handler).toHaveBeenCalled();

    handler.mockClear();

    unmount();

    mockElement.click();

    expect(handler).not.toHaveBeenCalled();
  });
});
