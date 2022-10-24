import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { RadioInput } from './radioInput.component';

/** metadata */

export default StoryUtils.createMeta(RadioInput as any, 'Form', 'Radio Input', {});

/** component template */

// const Template = StoryUtils.createTemplate(RadioInput);

/** stories */

export const Default = () => {
  const [value, setValue] = React.useState(false);

  return <RadioInput checked={value} onChange={setValue} name="Thing" />;
};

export const WithIcons = () => {
  const [value, setValue] = React.useState(false);

  return (
    <RadioInput
      checked={value}
      onChange={setValue}
      name="Thing"
      leftIcon={IconUtils.getIconDefinition('Icomoon', 'chicken')}
      rightIcon={IconUtils.getIconDefinition('Icomoon', 'profile')}
    />
  );
};
