import type { RatingIconDefinition } from './rating.component';
/**
 * Converts a RatingIconDefinition to a JSX.Element.
 *
 * @param {RatingIconDefinition} icon - The icon definition to convert.
 * @param {number} index - The index of the item in the rating array.
 * @returns {JSX.Element} The JSX element representing the icon.
 */
export declare const iconJsxFromDefinition: (icon: RatingIconDefinition, index: number) => JSX.Element;
