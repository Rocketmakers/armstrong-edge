import { IconName, IconSet, IIcon } from './icon.component';

/**
 * Takes and icon definition or some JSX and returns whether it is safe to render it as an icon.
 * Used for components with icon props to allow them to optionally render custom JSX
 * @param icon the input to check
 */
export function isIconDefinition<T extends IconSet = any>(icon: JSX.Element | IIcon<T>): icon is IIcon<T> {
  return !!(icon as IIcon<T>).icon && !!(icon as IIcon<T>).iconSet;
}

/**
 * Get an icon definition
 * @param iconSet The set to be used (Icomoon | LinearIcon)
 * @param icon The name of the icon in the set given in iconSet
 * @returns an icon definition, can be spread into an <Icon /> or used for icon props
 */
export function getIconDefinition<T extends IconSet>(iconSet: T, icon: IconName<T>): IIcon<T> {
  return { iconSet, icon };
}
