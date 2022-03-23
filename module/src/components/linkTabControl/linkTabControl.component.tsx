import * as React from 'react';

import { ArmstrongId } from '../../types';
import { ClassNames } from '../../utils';
import { LinkButton } from '../linkButton/linkButton.component';
import { OptionContent } from '../optionContent/optionContent.component';
import { ITabControlTabPropsCore } from '../tabControl';

export type ILinkTabControlTab<Id extends ArmstrongId, TLinkProps extends Record<string, any>> = ITabControlTabPropsCore<Id> &
  TLinkProps & {
    to: string;
  };

/** A single tab used in the TabControl component */
export const LinkTabControlTab = React.forwardRef(
  <Id extends ArmstrongId, TLinkProps extends Record<string, any>>(
    { isCurrent, id, content, className, leftIcon, rightIcon, onTouchCancel, to, ...linkProps }: ILinkTabControlTab<Id, TLinkProps>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <LinkButton
        {...linkProps}
        className={ClassNames.concat('arm-tab-control-tab', className)}
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
) as (<Id extends ArmstrongId, TLinkProps extends Record<string, any>>(
  props: React.PropsWithRef<ILinkTabControlTab<Id, TLinkProps>> & React.RefAttributes<HTMLButtonElement>
) => ReturnType<React.FC>) & { defaultProps?: Partial<ILinkTabControlTab<any, any>> };
