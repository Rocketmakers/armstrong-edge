/** ******************************************************
 * FORM - State file.
 * Contains everything related to form state such as the reducer and action factories.
 ******************************************************* */
import { FormAction, IValidationError, ValidationAction } from './form.types';
import { mergeDeepFromKeyChain } from './form.utils';

/**
 * The reducer for the form state object
 * @param state The current form state.
 * @param action The action to respond to.
 * @returns The updated state.
 */
export function dataReducer<TData extends object>(state: TData, action: FormAction<TData, unknown>): TData {
  switch (action.type) {
    case 'set-one':
      return (
        Array.isArray(state) || Number.isInteger(action.propertyKey)
          ? ((state as unknown[]) || []).map((_, i) => (i === action.propertyKey ? action.value : state[i]))
          : { ...(state || {}), [action.propertyKey]: action.value }
      ) as TData;
    case 'set-path':
      return mergeDeepFromKeyChain(state, action.keyChain, action.value);
    case 'set-all':
      return (Array.isArray(action.data) ? [...action.data] : { ...action.data }) as TData;
    default:
      return state;
  }
}

export function validationReducer(state: IValidationError[], action: ValidationAction): IValidationError[] {
  const safeState = state ?? [];
  let validationToClear: IValidationError[];
  switch (action.type) {
    case 'add-validation':
      return [...safeState, ...(action.errors ?? [])];
    case 'clear-validation':
      validationToClear = safeState.filter(e => {
        if (!action.key && !action.identifiers?.length) {
          return true;
        }
        return (
          action.key === e.key && (!action.identifiers?.length || action.identifiers.some(id => id === e.identifier))
        );
      });
      return safeState.filter(e => !validationToClear.some(c => c === e));
    default:
      return safeState;
  }
}