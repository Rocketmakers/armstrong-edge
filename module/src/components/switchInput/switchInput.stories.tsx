import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { SwitchInput } from './switchInput.component';

/** metadata */

export default StoryUtils.createMeta(SwitchInput as any, 'Form', 'Switch Input', {});

/** component template */

const Template = StoryUtils.createTemplate(SwitchInput);

/** stories */

export const Default = () => {
  const [checked, setChecked] = React.useState(false);

  return <SwitchInput checked={checked} onChange={setChecked} />;
};
export const WithIcons = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <SwitchInput
      checked={checked}
      onChange={setChecked}
      checkedIcon={IconUtils.getIconDefinition('Icomoon', 'checkmark3')}
      uncheckedIcon={IconUtils.getIconDefinition('Icomoon', 'cross2')}
    />
  );
};
export const WithIconsOnHandle = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <SwitchInput
      checked={checked}
      onChange={setChecked}
      checkedIcon={IconUtils.getIconDefinition('Icomoon', 'checkmark3')}
      uncheckedIcon={IconUtils.getIconDefinition('Icomoon', 'cross2')}
      iconStyle="on-handle"
    />
  );
};
