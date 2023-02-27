import { useEventListener } from "./useEventListener";
import { renderHook } from "@testing-library/react";

describe('useEventListener', () => {
    it('adds an event listener to an element on mount and removes it on unmount', () => {
        const mockElement = document.createElement('div');
        const handler = jest.fn();

        const { unmount } = renderHook(() => useEventListener('click', handler, mockElement));

        mockElement.click();

        expect(handler).toBeCalled();

        handler.mockClear();

        unmount();

        mockElement.click();

        expect(handler).not.toBeCalled();
    });
});