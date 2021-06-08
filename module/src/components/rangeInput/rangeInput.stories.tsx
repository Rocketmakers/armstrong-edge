import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { RangeInput } from './rangeInput.component';

/** metadata */

export default StoryUtils.createMeta(RangeInput as any, 'Form', 'Range Input', {});

/** component template */

// const Template = StoryUtils.createTemplate(RangeInput);

/** stories */

export const Default = () => {
  const [value, setValue] = React.useState(0);

  return <RangeInput value={value} onValueChange={setValue} minimum={0} maximum={100} />;
};
export const HandleIcon = () => {
  const [value, setValue] = React.useState(0);

  return <RangeInput value={value} onValueChange={setValue} minimum={0} maximum={100} handleIcon={IconUtils.getIconDefinition('Icomoon', 'sun')} />;
};
export const Pending = () => {
  const [value, setValue] = React.useState(0);

  return <RangeInput value={value} onValueChange={setValue} minimum={0} maximum={100} pending />;
};
export const WithIcons = () => {
  const [value, setValue] = React.useState(0);

  return <RangeInput value={value} onValueChange={setValue} minimum={0} maximum={100} leftIcon={IconUtils.getIconDefinition('Icomoon', 'trophy3')} />;
};
export const WithSteps = () => {
  const [value, setValue] = React.useState(0);

  return <RangeInput value={value} onValueChange={setValue} minimum={0} maximum={100} step={25} />;
};
export const WithValidationErrors = () => {
  const [value, setValue] = React.useState(0);

  return (
    <RangeInput
      value={value}
      onValueChange={setValue}
      minimum={0}
      maximum={100}
      validationErrorMessages={value < 20 && ['value must be more than 20']}
    />
  );
};
