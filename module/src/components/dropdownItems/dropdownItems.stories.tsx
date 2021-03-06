import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { Button, DropdownItems, IconUtils } from '..';

/** metadata */

export default StoryUtils.createMeta(DropdownItems as any, 'Layout', 'Dropdown Items', {});

/** component template */

// const Template = StoryUtils.createTemplate(DropdownItems);

/** stories */

export const Default = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownItems
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      items={[
        { content: "I'm a thing", id: 'a' },
        { content: "I'm another thing", id: 'b' },
        { content: "I'm a third thing", id: 'c' },
      ]}
      onItemSelected={(item) => {
        setIsOpen(false);
        // eslint-disable-next-line no-alert
        alert(item);
      }}
    >
      <Button rightIcon={IconUtils.getIconDefinition('Icomoon', 'arrow-down4')} minimalStyle>
        Click on me for dropdown items
      </Button>
    </DropdownItems>
  );
};
export const WithKeyboardNavigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [val, setVal] = React.useState('');

  return (
    <DropdownItems
      currentValue={[val]}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      items={[
        { content: "I'm a thing", id: "I'm a thing" },
        { content: "I'm another thing", id: "I'm another thing" },
        { content: "I'm a third thing", id: "I'm a third thing" },
      ]}
      onItemSelected={(item) => {
        setVal(item as any as string);
      }}
      allowKeyboardNavigation
      focusableWrapper
    >
      <Button rightIcon={IconUtils.getIconDefinition('Icomoon', 'arrow-down4')} minimalStyle>
        Click on me for some stuff, then use the up and down arrows while I'm focused
      </Button>
    </DropdownItems>
  );
};
export const MultipleSelected = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [val, setVal] = React.useState<string[]>([]);

  return (
    <DropdownItems
      currentValue={val}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      items={[
        { content: "I'm a thing", id: "I'm a thing" },
        { content: "I'm another thing", id: "I'm another thing" },
        { content: "I'm a third thing", id: "I'm a third thing" },
      ]}
      onItemSelected={(item) => {
        if (val.includes(item as string)) {
          setVal(val.filter((a) => a !== item));
        } else {
          setVal([...val, item as string]);
        }
      }}
      closeOnSelection={false}
      allowKeyboardNavigation
      focusableWrapper
    >
      <Button rightIcon={IconUtils.getIconDefinition('Icomoon', 'arrow-down4')} minimalStyle>
        Click on me for some stuff, then use the up and down arrows while I'm focused
      </Button>
    </DropdownItems>
  );
};
export const Scrolling = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownItems
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      items={[
        { content: "I'm a thing", id: 'a' },
        { content: "I'm another thing", id: 'b' },
        { content: "I'm a third thing", id: 'c' },
        { content: "I'm a thing", id: 'd' },
        { content: "I'm another thing", id: 'e' },
        { content: "I'm a third thing", id: 'f' },
        { content: "I'm a thing", id: 'g' },
        { content: "I'm another thing", id: 'h' },
        { content: "I'm a third thing", id: 'i' },
        { content: "I'm a thing", id: 'j' },
        { content: "I'm another thing", id: 'k' },
        { content: "I'm a third thing", id: 'l' },
      ]}
      onItemSelected={(item) => {
        setIsOpen(false);
        // eslint-disable-next-line no-alert
        alert(item);
      }}
      allowKeyboardNavigation
      focusableWrapper
    >
      <Button rightIcon={IconUtils.getIconDefinition('Icomoon', 'arrow-down4')} minimalStyle>
        Click on me for dropdown items
      </Button>
    </DropdownItems>
  );
};
export const GroupedItems = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownItems
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      items={[
        { content: "I'm a thing", id: 'a', group: 'Good things' },
        { content: "I'm another thing", id: 'b', group: 'Good things' },
        { content: "I'm a third thing", id: 'c', group: 'Bad things' },
      ]}
      onItemSelected={(item) => {
        setIsOpen(false);
        // eslint-disable-next-line no-alert
        alert(item);
      }}
    >
      <Button rightIcon={IconUtils.getIconDefinition('Icomoon', 'arrow-down4')} minimalStyle>
        Click on me for dropdown items
      </Button>
    </DropdownItems>
  );
};
export const CustomContent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownItems
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      items={[
        { content: <Button>Check me out</Button>, id: 'a', group: 'Good things' },
        { content: <Button>No check me out</Button>, id: 'b', group: 'Good things' },
      ]}
      onItemSelected={(item) => {
        setIsOpen(false);
        // eslint-disable-next-line no-alert
        alert(item);
      }}
    >
      <Button rightIcon={IconUtils.getIconDefinition('Icomoon', 'arrow-down4')} minimalStyle>
        Click on me for dropdown items
      </Button>
    </DropdownItems>
  );
};
