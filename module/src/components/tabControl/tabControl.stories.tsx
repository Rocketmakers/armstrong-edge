import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { TabControl } from './tabControl.component';

/** metadata */

export default StoryUtils.createMeta(TabControl, 'Layout', 'Tab Control', {});

/** component template */

// const Template = StoryUtils.createTemplate(TabControl);

/** stories */

export const Default = () => {
  const [value, setValue] = React.useState("I'm a tab");

  return (
    <>
      <TabControl
        currentTab={value}
        onTabChange={(id) => setValue(id as string)}
        tabs={[{ id: "I'm a tab" }, { id: "I'm another tab" }, { id: "I'm also a tab" }]}
      />
    </>
  );
};
export const WithIcons = () => {
  const [value, setValue] = React.useState("I'm a tab");

  return (
    <>
      <TabControl
        currentTab={value}
        onTabChange={(id) => setValue(id as string)}
        tabs={[
          { id: "I'm a tab", content: "I'm a tab", leftIcon: IconUtils.getIconDefinition('LinearIcons', 'sun') },
          {
            id: "I'm another tab",
            content: "I'm another tab",
            leftIcon: IconUtils.getIconDefinition('LinearIcons', 'moon'),
            rightIcon: IconUtils.getIconDefinition('LinearIcons', 'star'),
          },
          { id: "I'm also a tab", content: "I'm also a tab", leftIcon: IconUtils.getIconDefinition('LinearIcons', 'cloud') },
        ]}
      />
    </>
  );
};
export const IconsOnly = () => {
  const [value, setValue] = React.useState("I'm a tab");

  return (
    <>
      <TabControl
        currentTab={value}
        onTabChange={(id) => setValue(id as string)}
        tabs={[
          { id: "I'm a tab", leftIcon: IconUtils.getIconDefinition('LinearIcons', 'sun') },
          {
            id: "I'm another tab",
            rightIcon: IconUtils.getIconDefinition('LinearIcons', 'star'),
          },
          { id: "I'm also a tab", leftIcon: IconUtils.getIconDefinition('LinearIcons', 'cloud') },
        ]}
      />
    </>
  );
};
