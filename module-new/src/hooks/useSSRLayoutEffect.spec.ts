import '@testing-library/jest-dom';

import { act, render, within } from '@testing-library/react';
import React from 'react';

import { useDidUpdateSSRLayoutEffect, useSSRLayoutEffect } from './useSSRLayoutEffect';

/* useSSRLayoutEffect */
describe('useSSRLayoutEffect', () => {
  it('should update the DOM when the state changes', () => {
    let setShowRef: React.Dispatch<React.SetStateAction<boolean>> | undefined;
    const Component = () => {
      const [show, setShow] = React.useState(false);
      const [width, setWidth] = React.useState(0);
      setShowRef = setShow;

      useSSRLayoutEffect(() => {
        setWidth(show ? 100 : 50);
      }, [show]);

      return React.createElement('div', { style: { width } }, 'Content');
    };

    const { container } = render(React.createElement(Component));
    const inner = within(container).getByText('Content');
    expect(inner).toHaveStyle('width: 50px');
    act(() => setShowRef?.(true));
    expect(inner).toHaveStyle('width: 100px');
  });

  it('should call the cleanup function when unmounting', () => {
    const cleanup = jest.fn();

    const Component = () => {
      useSSRLayoutEffect(() => {
        return cleanup;
      }, []);

      return null;
    };

    const { unmount } = render(React.createElement(Component));
    expect(cleanup).not.toHaveBeenCalled();
    unmount();
    expect(cleanup).toHaveBeenCalled();
  });
});

/* useDidUpdateSSRLayoutEffect */
describe('useDidUpdateSSRLayoutEffect', () => {
  it('should update the DOM when the state changes, but NOT on the first render', () => {
    let setShowRef: React.Dispatch<React.SetStateAction<boolean>> | undefined;
    const Component = () => {
      const [show, setShow] = React.useState(false);
      const [width, setWidth] = React.useState(10);
      setShowRef = setShow;

      useDidUpdateSSRLayoutEffect(() => {
        setWidth(show ? 100 : 50);
      }, [show]);

      return React.createElement('div', { style: { width } }, 'Content');
    };

    const { container } = render(React.createElement(Component));
    const inner = within(container).getByText('Content');
    expect(inner).toHaveStyle('width: 10px');
    act(() => setShowRef?.(true));
    expect(inner).toHaveStyle('width: 100px');
  });

  it('should call the cleanup function when unmounting', () => {
    const cleanup = jest.fn();

    const Component = () => {
      useSSRLayoutEffect(() => {
        return cleanup;
      }, []);

      return null;
    };

    const { unmount } = render(React.createElement(Component));
    expect(cleanup).not.toHaveBeenCalled();
    unmount();
    expect(cleanup).toHaveBeenCalled();
  });
});
