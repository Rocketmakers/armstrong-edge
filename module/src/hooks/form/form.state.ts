import { Objects } from '../../utils/objects';
import { FormAction } from './form.types';

export function reducer<TData extends object>(state: TData, action: FormAction<TData, any>): TData {
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
