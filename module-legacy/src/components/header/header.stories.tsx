import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { Button } from '../button/button.component';
import { DropdownButton } from '../dropdownButton/dropdownButton.component';
import { Group } from '../group/group.component';
import { IconUtils } from '../icon/icons.utils';
import { Header } from './header.component';

/** metadata */

export default StoryUtils.createMeta(Header as any, 'Layout', 'Header', {});

/** component template */

const Template = StoryUtils.createTemplate(Header);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, { children: <p>I'm in the header</p> });
export const DontPortal = StoryUtils.cloneTemplate(Template, { children: <p>I'm in the header</p>, shouldPortal: false });

export const Complex = () => {
  return (
    <Header>
      <Group>
        <Button minimalStyle>Something</Button>

        <DropdownButton minimalStyle dropdownContent={<Button minimalStyle>Something deeper</Button>}>
          Something else
        </DropdownButton>

        <DropdownButton
          rightIcon={IconUtils.getIconDefinition('Icomoon', 'user')}
          minimalStyle
          dropdownContent={
            <>
              <p>User McUserface</p>
              <br />
              <Group>
                <Button minimalStyle leftIcon={IconUtils.getIconDefinition('Icomoon', 'cog')}>
                  Settings
                </Button>
                <Button minimalStyle leftIcon={IconUtils.getIconDefinition('Icomoon', 'exit')}>
                  Log out
                </Button>
              </Group>
            </>
          }
        ></DropdownButton>
      </Group>
    </Header>
  );
};
