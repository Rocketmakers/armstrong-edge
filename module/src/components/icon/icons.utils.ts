import { IconSet, IIcon } from './icon.component';

export namespace IconUtils {
  export function isIconDefinition<T extends IconSet = any>(icon: JSX.Element | IIcon<IconSet>): icon is IIcon<T> {
    return !!(icon as IIcon<T>).icon && !!(icon as IIcon<T>).iconSet;
  }
}
