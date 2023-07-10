import { touchedStateForKeyChain, touchedStateReducer } from './touchedState';

/* touchedStateForKeyChain */
describe('touchedStateForKeyChain', () => {
  it('should return root and child items from a key chain', () => {
    const state = ['parent1', 'parent1.child', 'parent1.child.grandchild', 'parent2', 'parent2.child', 'parent3'];
    const results = touchedStateForKeyChain(state, ['parent1']);

    expect(results).toEqual(['parent1', 'parent1.child', 'parent1.child.grandchild']);
  });
});

/* touchedStateReducer */
describe('touchedStateReducer', () => {
  it("should handle 'set-touched' action when setting a key as touched", () => {
    const initialState = ['form.name'];
    const action = {
      type: 'set-touched' as const,
      keyChain: ['form', 'age'],
      touched: true,
    };

    const expectedState = ['form.name', 'form.age'];

    expect(touchedStateReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle 'set-touched' action when unsetting a key as touched", () => {
    const initialState = ['form.name', 'form.age'];
    const action = {
      type: 'set-touched' as const,
      keyChain: ['form', 'age'],
      touched: false,
    };

    const expectedState = ['form.name'];

    expect(touchedStateReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle 'reset-touched' action and return an empty array", () => {
    const initialState = ['form.name', 'form.age'];
    const action = {
      type: 'reset-touched' as const,
    };

    const expectedState: string[] = [];

    expect(touchedStateReducer(initialState, action)).toEqual(expectedState);
  });

  it('should return the same state for an unknown action', () => {
    const initialState = ['form.name'];
    const action = {
      type: 'unknown-action',
    };

    expect(touchedStateReducer(initialState, action as any)).toEqual(initialState);
  });
});
