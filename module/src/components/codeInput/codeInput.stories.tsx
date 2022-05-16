import * as React from 'react';

import { Form } from '../../hooks';
import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { CodeInput } from './codeInput.component';

/** metadata */

export default StoryUtils.createMeta(CodeInput, 'Form', 'Code Input', {});

/** component template */

// const Template = StoryUtils.createTemplate(CodeInput);

/** stories */

export const Default = () => {
  const { formProp } = Form.use({ code: '' });

  return <CodeInput bind={formProp('code').bind()} parts={[1, 1, 1]} />;
};
export const DifferentLengths = () => {
  const { formProp } = Form.use({ code: '' });

  return <CodeInput bind={formProp('code').bind()} parts={[4, 3, 8]} />;
};
export const WithTextBetween = () => {
  const { formProp } = Form.use({ code: '' });

  return <CodeInput bind={formProp('code').bind()} parts={[4, '-', 4, '-', 4]} />;
};
export const WithIcons = () => {
  const { formProp } = Form.use({ code: '' });

  return (
    <CodeInput
      bind={formProp('code').bind()}
      parts={[1, { length: 1, rightIcon: IconUtils.getIconDefinition('Icomoon', 'chrome') }, 1]}
      leftIcon={IconUtils.getIconDefinition('Icomoon', 'chess-king')}
      rightIcon={IconUtils.getIconDefinition('Icomoon', 'chess-king')}
    />
  );
};
