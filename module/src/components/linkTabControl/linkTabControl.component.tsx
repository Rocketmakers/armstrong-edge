import * as React from 'react';

import { ArmstrongId } from '../../types';
import { ClassNames } from '../../utils';
import { IArmstrongLocation } from '../config';
import { useLocation } from '../link/link.hooks';
import { LinkButton } from '../linkButton/linkButton.component';
import { OptionContent } from '../optionContent/optionContent.component';
import { ITab, ITabControlProps, ITabControlTabPropsCore, TabControlWrapper } from '../tabControl';

export type ILinkTabControlTab<Id extends ArmstrongId> = ITab<Id> & {
  to: string;
};

export type ILinkTabControlTabProps<Id extends ArmstrongId> = ILinkTabControlTab<Id> &
  Pick<ITabControlTabPropsCore<Id>, 'isCurrent'> & {
    className?: string;
  };

/** A single tab used in the TabControl component */
export const LinkTabControlTab = React.forwardRef(
  <Id extends ArmstrongId>(
    { isCurrent, id, content, className, leftIcon, rightIcon, to, ...linkProps }: ILinkTabControlTabProps<Id>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <LinkButton
        {...linkProps}
        className={ClassNames.concat('arm-link-tab-control-tab', 'arm-tab-control-tab', className)}
        data-is-current={isCurrent}
        ref={ref}
        minimalStyle
        to={to}
      >
        <OptionContent leftIcon={leftIcon} rightIcon={rightIcon} content={content} id={id} isActive={isCurrent} dontFallbackToIdIfIconIsProvided />
      </LinkButton>
    );
  }

  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(
  props: React.PropsWithRef<ILinkTabControlTabProps<Id>> & React.RefAttributes<HTMLButtonElement>
) => ReturnType<React.FC>) & { defaultProps?: Partial<ILinkTabControlTabProps<any>> };

export interface ILinkTabControlProps<Id extends ArmstrongId> extends Omit<ITabControlProps<Id>, 'tabs' | 'currentTab' | 'onTabChange'> {
  /** The tabs to render in the TabControl */
  tabs: ILinkTabControlTab<Id>[];

  /** Get if the current tab is a given tab using the location - defaults to checking if pathname is equal to tab.to */
  isCurrentTab?: (location: IArmstrongLocation, tab: ILinkTabControlTab<Id>) => boolean;
}

/** Render an array of tabs, which use the url */
export const LinkTabControl = React.forwardRef(
  <Id extends ArmstrongId>({ tabs, className, isCurrentTab, ...nativeProps }: ILinkTabControlProps<Id>, ref: React.ForwardedRef<HTMLDivElement>) => {
    const location = useLocation();

    return (
      <TabControlWrapper {...nativeProps} ref={ref} className={ClassNames.concat('arm-link-tab-control', className)}>
        {tabs.map((tab) => (
          <LinkTabControlTab<Id> {...tab} key={tab.id} isCurrent={location && isCurrentTab?.(location, tab)} />
        ))}
      </TabControlWrapper>
    );
  }

  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(props: React.PropsWithRef<ILinkTabControlProps<Id>> & React.RefAttributes<HTMLDivElement>) => ReturnType<React.FC>) & {
  defaultProps?: Partial<ILinkTabControlProps<any>>;
};

LinkTabControl.defaultProps = {
  isCurrentTab: (location, tab) => location.pathname === tab.to,
};
