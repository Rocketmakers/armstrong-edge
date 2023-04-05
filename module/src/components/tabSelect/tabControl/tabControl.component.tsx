import * as React from 'react';

import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn } from '../../../types';
import { ArmstrongId } from '../../../types/core';
import { IArmstrongExtendedOption } from '../../../types/options';
import { concat } from '../../../utils/classNames';
import { Button } from '../../button';
import { OptionContent } from '../../optionContent';

export type ITab<Id extends ArmstrongId> = Pick<
  IArmstrongExtendedOption<Id, never>,
  'content' | 'leftIcon' | 'rightIcon' | 'id' | 'name'
>;

export interface ITabControlTabPropsCore<Id extends ArmstrongId> extends ITab<Id> {
  /** adds a data-is-current data attribute */
  isCurrent?: boolean;
}

export interface ITabControlTabProps<Id extends ArmstrongId>
  extends ITabControlTabPropsCore<Id>,
    Omit<React.HTMLAttributes<HTMLButtonElement>, 'id' | 'ref'> {}

/** A single tab used in the TabControl component */
export const TabControlTab = React.forwardRef(
  <Id extends ArmstrongId>(
    { isCurrent, id, content, className, leftIcon, rightIcon, name, ...nativeProps }: ITabControlTabProps<Id>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <Button
        {...nativeProps}
        className={concat('arm-tab-control-tab', className)}
        data-is-current={isCurrent}
        ref={ref}
      >
        <OptionContent
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          content={content}
          id={id}
          name={name}
          isActive={isCurrent}
        />
      </Button>
    );
  }

  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(
  props: React.PropsWithRef<ITabControlTabProps<Id>> & React.RefAttributes<HTMLButtonElement>
) => ReturnType<React.FC>) & {
  defaultProps?: Partial<ITabControlTabProps<any>>;
};

export type ITabControlWrapperProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'ref'>;

export const TabControlWrapper = React.forwardRef<HTMLDivElement, React.PropsWithChildren<ITabControlWrapperProps>>(
  ({ className, children, ...nativeProps }, ref) => {
    return (
      <div {...nativeProps} className={concat('arm-tab-control', className)} ref={ref}>
        {children}
      </div>
    );
  }
);

export interface ITabControlProps<Id extends ArmstrongId> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'ref'> {
  /** The tabs to render in the TabControl */
  tabs: (ITab<Id> | Id)[];

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
      <TabControlWrapper {...nativeProps} ref={ref}>
        {tabs.map(tab =>
          typeof tab === 'string' || typeof tab === 'number' ? (
            <TabControlTab
              name={tab.toString()}
              id={tab}
              key={tab}
              isCurrent={currentTab === tab}
              onClick={() => onTabChange?.(tab)}
            />
          ) : (
            tab && (
              <TabControlTab
                {...(typeof tab === 'object' ? tab : ({} as ITab<Id>))}
                name={tab.name ?? tab.id?.toString()}
                key={tab.id}
                isCurrent={currentTab === tab.id}
                onClick={() => onTabChange?.(tab.id)}
              />
            )
          )
        )}
      </TabControlWrapper>
    );
  }

  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(props: ArmstrongFCProps<ITabControlProps<Id>, HTMLDivElement>) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ITabControlProps<any>>;
