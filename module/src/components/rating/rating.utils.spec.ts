import * as React from 'react';

import { JSX } from 'react';

import { iconJsxFromDefinition } from './rating.utils';

const iconFn1 = (index: number): JSX.Element => React.createElement('span', { key: index }, 'Icon 1');

describe('iconJsxFromDefinition', () => {
  it('should convert a function icon definition to JSX element', () => {
    const result = iconJsxFromDefinition(iconFn1, 0);
    expect(result).toEqual(React.createElement('span', { key: 0 }, 'Icon 1'));
  });

  it('should return the icon as is if it is not a function', () => {
    const icon = React.createElement('span', { key: 1 }, 'Icon 2');
    const result = iconJsxFromDefinition(icon, 1);
    expect(result).toEqual(icon);
  });
});
