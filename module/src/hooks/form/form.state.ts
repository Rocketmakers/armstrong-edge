/** ******************************************************
 * FORM - State file.
 * Contains everything related to form state such as the reducer and action factories.
 ******************************************************* */
import { Objects } from '../../utils/objects';
import { FormAction, IValidationError, ValidationAction } from './form.types';

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
      return Objects.mergeDeep(state, action.keyChain, action.value);
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
      if (!action.key) {
        return [];
      }
      return state.filter((e) => e.key !== action.key);
    default:
      return state;
  }
}
