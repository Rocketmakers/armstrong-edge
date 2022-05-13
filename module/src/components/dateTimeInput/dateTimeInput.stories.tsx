import * as React from 'react';

import { Form } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { DateTimeInput } from './dateTimeInput.component';

/** metadata */

export default StoryUtils.createMeta(DateTimeInput, 'Form', 'DateTime Input', {});

/** component template */

// const Template = StoryUtils.createTemplate(DateTimeInput);

/** stories */

export const Default = () => {
  const { formProp } = Form.use({ date: undefined as string });

  return <DateTimeInput bind={formProp('date').bind()} />;
};

export const WithIcons = () => {
  const { formProp } = Form.use({ date: undefined });

  return (
    <DateTimeInput
      additionalTimeInputProps={{ leftIcon: IconUtils.getIconDefinition('LinearIcons', 'clock') }}
      additionalCalendarInputProps={{ leftIcon: IconUtils.getIconDefinition('LinearIcons', 'calendar-full') }}
      bind={formProp('date').bind()}
    />
  );
};

export const Pending = () => {
  const { formProp } = Form.use({ date: undefined });

  return <DateTimeInput pending bind={formProp('date').bind()} />;
};

export const ValidationErrors = () => {
  const { formProp } = Form.use({ date: undefined });

  return <DateTimeInput validationErrorMessages={['Uh oh', "That's way too early dude"]} bind={formProp('date').bind()} />;
};
