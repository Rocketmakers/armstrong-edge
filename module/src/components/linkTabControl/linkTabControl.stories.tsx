import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { LinkTabControl } from './linkTabControl.component';

/** metadata */

export default StoryUtils.createMeta(LinkTabControl, 'Link', 'Link Tab Control', {});

/** component template */

// const Template = StoryUtils.createTemplate(TabControl);

/** stories */

export const Default = () => {
  return (
    <>
      <p>
        This demo doesn't fully work as, without adding a router as a dependency to this Storybook, we don't have access to a live location state -
        see Link docs for how this will work in your project
      </p>

      <LinkTabControl
        tabs={[
          { id: 'tab1', content: "I'm a tab", to: '#tab1' },
          {
            id: 'tab2',
            content: "I'm another tab",
            to: '#tab2',
          },
          { id: 'tab3', content: "I'm also a tab", to: '#tab3' },
        ]}
        isCurrentTab={({ hash }, { to }) => hash === to}
      />
    </>
  );
};

// export const WithIcons = () => {
//   return (
//     <>
//       <LinkTabControl
//         tabs={[
//           { id: 'tab1', content: "I'm a tab", leftIcon: IconUtils.getIconDefinition('LinearIcons', 'sun') },
//           {
//             id: 'tab2',
//             content: "I'm another tab",
//             leftIcon: IconUtils.getIconDefinition('LinearIcons', 'moon'),
//             rightIcon: IconUtils.getIconDefinition('LinearIcons', 'star'),
//           },
//           { id: 'tab3', content: "I'm also a tab", leftIcon: IconUtils.getIconDefinition('LinearIcons', 'cloud') },
//         ]}
//       />
//     </>
//   );
// };
// export const IconsOnly = () => {
//   const [value, setValue] = React.useState("I'm a tab");

//   return (
//     <>
//       <LinkTabControl
//         currentTab={value}
//         onTabChange={(id) => setValue(id as string)}
//         tabs={[
//           { id: "I'm a tab", leftIcon: IconUtils.getIconDefinition('LinearIcons', 'sun') },
//           {
//             id: "I'm another tab",
//             rightIcon: IconUtils.getIconDefinition('LinearIcons', 'star'),
//           },
//           { id: "I'm also a tab", leftIcon: IconUtils.getIconDefinition('LinearIcons', 'cloud') },
//         ]}
//       />
//     </>
//   );
// };
