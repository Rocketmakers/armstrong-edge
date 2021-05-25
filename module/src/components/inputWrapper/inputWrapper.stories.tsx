import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { InputWrapper } from './inputWrapper.component';

/** metadata */

export default StoryUtils.createMeta(InputWrapper, 'FormUtils', 'Input Wrapper', {});

/** component template */

const Template = StoryUtils.createTemplate(InputWrapper);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {});
export const WithValidationErrors = StoryUtils.cloneTemplate(Template, {
  validationErrorMessages: ['Uh oh sinky'],
  children: <div style={{ flexGrow: 1 }} />,
});
