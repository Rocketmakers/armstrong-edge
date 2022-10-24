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
      <TabControl currentTab={value} onTabChange={(id) => setValue(id as string)} tabs={["I'm a tab", "I'm another tab", "I'm also a tab"]} />
    </>
  );
};

export const DifferentIdBoundToContent = () => {
  const [value, setValue] = React.useState("I'm a tab");

  return (
    <>
      <TabControl
        currentTab={value}
        onTabChange={(id) => setValue(id as string)}
        tabs={[
          { id: 'tab1', content: "I'm a tab" },
          {
            id: 'tab2',
            content: "I'm another tab",
          },
          { id: 'tab3', content: "I'm also a tab" },
        ]}
      />
    </>
  );
};

export const WithIcons = () => {
  const [value, setValue] = React.useState('tab1');

  return (
    <>
      <TabControl
        currentTab={value}
        onTabChange={(id) => setValue(id as string)}
        tabs={[
          { id: 'tab1', content: "I'm a tab", leftIcon: IconUtils.getIconDefinition('LinearIcons', 'sun') },
          {
            id: 'tab2',
            content: "I'm another tab",
            leftIcon: IconUtils.getIconDefinition('LinearIcons', 'moon'),
            rightIcon: IconUtils.getIconDefinition('LinearIcons', 'star'),
          },
          { id: 'tab3', content: "I'm also a tab", leftIcon: IconUtils.getIconDefinition('LinearIcons', 'cloud') },
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
