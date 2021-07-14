import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { Button } from '../button';
import { IconUtils } from '../icon/icons.utils';
import { Dropdown } from './dropdown.component';

/** metadata */

export default StoryUtils.createMeta(Dropdown as any, 'Layout', 'Dropdown', {});

/** component template */

// const Template = StoryUtils.createTemplate(Dropdown);

/** stories */

export const Default = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dropdown isOpen={isOpen} onOpenChange={setIsOpen} dropdownContent={<p>I'm in a dropdown</p>}>
      <Button rightIcon={IconUtils.getIconDefinition('Icomoon', 'arrow-down4')} minimalStyle>
        Click on me for dropdown
      </Button>
    </Dropdown>
  );
};
