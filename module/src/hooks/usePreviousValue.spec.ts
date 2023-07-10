import { renderHook } from '@testing-library/react';

import { usePreviousValue } from './usePreviousValue';

describe('usePreviousValue', () => {
  it('should return the previous value before the effect cycle', () => {
    const { result, rerender } = renderHook(props => usePreviousValue(props), {
      initialProps: 'initial',
    });

    expect(result.current).toBeUndefined();

    rerender('updated');

    expect(result.current).toBe('initial');

    rerender('new value');

    expect(result.current).toBe('updated');
  });

  it('should return undefined when the value is undefined', () => {
    const { result, rerender } = renderHook(props => usePreviousValue(props), {
      initialProps: undefined as string | undefined,
    });

    expect(result.current).toBeUndefined();

    rerender('updated');

    expect(result.current).toBeUndefined();
  });

  it('should return the previous value for complex objects', () => {
    const initialValue = { name: 'John', age: 25 };
    const updatedValue = { name: 'John', age: 30 };

    const { result, rerender } = renderHook(props => usePreviousValue(props), {
      initialProps: initialValue,
    });

    expect(result.current).toBeUndefined();

    rerender(updatedValue);

    expect(result.current).toBe(initialValue);
  });
});
