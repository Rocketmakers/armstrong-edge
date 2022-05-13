import * as React from 'react';

import { Form } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { RangeInput } from './rangeInput.component';

/** metadata */

export default StoryUtils.createMeta(RangeInput as any, 'Form', 'Range Input', {});

/** component template */

// const Template = StoryUtils.createTemplate(RangeInput);

/** stories */

export const Default = () => {
  const { formProp } = Form.use({ value: 0 });

  return <RangeInput bind={formProp('value').bind()} minimum={0} maximum={100} />;
};
export const HandleIcon = () => {
  const { formProp } = Form.use({ value: 0 });

  return <RangeInput bind={formProp('value').bind()} minimum={0} maximum={100} handleIcon={IconUtils.getIconDefinition('Icomoon', 'sun')} />;
};
export const Pending = () => {
  const { formProp } = Form.use({ value: 0 });

  return <RangeInput bind={formProp('value').bind()} minimum={0} maximum={100} pending />;
};
export const WithIcons = () => {
  const { formProp } = Form.use({ value: 0 });

  return <RangeInput bind={formProp('value').bind()} minimum={0} maximum={100} leftIcon={IconUtils.getIconDefinition('Icomoon', 'trophy3')} />;
};
export const WithSteps = () => {
  const { formProp } = Form.use({ value: 0 });

  return <RangeInput bind={formProp('value').bind()} minimum={0} maximum={100} step={25} />;
};
export const WithValidationErrors = () => {
  const { formProp, formState } = Form.use({ value: 0 });

  return (
    <RangeInput
      bind={formProp('value').bind()}
      minimum={0}
      maximum={100}
      validationErrorMessages={formState?.value < 20 && ['value must be more than 20']}
    />
  );
};
