import * as React from 'react';

import { useDidUpdateEffect, useEventListener, useHasTimeElapsed } from '../../hooks';
import { useGeneratedId } from '../../hooks/useGeneratedId';
import { ArmstrongId } from '../../types';
import { Arrays } from '../../utils/arrays';
import { ClassNames } from '../../utils/classNames';
import { Dropdown, IDropdownProps } from '../dropdown';
import { Icon, IconSet } from '../icon';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';

export interface IDropdownItem extends IIconWrapperProps<IconSet, IconSet> {
  /** The text content of the dropdown item */
  content: string;

  /** The string to be passed into onItemSelected */
  id: ArmstrongId;

  /** props to spread onto the div element for the dropdown item */
  htmlProps?: Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLLIElement>, HTMLLIElement>, 'onMouseUp' | 'ref'>;

  /** a group to show this item under */
  group?: string;
}

export interface IDropdownItemProps extends IDropdownItem {
  /** fired when clicking on the dropdown item */
  onMouseUp?: (event: React.MouseEvent) => void;

  /** fired when clicking on the dropdown item */
  onClick?: (event: React.MouseEvent) => void;

  /** fired when the cursor enters the dropdown item */
  onMouseEnter?: (event: React.MouseEvent) => void;

  /** the item is selected by keyboard - adds a data-keyboard-selected attribute */
  isKeyboardSelected: boolean;

  /** the item is selected - adds a data-selected attribute */
  isSelected: boolean;

  /** the prefix for the html ID - used for aria stuff */
  idPrefix?: string;
}

