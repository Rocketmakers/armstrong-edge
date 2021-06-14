import * as React from 'react';

import { ArmstrongId } from '../../types';
import { ClassNames } from '../../utils/classNames';
import { Button } from '../button';
import { IconSet } from '../icon';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';

export interface ITab extends IIconWrapperProps<IconSet, IconSet> {
  /** (ArmstrongId) The ID of the tab, to be passed into onTabChange */
  id: ArmstrongId;

  /** (string) The text to render inside the tab, falls back to id if not given */
  content?: string;
}

export interface ITabControlTabProps extends ITab, Omit<React.HTMLAttributes<HTMLButtonElement>, 'id' | 'ref'> {
  /** (boolean) adds a data-is-current data attribute */
  isCurrent?: boolean;
}

/** A single tab used in the TabControl component */
export const TabControlTab = React.forwardRef<HTMLButtonElement, ITabControlTabProps>(
  ({ onClick, isCurrent, id, content, className, leftIcon, rightIcon, ...nativeProps }, ref) => {
    return (
      <Button
        {...nativeProps}
        className={ClassNames.concat('arm-tab-control-tab', className)}
        onClick={onClick}
        data-is-current={isCurrent}
        ref={ref}
      >
        <IconWrapper leftIcon={leftIcon} rightIcon={rightIcon}>
          <p>{content ?? id}</p>
        </IconWrapper>
      </Button>
    );
  }
);

export interface ITabControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'ref'> {
  /** (ITab[]) The tabs to render in the TabControl */
  tabs: ITab[];

  /** (ArmstrongId) The tab to be displayed as the current tab (adds a data-is-current data attribute to the tab with the given ID) */
  currentTab: ArmstrongId;

  /** (ArmstrongId => void) fired when a user clicks on a tab */
  onTabChange: (newTabId: ArmstrongId) => void;
}

/** Render an array of tabs, which can be bound using the currentTab and onTabChange props */
export const TabControl = React.forwardRef<HTMLDivElement, ITabControlProps>(({ tabs, className, currentTab, onTabChange, ...nativeProps }, ref) => {
  return (
    <div {...nativeProps} className={ClassNames.concat('arm-tab-control', className)} ref={ref}>
      {tabs.map((tab) => (
        <TabControlTab {...tab} key={tab.id} isCurrent={currentTab === tab.id} onClick={() => onTabChange(tab.id)} />
      ))}
    </div>
  );
});
