import * as React from 'react';

import { Form } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { TimeInput } from './timeInput.component';

/** metadata */

export default StoryUtils.createMeta(TimeInput, 'Form', 'Time Input', {});

/** component template */

// const Template = StoryUtils.createTemplate(TimeInput);

/** stories */

export const Default = () => {
  const { formProp } = Form.use({ date: undefined });

  return <TimeInput bind={formProp('date').bind()} />;
};

export const WithIcons = () => {
  const { formProp } = Form.use({ date: undefined });

  return <TimeInput leftIcon={IconUtils.getIconDefinition('LinearIcons', 'clock')} bind={formProp('date').bind() as any} />;
};

export const Pending = () => {
  const { formProp } = Form.use({ date: undefined });

  return <TimeInput pending bind={formProp('date').bind()} />;
};

export const ValidationErrors = () => {
  const { formProp } = Form.use({ date: undefined });

  return <TimeInput validationErrorMessages={['Uh oh', "That's way too early dude"]} bind={formProp('date').bind() as any} />;
};
