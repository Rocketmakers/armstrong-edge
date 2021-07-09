import * as React from 'react';

import { ArmstrongId } from '../../types';
import { ClassNames } from '../../utils/classNames';
import { Button } from '../button';
import { IconSet } from '../icon';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';

export interface ITab<Id extends ArmstrongId> extends IIconWrapperProps<IconSet, IconSet> {
  /** The ID of the tab, to be passed into onTabChange */
  id: Id;

  /** The text to render inside the tab, falls back to id if not given and no icon is set */
  content?: string;
}

export interface ITabControlTabProps<Id extends ArmstrongId> extends ITab<Id>, Omit<React.HTMLAttributes<HTMLButtonElement>, 'id' | 'ref'> {
  /** adds a data-is-current data attribute */
  isCurrent?: boolean;
}

/** A single tab used in the TabControl component */
export const TabControlTab = React.forwardRef(
  <Id extends ArmstrongId>(
    { onClick, isCurrent, id, content, className, leftIcon, rightIcon, ...nativeProps }: ITabControlTabProps<Id>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const computedContent = content ?? (!leftIcon && !rightIcon && id);

    return (
      <Button
        {...nativeProps}
        className={ClassNames.concat('arm-tab-control-tab', className)}
        onClick={onClick}
        data-is-current={isCurrent}
        ref={ref}
        minimalStyle
      >
        <IconWrapper leftIcon={leftIcon} rightIcon={rightIcon}>
          {computedContent && <p>{content ?? (!leftIcon && !rightIcon && id)}</p>}
        </IconWrapper>
      </Button>
    );
  }

  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(
  props: React.PropsWithRef<ITabControlTabProps<Id>> & React.RefAttributes<HTMLButtonElement>
) => ReturnType<React.FC>) & { defaultProps?: Partial<ITabControlTabProps<any>> };

export interface ITabControlProps<Id extends ArmstrongId> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'ref'> {
  /** The tabs to render in the TabControl */
  tabs: ITab<Id>[];

  /** The tab to be displayed as the current tab (adds a data-is-current data attribute to the tab with the given ID) */
  currentTab?: Id;

  /** fired when a user clicks on a tab */
  onTabChange?: (newTabId: Id) => void;
}

/** Render an array of tabs, which can be bound using the currentTab and onTabChange props */
export const TabControl = React.forwardRef(
  <Id extends ArmstrongId>(
    { tabs, className, currentTab, onTabChange, ...nativeProps }: ITabControlProps<Id>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div {...nativeProps} className={ClassNames.concat('arm-tab-control', className)} ref={ref}>
        {tabs.map((tab) => (
          <TabControlTab {...tab} key={tab.id} isCurrent={currentTab === tab.id} onClick={() => onTabChange?.(tab.id)} />
        ))}
      </div>
    );
  }

  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(props: React.PropsWithRef<ITabControlProps<Id>> & React.RefAttributes<HTMLDivElement>) => ReturnType<React.FC>) & {
  defaultProps?: Partial<ITabControlProps<any>>;
};
