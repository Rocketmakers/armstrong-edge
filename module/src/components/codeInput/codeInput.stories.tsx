import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { CodeInput } from './codeInput.component';

/** metadata */

export default StoryUtils.createMeta(CodeInput, 'Form', 'Code Input', {});

/** component template */

// const Template = StoryUtils.createTemplate(CodeInput);

/** stories */

export const Default = () => {
  const [value, setValue] = React.useState('');

  return <CodeInput value={value} onChange={setValue} parts={[1, 1, 1]} />;
};
export const DifferentLengths = () => {
  const [value, setValue] = React.useState('');

  return <CodeInput value={value} onChange={setValue} parts={[4, 3, 8]} />;
};
export const WithTextBetween = () => {
  const [value, setValue] = React.useState('');

  return <CodeInput value={value} onChange={setValue} parts={[4, '-', 4, '-', 4]} />;
};
export const WithIcons = () => {
  const [value, setValue] = React.useState('');

  return (
    <CodeInput
      value={value}
      onChange={setValue}
      parts={[1, { length: 1, rightIcon: IconUtils.getIconDefinition('Icomoon', 'chrome') }, 1]}
      leftIcon={IconUtils.getIconDefinition('Icomoon', 'chess-king')}
      rightIcon={IconUtils.getIconDefinition('Icomoon', 'chess-king')}
    />
  );
};
