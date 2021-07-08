import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { TabSelect } from './tabSelect.component';

/** metadata */

export default StoryUtils.createMeta(TabSelect as any, 'Form', 'Tab Select', {});

/** component template */

// const Template = StoryUtils.createTemplate(TabSelect);

/** stories */

export const Default = () => {
  const [value, setValue] = React.useState('');

  return (
    <label>
      Favourite colour
      <TabSelect tabs={[{ id: 'blue' }, { id: 'red' }, { id: 'green' }]} value={value} onValueChange={setValue} />
    </label>
  );
};
export const Pending = () => {
  const [value, setValue] = React.useState('');

  return (
    <label>
      Favourite colour
      <TabSelect tabs={[{ id: 'blue' }, { id: 'red' }, { id: 'green' }]} value={value} onValueChange={setValue} pending />
    </label>
  );
};
export const WithIcons = () => {
  const [value, setValue] = React.useState('');

  return (
    <label>
      Favourite colour
      <TabSelect
        tabs={[
          { id: 'blue', leftIcon: IconUtils.getIconDefinition('Icomoon', 'moon') },
          { id: 'red', leftIcon: IconUtils.getIconDefinition('Icomoon', 'star') },
          { id: 'green', leftIcon: IconUtils.getIconDefinition('Icomoon', 'sun') },
        ]}
        value={value}
        onValueChange={setValue}
      />
    </label>
  );
};
