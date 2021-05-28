import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { DropdownButton } from './dropdownButton.component';

/** metadata */

export default StoryUtils.createMeta(DropdownButton as any, 'Button', 'Dropdown Button', {});

/** component template */

const Template = StoryUtils.createTemplate(DropdownButton);

/** stories */

export const Default = () => {
  return <DropdownButton dropdownContent={<p>I'm in a dropdownButton</p>}>Click on me for dropdown button</DropdownButton>;
};
