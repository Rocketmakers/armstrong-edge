import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { DropdownItems } from './dropdownItems.component';

/** metadata */

export default StoryUtils.createMeta(DropdownItems as any, 'Form', 'Dropdown Items', {});

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
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      items={[
        { content: "I'm a thing", id: "I'm a thing" },
        { content: "I'm another thing", id: "I'm another thing" },
        { content: "I'm a third thing", id: "I'm a third thing" },
      ]}
      onItemSelected={(item) => {
        setIsOpen(false);
        setVal(item);
      }}
      allowKeyboard
    >
      <input
        placeholder="Type in me for some stuff"
        onFocus={() => setIsOpen(true)}
        onChange={(event) => {
          setIsOpen(true);
          setVal(event.currentTarget.value);
        }}
        value={val}
      />
    </DropdownItems>
  );
};
