import { renderHook } from "@testing-library/react";

import { useEventListener } from "./useEventListener";

describe("useEventListener", () => {
  it("should add event listener to the specified element", () => {
    const addEventListenerMock = jest.fn();
    const removeEventListenerMock = jest.fn();

    const elementMock = {
      addEventListener: addEventListenerMock,
      removeEventListener: removeEventListenerMock,
    };

    const eventHandler = jest.fn();
    const eventType = "click";

    renderHook(() => useEventListener(eventType, eventHandler, elementMock));

    expect(addEventListenerMock).toHaveBeenCalledWith(eventType, eventHandler, {
      passive: true,
    });
  });

  it("should remove event listener when component unmounts", () => {
    const addEventListenerMock = jest.fn();
    const removeEventListenerMock = jest.fn();

    const elementMock = {
      addEventListener: addEventListenerMock,
      removeEventListener: removeEventListenerMock,
    };

    const eventHandler = jest.fn();
    const eventType = "click";

    const { unmount } = renderHook(() =>
      useEventListener(eventType, eventHandler, elementMock)
    );

    unmount();

    expect(removeEventListenerMock).toHaveBeenCalledWith(
      eventType,
      eventHandler,
      {}
    );
  });

  it("should not add event listener if the element is undefined", () => {
    const addEventListenerMock = jest.fn();

    const elementMock = undefined;

    const eventHandler = jest.fn();
    const eventType = "click";

    renderHook(() => useEventListener(eventType, eventHandler, elementMock));

    expect(addEventListenerMock).not.toHaveBeenCalled();
  });
});
