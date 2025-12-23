import * as RadixTooltip from '@radix-ui/react-tooltip';
import * as React from 'react';

import { concat } from '../../utils';
import { useArmstrongConfig } from '../config';

import './tooltip.theme.css';

export interface ITooltipProps
  extends Omit<RadixTooltip.TooltipContentProps, 'side' | 'content'>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  /** The content to display in the tooltip */
  content?: React.ReactNode;

  /**
   * How long in ms to wait after hover before displaying the tooltip
   * @default 700
   */
  delay?: number;

  /**
   * Whether the tooltip is open. Must be used in conjunction with `onOpenChange`
   * WARNING: This will override the default behaviour and should not normally be needed.
   */
  open?: boolean;

  /**
   * Call when a controlled tooltip opens/closes. Must be used in conjunction with `open`
   * WARNING: Use for a manually controlled tooltip only, should not normally be needed.
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Whether to show an arrow on the tooltip pointing to the element
   * @default false;
   */
  showArrow?: boolean;

  /**
   * Optional className to add to the arrow element
   */
  arrowClassName?: string;

  /**
   * Which side to render the tooltip
   * @default top
   */
  side?: 'top' | 'right' | 'bottom' | 'left';
}

export const Tooltip = (props: React.PropsWithChildren<ITooltipProps & { ref?: React.Ref<HTMLDivElement> }>) => {
  const { children, content, delay, open, onOpenChange, showArrow, className, arrowClassName, side, ref, ...otherProps } = props;
  const { tooltipDelay, tooltipShowArrow, tooltipSide } = useArmstrongConfig({
    tooltipDelay: delay,
    tooltipShowArrow: showArrow,
    tooltipSide: side,
  });

  return (
    <RadixTooltip.Provider delayDuration={tooltipDelay}>
      <RadixTooltip.Root open={open} onOpenChange={onOpenChange}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            ref={ref}
            className={concat(className, 'arm-tooltip-content')}
            side={tooltipSide}
            {...otherProps}
          >
            {content}
            {tooltipShowArrow && <RadixTooltip.Arrow className={concat(arrowClassName, 'arm-tooltip-arrow')} />}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

Tooltip.displayName = 'Tooltip';

