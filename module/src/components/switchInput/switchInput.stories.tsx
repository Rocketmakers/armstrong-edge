import * as React from 'react';

import { Form } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { SwitchInput } from './switchInput.component';

/** metadata */

export default StoryUtils.createMeta(SwitchInput as any, 'Form', 'Switch Input', {});

/** component template */

// const Template = StoryUtils.createTemplate(SwitchInput);

/** stories */

export const Default = () => {
  const { formProp } = Form.use({ isSwitched: false });

  return <SwitchInput bind={formProp('isSwitched').bind()} />;
};
export const WithIcons = () => {
  const { formProp } = Form.use({ isSwitched: false });

  return (
    <SwitchInput
      bind={formProp('isSwitched').bind()}
      checkedIcon={IconUtils.getIconDefinition('Icomoon', 'checkmark3')}
      uncheckedIcon={IconUtils.getIconDefinition('Icomoon', 'cross2')}
    />
  );
};
export const WithIconsOnHandle = () => {
  const { formProp } = Form.use({ isSwitched: false });

  return (
    <SwitchInput
      bind={formProp('isSwitched').bind()}
      checkedIcon={IconUtils.getIconDefinition('Icomoon', 'checkmark3')}
      uncheckedIcon={IconUtils.getIconDefinition('Icomoon', 'cross2')}
      iconStyle="on-handle"
    />
  );
};
