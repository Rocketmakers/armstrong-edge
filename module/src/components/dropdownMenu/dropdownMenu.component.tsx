import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import * as React from 'react';

import { concat } from '../../utils';

import './dropdownMenu.theme.css';

/**
 * Represents a dropdown menu item.
 */
export interface IDropdownMenuItem {
  /**
   * The label content of the menu item.
   */
  label?: React.ReactNode;

  /**
   * React node to be rendered on the left side of the label.
   */
  leftOverlay?: React.ReactNode;

  /**
   * React node to be rendered on the right side of the label.
   */
  rightOverlay?: React.ReactNode;

  /**
   * Function to be called when the menu item is clicked, receives the menu item index and the native event.
   */
  onClick?: (index: number, event: Event) => void;

  /**
   * Specifies whether the menu item is disabled.
   */
  disabled?: boolean;

  /**
   * Custom class name for the menu item.
   */
  className?: string;

  /**
   * Specifies whether to add a separator line under the menu item.
   */
  addSeparatorUnder?: boolean;
}

/**
 * Represents the props for a dropdown menu component.
 * @extends {React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement>}
 * @template side - The preferred side of the trigger to render against when open.
 * @template align - The preferred alignment against the trigger. May change when collisions occur.
 * @template sticky - The sticky behavior on the align axis. "partial" will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst "always" will keep the content in the boundary regardless.
 */
export interface IDropdownMenuProps
  extends React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement>,
    Pick<React.ComponentProps<typeof RadixDropdownMenu['Content']>, 'side' | 'align' | 'sticky'>,
    Pick<React.ComponentProps<typeof RadixDropdownMenu['Root']>, 'open' | 'defaultOpen' | 'onOpenChange' | 'modal'> {
  /**
   * Array of dropdown menu items, or a custom React node to render.
   */
  items?: IDropdownMenuItem[] | React.ReactNode;

  /**
   * Specifies whether to show an arrow indicator next on the menu.
   */
  showArrow?: boolean;

  /**
   * Optional header content to render at the bottom of the dropdown menu.
   */
  headerContent?: React.ReactNode;

  /**
   * Optional footer content to render at the bottom of the dropdown menu.
   */
  footerContent?: React.ReactNode;
}

export const DropdownMenu = (props: React.PropsWithChildren<IDropdownMenuProps & { ref?: React.Ref<HTMLDivElement> }>) => {
  const {
    items,
    children,
    className,
    showArrow,
    open,
    defaultOpen,
    onOpenChange,
    footerContent,
    headerContent,
    disabled,
    modal,
    ref,
    ...nativeProps
  } = props;
  const [internalOpen, setInternalOpen] = React.useState(open ?? defaultOpen ?? false);
  React.useEffect(() => {
    if (open !== undefined) {
      setInternalOpen(open);
    }
  }, [open]);
  const onOpenChangeInner = React.useCallback(
    (isOpen: boolean) => {
      if (onOpenChange) {
        onOpenChange(isOpen);
      } else {
        setInternalOpen(isOpen);
      }
    },
    [onOpenChange]
  );
  const parsedContent = React.useMemo(() => {
    if (React.isValidElement(items)) {
      return items;
    }
    if (Array.isArray(items)) {
      return items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <RadixDropdownMenu.Item
              className={concat(
                item.className,
                'arm-dropdown-menu-item',
                item.onClick && 'arm-dropdown-menu-item-clickable'
              )}
              disabled={item.disabled}
              onSelect={
                item.onClick &&
                (event => {
                  setInternalOpen(false);
                  item.onClick?.(index, event);
                })
              }
            >
              {item.leftOverlay && <div className="arm-dropdown-menu-item-left-overlay">{item.leftOverlay}</div>}
              {item.label && <div className="arm-dropdown-menu-item-label">{item.label}</div>}
              {item.rightOverlay && <div className="arm-dropdown-menu-item-right-overlay">{item.rightOverlay}</div>}
            </RadixDropdownMenu.Item>
            {item.addSeparatorUnder && <RadixDropdownMenu.Separator className="arm-dropdown-menu-separator" />}
          </React.Fragment>
        );
      });
    }
    throw new Error('Invalid content passed to DropdownMenu. Must be an array of items or a single React element.');
  }, [items]);

  return (
    <RadixDropdownMenu.Root
      open={internalOpen}
      onOpenChange={onOpenChangeInner}
      defaultOpen={defaultOpen}
      modal={modal}
    >
      {children && (
        <RadixDropdownMenu.Trigger asChild disabled={disabled}>
          {children}
        </RadixDropdownMenu.Trigger>
      )}
      <RadixDropdownMenu.Content
        {...nativeProps}
        data-has-arrow={!!showArrow}
        className={concat(className, 'arm-dropdown-menu-content')}
        ref={ref}
      >
        {!footerContent && !headerContent ? (
          parsedContent
        ) : (
          <>
            {headerContent && <div className="arm-dropdown-menu-header">{headerContent}</div>}
            <div className="arm-dropdown-menu-items">{parsedContent}</div>
            {footerContent && <div className="arm-dropdown-menu-footer">{footerContent}</div>}
          </>
        )}
        {showArrow && <div className="arm-dropdown-menu-arrow" data-testid="arm-dropdown-arrow" />}
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Root>
  );
};

DropdownMenu.displayName = 'DropdownMenu';
