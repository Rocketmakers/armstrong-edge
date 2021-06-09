import * as React from 'react';

import { useGeneratedId } from '../../hooks/useGeneratedId';
import { ArmstrongId } from '../../types';
import { Arrays } from '../../utils/arrays';
import { ClassNames } from '../../utils/classNames';
import { Dropdown, IDropdownProps } from '../dropdown';
import { Icon, IconSet } from '../icon';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';

export interface IDropdownItem extends IIconWrapperProps<IconSet, IconSet> {
  /** (string) The text content of the dropdown item */
  content: string;

  /** (string) The string to be passed into onItemSelected */
  id: ArmstrongId;

  /** (HTMLLIElement) props to spread onto the div element for the dropdown item */
  htmlProps?: Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLLIElement>, HTMLLIElement>, 'onMouseUp' | 'ref'>;

  /** (string) a group to show this item under */
  group?: string;
}

export interface IDropdownItemProps extends IDropdownItem {
  /** ((event) => void) fired when clicking on the dropdown item */
  onMouseUp?: (event: React.MouseEvent) => void;

  /** ((event) => void) fired when clicking on the dropdown item */
  onClick: (event: React.MouseEvent) => void;

  /** ((event) => void) fired when the cursor enters the dropdown item */
  onMouseEnter: (event: React.MouseEvent) => void;

  /** (boolean) the item is selected by keyboard - adds a data-keyboard-selected attribute */
  isKeyboardSelected: boolean;

  /** (boolean) the item is selected - adds a data-selected attribute */
  isSelected: boolean;

  /** (string) the prefix for the html ID - used for aria stufff */
  idPrefix?: string;
}

export const DropdownItem = React.forwardRef<HTMLLIElement, IDropdownItemProps>(
  ({ content, htmlProps, onMouseUp, isKeyboardSelected, isSelected, onMouseEnter, leftIcon, rightIcon, onClick, id, idPrefix }, ref) => {
    return (
      <li
        {...htmlProps}
        ref={ref}
        className={ClassNames.concat('arm-dropdown-item', htmlProps?.className)}
        onMouseUp={(event) => {
          if (onMouseUp) {
            onMouseUp(event);
            event.preventDefault();
          }
        }}
        onMouseDown={(event) => event.stopPropagation()}
        onClick={onClick}
        data-keyboard-selected={isKeyboardSelected}
        data-selected={isSelected}
        onMouseEnter={onMouseEnter}
        id={`${idPrefix}_${id}`}
      >
        <IconWrapper leftIcon={leftIcon} rightIcon={rightIcon}>
          <p>{content}</p>
        </IconWrapper>
        {isSelected && <Icon iconSet="Icomoon" icon="checkmark3" className="arm-dropdown-item-checkmark" />}
      </li>
    );
  }
);

export interface IDropdownItemsProps extends Omit<IDropdownProps, 'dropdownContent'> {
  /** (IDropdownItem) The selectable items rendered inside the dropdown */
  items: IDropdownItem[];

  /** (content => void) Fired when the user selects and item in the dropdown */
  onItemSelected: (content: ArmstrongId) => void;

  /** (boolean) Whether the user should be able to use their keyboard to navigate through the dropdown while focused on something within children like an input */
  allowKeyboardNavigation?: boolean;

  /** (string) Currently selected items */
  currentValue?: ArmstrongId[];

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
  id: htmlId,
  ...dropdownProps
}) => {
  const itemRefs = React.useRef<Record<string, HTMLLIElement | null>>({});
  const [keyboardSelectedItemIndex, setKeyboardSelectedItemIndex] = React.useState(0);

  const groupedItems = React.useMemo(() => Arrays.arrayToArraysByKey(items, (item) => item.group || ''), [items]);

  /** Will be true when the user clicks until they move the mouse */
  const [hasBegunClick, setHasBegunClick] = React.useState(false);

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
            const selectedItem = Arrays.ArrayArrays.getAtIndex(keyboardSelectedItemIndex, groupedItems);

            if (selectedItem) {
              onItemSelected(selectedItem.id);

              if (closeOnSelection) {
                onOpenChange(false);
              }
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
      }
    },
    [keyboardSelectedItemIndex, onItemSelected, items, isOpen, allowKeyboardNavigation, onOpenChange, itemRefs, groupedItems]
  );

  const onMouseUpDropdownItem = React.useCallback(
    (id: ArmstrongId) => {
      if (closeOnSelection) {
        onOpenChange(false);
      }
      onItemSelected?.(id);
    },
    [closeOnSelection, onOpenChange, onItemSelected]
  );

  const id = useGeneratedId('arm_dd', htmlId);

  return (
    <Dropdown
      {...dropdownProps}
      className={ClassNames.concat('arm-dropdown-items', className)}
      contentClassName="arm-dropdown-items-content"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onKeyDown={onKeyDownEvent}
      onMouseDown={() => setHasBegunClick(true)}
      onMouseMove={() => setHasBegunClick(false)}
      tabIndex={focusableWrapper ? 0 : undefined}
      aria-haspopup="listbox"
      aria-labelledby={`${id}_item`}
      id={id}
      dropdownContent={
        <ul aria-labelledby={`${id}`} id={`${id}_list`} aria-activedescendant={`${id}_item_${currentValue?.[0]}`} role="listbox">
          {groupedItems.map((group, groupIndex) => (
            <React.Fragment key={group.key}>
              {group.key && (
                <li className="arm-dropdown-items-group-title">
                  <p>{group.key}</p>
                </li>
              )}

              {group.items.map((item, index) => {
                // get overall index in array
                const arrayIndex = Arrays.ArrayArrays.getArrayIndex(index, groupIndex, groupedItems);

                return (
                  <DropdownItem
                    {...item}
                    key={item.id}
                    onMouseUp={
                      !hasBegunClick
                        ? () => {
                            onMouseUpDropdownItem(item.id);
                          }
                        : undefined
                    }
                    idPrefix={`${id}_item`}
                    onClick={() => hasBegunClick && onMouseUpDropdownItem(item.id)}
                    onMouseEnter={() => setKeyboardSelectedItemIndex(arrayIndex)}
                    isKeyboardSelected={!!allowKeyboardNavigation && keyboardSelectedItemIndex === arrayIndex}
                    isSelected={!!currentValue?.includes(item.id)}
                    ref={(optionItemRef) => {
                      itemRefs.current[item.id] = optionItemRef;
                    }}
                  />
                );
              })}
            </React.Fragment>
          ))}
        </ul>
      }
    >
      {children}
    </Dropdown>
  );
};

DropdownItems.defaultProps = {
  closeOnSelection: true,
};
