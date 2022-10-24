import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { Button } from '../button';
import { Group } from './group.component';

/** metadata */

export default StoryUtils.createMeta(Group, 'Layout', 'Group', {});

/** component template */

// const Template = StoryUtils.createTemplate(Group);

/** stories */

export const Default = () => {
  return (
    <Group>
      <Button>Do thing</Button>
      <Button>Do another thing</Button>
    </Group>
  );
};

export const WithTitle = () => {
  return (
    <Group title="Actions">
      <Button>Do thing</Button>
      <Button>Do another thing</Button>
    </Group>
  );
};