export const DropdownItem = React.forwardRef<HTMLLIElement, IDropdownItemProps>(
  ({ content, htmlProps, onMouseUp, isKeyboardSelected, isSelected, onMouseEnter, leftIcon, rightIcon, onClick, id, idPrefix }, ref) => {
    return (
      <li
        {...htmlProps}
        ref={ref}
        className={ClassNames.concat('arm-dropdown-item', htmlProps?.className)}
        onMouseUp={onMouseUp}
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
  /** The selectable items rendered inside the dropdown */
  items: IDropdownItem[];

  /** Fired when the user selects and item in the dropdown */
  onItemSelected: (content: ArmstrongId) => void;

  /** Whether the user should be able to use their keyboard to navigate through the dropdown while focused on something within children like an input */
  allowKeyboardNavigation?: boolean;

  /** Currently selected items */
  currentValue?: ArmstrongId[];

  /** adds tabIndex={0} to the wrapper element making it keyboard focusable without needing another focusable element inside it - needed to make keyboard interaction work without a focusable element inside it */
  focusableWrapper?: boolean;

  /** should close when an item is selected */
  closeOnSelection?: boolean;

  /** used to move the keyboard selection to an item that starts with the given term */
  searchTerm?: string;

  /** Text used if there are no items in the items array */
  noItemsText?: string;
}

/** A dropdown which renders a list of selectable options and allows keyboard navigation when its children are focused */
export const DropdownItems: React.FunctionComponent<IDropdownItemsProps> = ({
  items,
  allowKeyboardNavigation,
  onItemSelected,
  children,
  isOpen,
  currentValue,
  onKeyDown,
  closeOnSelection,
  searchTerm,
  className,
  focusableWrapper,
  onMouseDown,
  contentClassName,
  onOpenChange,
  id: htmlId,
  noItemsText,
  ...dropdownProps
}) => {
  const itemRefs = React.useRef<Record<string, HTMLLIElement | null>>({});
  const [keyboardSelectedItemIndex, setKeyboardSelectedItemIndex] = React.useState(0);

  const groupedItems = React.useMemo(() => Arrays.arrayToArraysByKey(items, (item) => item.group || ''), [items]);

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
  }, [items.length]);

  useDidUpdateEffect(() => {
    if (isOpen && searchTerm?.length) {
      const newIndex = items.findIndex((item) => item.content.startsWith(searchTerm));

      if (newIndex > -1) {
        setKeyboardSelectedItemIndex(newIndex);
      }
    }
  }, [searchTerm]);

  const onKeyDownEvent = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(event);

      if (!isOpen && allowKeyboardNavigation && event.key !== 'Tab' && event.key !== 'Escape') {
        onOpenChange(true);
      }

      if (isOpen && allowKeyboardNavigation) {
        switch (event.key) {
          case 'ArrowDown': {
            const newItemIndex = Math.min((items.length || 0) - 1, keyboardSelectedItemIndex + 1);
            setKeyboardSelectedItemIndex(newItemIndex);
            itemRefs.current?.[items[newItemIndex].id]?.scrollIntoView(false);
            event.preventDefault();
            break;
          }
          case 'ArrowUp': {
            const newItemIndex = Math.max(0, keyboardSelectedItemIndex - 1);
            setKeyboardSelectedItemIndex(newItemIndex);
            itemRefs.current?.[items[newItemIndex].id]?.scrollIntoView();
            event.preventDefault();
            break;
          }
          case 'Enter': {
            const selectedItem = Arrays.NestedArrays.getAtOverallIndex(keyboardSelectedItemIndex, groupedItems);

            if (selectedItem) {
              onItemSelected(selectedItem.id);

              if (closeOnSelection) {
                onOpenChange(false);
              }
            }
            event.preventDefault();
            break;
          }
          case 'Tab':
          case 'Escape': {
            onOpenChange(false);
            break;
          }
          default:
            break;
        }
      }
    },
    [keyboardSelectedItemIndex, onItemSelected, items, isOpen, allowKeyboardNavigation, onOpenChange, itemRefs, groupedItems]
  );

  useDidUpdateEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        itemRefs.current?.[items[keyboardSelectedItemIndex].id]?.scrollIntoView({ block: 'center' });
      });
    }
  }, [isOpen]);

  // used to ensure that clicks on the dropdown are not misread as a mouseUp on a dropdown item if the dropdown content is overlaying the click listener
  const [hasTimePassedSinceMouseDown, beginHasTimeElapsed, resetHasTimeElapsed] = useHasTimeElapsed(500);

  // track if is on initial click to enable click and drag behaviour on dropdowns
  const [isFirstClick, setIsFirstClick] = React.useState(false);

  const onMouseDownEvent = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      beginHasTimeElapsed();
      onMouseDown?.(event);
      setIsFirstClick(true);
    },
    [onMouseDown, beginHasTimeElapsed]
  );

  const onWindowMouseUpEvent = React.useCallback(() => {
    setIsFirstClick(false);
  }, []);

  useEventListener('mouseup', onWindowMouseUpEvent);

  const onSelectItem = React.useCallback(
    (id: ArmstrongId, ignoreHasTimePassed?: boolean) => {
      if (ignoreHasTimePassed || hasTimePassedSinceMouseDown) {
        if (closeOnSelection) {
          onOpenChange(false);
        }
        onItemSelected?.(id);
        resetHasTimeElapsed();
      }
    },
    [closeOnSelection, onOpenChange, onItemSelected, hasTimePassedSinceMouseDown]
  );

  const id = useGeneratedId('arm_dd', htmlId);

  return (
    <Dropdown
      {...dropdownProps}
      className={ClassNames.concat('arm-dropdown-items', className)}
      contentClassName={ClassNames.concat('arm-dropdown-items-content', contentClassName)}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onKeyDown={onKeyDownEvent}
      tabIndex={focusableWrapper ? 0 : undefined}
      aria-haspopup="listbox"
      aria-labelledby={`${id}_item`}
      onMouseDown={onMouseDownEvent}
      id={id}
      dropdownContent={
        <ul aria-labelledby={`${id}`} id={`${id}_list`} aria-activedescendant={`${id}_item_${currentValue?.[0]}`} role="listbox">
          {items.length === 0 ? (
            <li className="arm-dropdown-items-no-item-text">
              <p>{noItemsText}</p>
            </li>
          ) : (
            groupedItems.map((group, groupIndex) => (
              <React.Fragment key={group.key}>
                {group.key && (
                  <li className="arm-dropdown-items-group-title">
                    <p>{group.key}</p>
                  </li>
                )}

                {group.items.map((item, index) => {
                  // get overall index in array
                  const arrayIndex = Arrays.NestedArrays.getOverallIndex(index, groupIndex, groupedItems);

                  return (
                    <DropdownItem
                      {...item}
                      key={item.id + index.toString()}
                      onMouseUp={(event) => {
                        if (isFirstClick) {
                          onSelectItem(item.id);
                          event.preventDefault();
                        }
                      }}
                      idPrefix={`${id}_item`}
                      onClick={(event) => {
                        onSelectItem(item.id, true);
                        event.preventDefault();
                      }}
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
            ))
          )}
        </ul>
      }
    >
      {children}
    </Dropdown>
  );
};

DropdownItems.defaultProps = {
  closeOnSelection: true,
  noItemsText: 'No results',
};
