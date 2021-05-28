import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { Dropdown, IDropdownProps } from '../dropdown';

export interface IDropdownItem {
  /** The text content of the dropdown item */
  content: string;

  /** The actually bound string */
  id: string;

  /** (HTMLDivElement) props to spread onto the div element for the dropdown item */
  htmlProps?: Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onClick' | 'ref'>;
}

export interface IDropdownItemProps extends IDropdownItem {
  /** ((event) => void) fired when clicking on the dropdown item */
  onClick: (event: React.MouseEvent) => void;

  /** (boolean) the item is selected by keyboard - adds a data-keyboard-selected attribute */
  isKeyboardSelected: boolean;

  /** (boolean) the item is selected - adds a data-selected attribute */
  isSelected: boolean;
}

export const DropdownItem = React.forwardRef<HTMLDivElement, IDropdownItemProps>(
  ({ content, htmlProps, onClick, isKeyboardSelected, isSelected }, ref) => {
    return (
      <div
        {...htmlProps}
        ref={ref}
        className={ClassNames.concat('arm-dropdown-option', htmlProps?.className)}
        onClick={onClick}
        data-keyboard-selected={isKeyboardSelected}
        data-selected={isSelected}
      >
        <p>{content}</p>
      </div>
    );
  }
);

export interface IDropdownItemsProps extends Omit<IDropdownProps, 'dropdownContent'> {
  /** (IDropdownItem) The selectable items rendered inside the dropdown */
  items: IDropdownItem[];

  /** (content => void) Fired when the user selects and item in the dropdown */
  onItemSelected: (content: string) => void;

  /** (boolean) Whether the user should be able to use their keyboard to navigate through the dropdown while focused on something within children like an input */
  allowKeyboard?: boolean;

  /** (string) Currently selected items */
  currentValue?: string[];
}

export const DropdownItems: React.FunctionComponent<IDropdownItemsProps> = ({
  items,
  allowKeyboard,
  onItemSelected,
  children,
  isOpen,
  currentValue,
  onKeyDown,
  className,
  onOpenChange,
  ...dropdownProps
}) => {
  const itemRefs = React.useRef<Record<string, HTMLDivElement | null>>({});
  const [keyboardSelectedItemIndex, setKeyboardSelectedItemIndex] = React.useState(0);

  React.useLayoutEffect(() => {
    if (!isOpen) {
      setKeyboardSelectedItemIndex(0);
    }
  }, [isOpen]);

  React.useLayoutEffect(() => {
    setKeyboardSelectedItemIndex(0);
  }, [items]);

  const onKeyDownEvent = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(event);

      if (isOpen && allowKeyboard) {
        switch (event.key) {
          case 'ArrowDown': {
            const newItemIndex = Math.min((items.length || 0) - 1, keyboardSelectedItemIndex + 1);
            setKeyboardSelectedItemIndex(newItemIndex);
            itemRefs.current?.[items[newItemIndex].content]?.scrollIntoView({ behavior: 'smooth' });
            onOpenChange(true);
            break;
          }
          case 'ArrowUp': {
            const newItemIndex = Math.max(0, keyboardSelectedItemIndex - 1);
            setKeyboardSelectedItemIndex(newItemIndex);
            itemRefs.current?.[items[newItemIndex].content]?.scrollIntoView({ behavior: 'smooth' });
            onOpenChange(true);
            break;
          }
          case 'Enter': {
            const selectedItem = items[keyboardSelectedItemIndex];
            onItemSelected(selectedItem.id);
            onOpenChange(false);
            break;
          }
          default: {
            break;
          }
        }
      }
    },
    [keyboardSelectedItemIndex, onItemSelected, items, isOpen, allowKeyboard, onOpenChange]
  );

  return (
    <Dropdown
      {...dropdownProps}
      className={ClassNames.concat('arm-dropdown-items', className)}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onKeyDown={onKeyDownEvent}
      dropdownContent={
        <>
          {items.map((item, index) => (
            <DropdownItem
              {...item}
              key={item.content + index}
              onClick={() => onItemSelected(item.id)}
              isKeyboardSelected={!!allowKeyboard && keyboardSelectedItemIndex === index}
              isSelected={!!currentValue?.includes(item.content)}
              ref={(optionItemRef) => {
                itemRefs.current[item.content] = optionItemRef;
              }}
            />
          ))}
        </>
      }
    >
      {children}
    </Dropdown>
  );
};
