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

export const Stretch = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dropdown isOpen={isOpen} onOpenChange={setIsOpen} dropdownContent={<p>I'm in a dropdown</p>} stretch>
      <Button rightIcon={IconUtils.getIconDefinition('Icomoon', 'arrow-down4')} minimalStyle>
        Click on me for dropdown
      </Button>
    </Dropdown>
  );
};

export const Alignments = () => {
  const [isOpenLeft, setIsOpenLeft] = React.useState(false);
  const [isOpenCentre, setIsOpenCentre] = React.useState(false);
  const [isOpenRight, setIsOpenRight] = React.useState(false);

  return (
    <div>
      <Dropdown isOpen={isOpenLeft} onOpenChange={setIsOpenLeft} dropdownContent={<p>I'm in a dropdown</p>} alignment="left">
        <Button rightIcon={IconUtils.getIconDefinition('Icomoon', 'arrow-down4')} minimalStyle>
          Left
        </Button>
      </Dropdown>

      <br />

      <Dropdown isOpen={isOpenCentre} onOpenChange={setIsOpenCentre} dropdownContent={<p>I'm in a dropdown</p>} alignment="centre">
        <Button rightIcon={IconUtils.getIconDefinition('Icomoon', 'arrow-down4')} minimalStyle>
          Centre
        </Button>
      </Dropdown>

      <br />

      <Dropdown isOpen={isOpenRight} onOpenChange={setIsOpenRight} dropdownContent={<p>I'm in a dropdown</p>} alignment="right">
        <Button rightIcon={IconUtils.getIconDefinition('Icomoon', 'arrow-down4')} minimalStyle>
          Right
        </Button>
      </Dropdown>
    </div>
  );
};
