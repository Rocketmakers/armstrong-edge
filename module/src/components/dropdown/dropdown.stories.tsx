import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { Dropdown } from './dropdown.component';

/** metadata */

export default StoryUtils.createMeta(Dropdown as any, 'Form', 'Dropdown', {});

/** component template */

const Template = StoryUtils.createTemplate(Dropdown);

/** stories */

export const Default = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)} dropdownContent={<p>I'm in a dropdown</p>}>
      <p onClick={() => setIsOpen(true)}>Click on me for dropdown</p>
    </Dropdown>
  );
};
