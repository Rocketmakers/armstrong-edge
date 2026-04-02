import * as React from 'react';

import type { RatingIconDefinition } from './rating.component';

/**
 * Converts a RatingIconDefinition to a JSX.Element.
 *
 * @param {RatingIconDefinition} icon - The icon definition to convert.
 * @param {number} index - The index of the item in the rating array.
 * @returns {React.JSX.Element} The JSX element representing the icon.
 */
export const iconJsxFromDefinition = (icon: RatingIconDefinition, index: number): React.JSX.Element => {
  if (typeof icon === 'function') {
    return icon(index);
  }
  return icon;
};
