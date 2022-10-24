import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { TextInput } from '..';
import { LabelWrapper } from './labelWrapper.component';

/** metadata */

export default StoryUtils.createMeta(LabelWrapper, 'FormUtils', 'Label Wrapper', {});

/** component template */

// const Template = StoryUtils.createTemplate(Image);

/** stories */

export const Default = () => {
  return (
    <LabelWrapper labelContent="I'm a label">
      <TextInput />
    </LabelWrapper>
  );
};
