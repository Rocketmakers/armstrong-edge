import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { Dropdown, IDropdownProps } from '../dropdown';
import { Icon, IconSet, IIcon } from '../icon';

export interface IDropdownItem {
  /** (string) The text content of the dropdown item */
  content: string;

  /** (string) The string to be passed into onItemSelected */
  id: string;

  /** (IIcon) the icon to render */
  icon?: IIcon<IconSet>;

  /** (HTMLDivElement) props to spread onto the div element for the dropdown item */
  htmlProps?: Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onMouseUp' | 'ref'>;
}

export interface IDropdownItemProps extends IDropdownItem {
  /** ((event) => void) fired when clicking on the dropdown item */
  onMouseUp: (event: React.MouseEvent) => void;

  /** ((event) => void) fired when the cursor enters the dropdown item */
  onMouseEnter: (event: React.MouseEvent) => void;

  /** (boolean) the item is selected by keyboard - adds a data-keyboard-selected attribute */
  isKeyboardSelected: boolean;

  /** (boolean) the item is selected - adds a data-selected attribute */
  isSelected: boolean;
}

export const DropdownItem = React.forwardRef<HTMLDivElement, IDropdownItemProps>(
  ({ content, htmlProps, onMouseUp, isKeyboardSelected, isSelected, onMouseEnter }, ref) => {
    return (
      <div
        {...htmlProps}
        ref={ref}
        className={ClassNames.concat('arm-dropdown-item', htmlProps?.className)}
        onMouseUp={onMouseUp}
        data-keyboard-selected={isKeyboardSelected}
        data-selected={isSelected}
        onMouseEnter={onMouseEnter}
        onTouchEnd={(event) => event.preventDefault()}
      >
        <p>{content}</p>
        {isSelected && <Icon iconSet="Icomoon" icon="checkmark3" className="arm-dropdown-item-checkmark" />}
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
  allowKeyboardNavigation?: boolean;

  /** (string) Currently selected items */
  currentValue?: string[];

  /** (boolean) adds tabIndex={0} to the wrapper element making it keyboard focusable without needing another focusable element inside it - needed to make keyboard interaction work without a focusable element inside it */
  focusableWrapper?: boolean;

  /** (boolean) should close when an item is selected */
  closeOnSelection?: boolean;
}

export const DropdownItems: React.FunctionComponent<IDropdownItemsProps> = ({
  items,
  allowKeyboardNavigation,
  onItemSelected,
  children,
  isOpen,
  currentValue,
  onKeyDown,
  closeOnSelection,
  className,
  focusableWrapper,
  onOpenChange,
  ...dropdownProps
}) => {
  const itemRefs = React.useRef<Record<string, HTMLDivElement | null>>({});
  const [keyboardSelectedItemIndex, setKeyboardSelectedItemIndex] = React.useState(0);

  const resetKeyboardSelectedItemIndex = React.useCallback(() => {
    const selectedItemIndex = items.findIndex((item) => currentValue?.includes(item.id));
    setKeyboardSelectedItemIndex(selectedItemIndex > -1 ? selectedItemIndex : 0);
  }, [currentValue]);

  React.useLayoutEffect(() => {
    if (!isOpen) {
      resetKeyboardSelectedItemIndex();
    }
  }, [isOpen]);

  React.useLayoutEffect(() => {
    resetKeyboardSelectedItemIndex();
  }, [items?.length]);

  const onKeyDownEvent = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(event);

      if (isOpen && allowKeyboardNavigation) {
        switch (event.key) {
          case 'ArrowDown': {
            const newItemIndex = Math.min((items.length || 0) - 1, keyboardSelectedItemIndex + 1);
            setKeyboardSelectedItemIndex(newItemIndex);
            itemRefs.current?.[items[newItemIndex].id]?.scrollIntoView(false);
            onOpenChange(true);
            event.preventDefault();
            break;
          }
          case 'ArrowUp': {
            const newItemIndex = Math.max(0, keyboardSelectedItemIndex - 1);
            setKeyboardSelectedItemIndex(newItemIndex);
            itemRefs.current?.[items[newItemIndex].id]?.scrollIntoView();
            onOpenChange(true);
            event.preventDefault();
            break;
          }
          case 'Enter': {
            const selectedItem = items[keyboardSelectedItemIndex];
            onItemSelected(selectedItem.id);
            if (closeOnSelection) {
              onOpenChange(false);
            }
            event.preventDefault();
            break;
          }
          case 'Tab': {
            onOpenChange(false);
            break;
          }
          default: {
            break;
          }
        }

        if (event.key.match(/\w/)) {
          const itemIndex = items.findIndex((item) => item.content[0] === event.key);
          if (itemIndex > -1) {
            setKeyboardSelectedItemIndex(itemIndex);
          }
        }
      }
    },
    [keyboardSelectedItemIndex, onItemSelected, items, isOpen, allowKeyboardNavigation, onOpenChange, itemRefs]
  );

  const onMouseUpDropdownItem = React.useCallback(
    (id: string) => {
      if (closeOnSelection) {
        onOpenChange(false);
      }
      onItemSelected?.(id);
    },
    [closeOnSelection, onOpenChange, onItemSelected]
  );

  return (
    <Dropdown
      {...dropdownProps}
      className={ClassNames.concat('arm-dropdown-items', className)}
      contentClassName="arm-dropdown-items-content"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onKeyDown={onKeyDownEvent}
      tabIndex={focusableWrapper ? 0 : undefined}
      dropdownContent={
        <>
          {items.map((item, index) => (
            <DropdownItem
              {...item}
              key={item.id}
              onMouseUp={() => onMouseUpDropdownItem(item.id)}
              onMouseEnter={() => setKeyboardSelectedItemIndex(index)}
              isKeyboardSelected={!!allowKeyboardNavigation && keyboardSelectedItemIndex === index}
              isSelected={!!currentValue?.includes(item.id)}
              ref={(optionItemRef) => {
                itemRefs.current[item.id] = optionItemRef;
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

DropdownItems.defaultProps = {
  closeOnSelection: true,
};
