import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { DropdownItems } from './dropdownItems.component';

/** metadata */

export default StoryUtils.createMeta(DropdownItems as any, 'Layout', 'Dropdown Items', {});

/** component template */

const Template = StoryUtils.createTemplate(DropdownItems);

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
      <p onClick={() => setIsOpen(true)}>Click on me for dropdown items</p>
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
        setVal(item);
      }}
      allowKeyboardNavigation
      focusableWrapper
    >
      <p>Click on me for some stuff, then use the up and down arrows while I'm focused</p>
      {/* <input
        placeholder="Type in me for some stuff"
        onFocus={() => setIsOpen(true)}
        onChange={(event) => {
          setIsOpen(true);
          setVal(event.currentTarget.value);
        }}
        value={val}
      /> */}
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
        if (val.includes(item)) {
          setVal(val.filter((a) => a !== item));
        } else {
          setVal([...val, item]);
        }
      }}
      closeOnSelection={false}
      allowKeyboardNavigation
      focusableWrapper
    >
      <p>Click on me for some stuff, then use the up and down arrows while I'm focused</p>
      {/* <input
        placeholder="Type in me for some stuff"
        onFocus={() => setIsOpen(true)}
        onChange={(event) => {
          setIsOpen(true);
          setVal(event.currentTarget.value);
        }}
        value={val}
      /> */}
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
      <p onClick={() => setIsOpen(true)}>Click on me for dropdown items</p>
    </DropdownItems>
  );
};
