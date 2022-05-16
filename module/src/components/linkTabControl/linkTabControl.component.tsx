import * as React from 'react';

import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, ArmstrongId } from '../../types';
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
    { isCurrent, id, content, className, leftIcon, rightIcon, onTouchCancel, to, name, ...linkProps }: ILinkTabControlTab<Id, TLinkProps>,
    forwardedRef: React.ForwardedRef<HTMLElement>
  ) => {
    return (
      <LinkButton
        {...linkProps}
        className={ClassNames.concat('arm-tab-control-tab', className)}
        data-is-current={isCurrent}
        ref={forwardedRef}
        minimalStyle
        to={to}
      >
        <OptionContent leftIcon={leftIcon} rightIcon={rightIcon} content={content} name={name} id={id} isActive={isCurrent} />
      </LinkButton>
    );
  }

  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId, TLinkProps extends Record<string, any>>(
  props: ArmstrongFCProps<ILinkTabControlTab<Id, TLinkProps>, HTMLElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ILinkTabControlTab<any, any>>;
