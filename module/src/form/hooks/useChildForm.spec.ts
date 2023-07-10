import { act, renderHook } from '@testing-library/react';

import { useChildForm } from './useChildForm';
import { useForm } from './useForm';

describe('useChildForm', () => {
  const rootFormState = {
    field1: 'test',
    field2: 4,
    field3: true,
    childTest: {
      childField1: 'cf1-test',
      childField2: 'cf2-test',
      childField3: 'cf3-test',
    },
  };

  const useTestHook = () => {
    const { formProp: baseFormProp, formState: baseFormState } = useForm(rootFormState, {
      validationErrors: [{ key: 'childTest.childField1', message: 'an error' }],
    });
    const { formProp: childFormProp, formState: childFormState } = useChildForm(baseFormProp('childTest').bind());
    return { baseFormProp, baseFormState, childFormProp, childFormState };
  };

  it('should return the correct form state', () => {
    const { result } = renderHook(() => useTestHook());
    expect(result.current.childFormState).toEqual(rootFormState.childTest);
  });

  it('should modify the child and root form state correctly on set', () => {
    const { result } = renderHook(() => useTestHook());

    act(() => {
      result.current.childFormProp('childField1').set('cf1-new');
    });

    expect(result.current.childFormState?.childField1).toBe('cf1-new');
    expect(result.current.baseFormState?.childTest?.childField1).toBe('cf1-new');
  });

  it('should add passed in validation errors to the correct keys', () => {
    const { result } = renderHook(() => useTestHook());
    expect(result.current.childFormProp('childField1').bind().myValidationErrors).toEqual([
      { key: 'childField1', message: 'an error' },
    ]);
    expect(result.current.childFormProp('childField2').bind().myValidationErrors).toEqual([]);
    expect(result.current.childFormProp('childField3').bind().myValidationErrors).toEqual([]);
  });

  it('should dispatch validation errors to the correct keys', () => {
    const { result } = renderHook(() => useTestHook());
    act(() => result.current.childFormProp('childField1').bind().addValidationError('error-2'));
    expect(result.current.childFormProp('childField1').bind().myValidationErrors).toEqual([
      { key: 'childField1', message: 'error-2' },
      { key: 'childField1', message: 'an error' },
    ]);
    expect(result.current.childFormProp('childField2').bind().myValidationErrors).toEqual([]);
    expect(result.current.childFormProp('childField3').bind().myValidationErrors).toEqual([]);
  });

  it('should dispatch touch state `true` for the correct keys', () => {
    const { result } = renderHook(() => useTestHook());
    act(() => result.current.childFormProp('childField1').bind().setTouched(true));
    expect(result.current.childFormProp('childField1').bind().isTouched).toBe(true);
    expect(result.current.childFormProp('childField2').bind().isTouched).toBe(false);
    expect(result.current.childFormProp('childField3').bind().isTouched).toBe(false);
  });

  it('should dispatch touch state `false` for the correct keys', () => {
    const { result } = renderHook(() => useTestHook());
    act(() => result.current.childFormProp('childField1').bind().setTouched(false));
    expect(result.current.childFormProp('childField1').bind().isTouched).toBe(false);
    expect(result.current.childFormProp('childField2').bind().isTouched).toBe(false);
    expect(result.current.childFormProp('childField3').bind().isTouched).toBe(false);
  });
});
