/* eslint-disable no-nested-ternary */

import * as React from 'react';

import { IconSet, IIcon } from '../..';
import { Icon } from '../icon';
import { IStatusProps, Status } from '../status';

export interface IStepperStep extends Pick<IStatusProps, 'pending' | 'error'> {
  /** the icon for this step */
  icon?: IIcon<IconSet>;

  /** the index of this step from 0 */
  index?: number;

  /** the name of this step */
  name?: string;

  /** is this step disabled - stops the onChange from firing */
  disabled?: boolean;

  /** is this step complete */
  isComplete?: boolean;
}

export interface IStepperStepProps extends IStepperStep, Pick<IStatusProps, 'spinnerIcon' | 'errorIcon'> {
  /** is this step the current step */
  isCurrent?: boolean;

  /** is this step previous to the current step */
  isPrevious?: boolean;

  /** fired when the user clicks on the stepper step */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /** the icon to render if isComplete is set to true - leave blank to not change */
  completeIcon?: IIcon<IconSet>;

  /** is small (no icon or index) */
  small?: boolean;

  /** is the next one small (no icon or index) used to position the line between them */
  nextIsSmall?: boolean;
}

export const StepperStep = React.forwardRef<HTMLButtonElement, IStepperStepProps>(
  (
    {
      isCurrent,
      isComplete,
      isPrevious,
      onClick,
      icon,
      children,
      name,
      disabled,
      index,
      completeIcon,
      small,
      nextIsSmall,
      spinnerIcon,
      error,
      errorIcon,
      pending,
    },
    ref
  ) => {
    const onClickEvent = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!disabled) {
          onClick?.(event);
        }
      },
      [onClick, disabled]
    );

    return (
      <button
        className="arm-stepper-step"
        aria-current={isCurrent && 'step'}
        onClick={onClickEvent}
        data-current={isCurrent}
        data-previous={isPrevious}
        data-complete={isComplete}
        data-pending={pending}
        data-error={error}
        data-small={small}
        data-next-small={nextIsSmall}
        disabled={disabled}
        title={name}
        ref={ref}
      >
        <div className="arm-stepper-step-icon">
          {error || pending ? (
            <Status error={error} errorIcon={errorIcon} pending={pending} spinnerIcon={spinnerIcon} />
          ) : completeIcon && isComplete ? (
            <Icon iconSet={completeIcon.iconSet} icon={completeIcon.icon} />
          ) : icon ? (
            <Icon iconSet={icon.iconSet} icon={icon.icon} />
          ) : (
            Number.isInteger(index) && <p className="arm-stepper-step-icon-index">{index! + 1}</p>
          )}
        </div>
        {name && (
          <div className="arm-stepper-step-name">
            <p>{name}</p>
          </div>
        )}
        {children}
      </button>
    );
  }
);

export interface IStepperProps extends Pick<IStepperStepProps, 'completeIcon'>, Pick<IStatusProps, 'spinnerIcon' | 'errorIcon'> {
  /** the steps to render */
  steps?: IStepperStep[];

  /** the index of the currently selected step */
  stepIndex: number;

  /** will show the index on the circle if an icon is not provided for each step */
  showIndex?: boolean;

  /** fired when the user clicks on a step, leave undefined to disable user interaction */
  onStepIndexChange?: (newStep: number) => void;

  /** the direction that the steps should flow */
  direction?: 'horizontal' | 'vertical';
}

/** R */
export const Stepper = React.forwardRef<HTMLDivElement, IStepperProps>(
  ({ steps, stepIndex, onStepIndexChange, children, completeIcon, showIndex, direction, spinnerIcon, errorIcon }, ref) => {
    return (
      <div
        className="arm-stepper"
        ref={ref}
        data-direction={direction}
        style={{ '--arm-stepper-length': `${steps?.length || 0}` } as React.CSSProperties}
      >
        {steps?.map((step, index) => (
          <StepperStep
            {...step}
            key={index}
            onClick={onStepIndexChange ? () => onStepIndexChange(index) : undefined}
            isCurrent={stepIndex === index}
            isPrevious={index < stepIndex}
            index={showIndex ? index : undefined}
            completeIcon={completeIcon}
            small={!showIndex && !step.icon}
            nextIsSmall={!showIndex && !!steps[index + 1] && !steps[index + 1].icon}
            spinnerIcon={spinnerIcon}
            errorIcon={errorIcon}
          />
        ))}
        {children}
      </div>
    );
  }
);

Stepper.defaultProps = {
  direction: 'horizontal',
};
