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
export function dataReducer<TData extends object>(state: TData, action: FormAction<TData, any>): TData {
  switch (action.type) {
    case 'set-one':
      return (
        Array.isArray(state) || Number.isInteger(action.propertyKey)
          ? ((state as any[]) || []).map((_, i) => (i === action.propertyKey ? action.value : state[i]))
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

export function validationReducer(state: IValidationError[] = [], action: ValidationAction): IValidationError[] {
  switch (action.type) {
    case 'add-validation':
      return [...state, ...(action.errors ?? [])];
    case 'clear-validation':
      const validationToClear = state.filter(e => {
        if (!action.key && !action.identifiers?.length) {
          return true;
        }
        return (
          action.key === e.key && (!action.identifiers?.length || action.identifiers.some(id => id === e.identifier))
        );
      });
      return state.filter(e => !validationToClear.some(c => c === e));
    default:
      return state;
  }
}
