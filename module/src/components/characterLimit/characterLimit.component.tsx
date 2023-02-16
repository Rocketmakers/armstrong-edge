import * as React from "react";

import { IBindingProps, useBindingState } from "../../hooks/form";
import {
  ArmstrongFCExtensions,
  ArmstrongFCProps,
  ArmstrongFCReturn,
  NullOrUndefined,
} from "../../types";
import { concat } from "../../utils/classNames";
import { Icon, IconSet, IconUtils, IIcon } from "../icon";

export interface ICharacterLimitProps<TBind extends NullOrUndefined<string>> {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind: IBindingProps<TBind>;

  /** the current value of the string to count */
  value?: TBind;

  /** the character limit for the bound input */
  limit: number;

  /** the limit should be enforced by the bind in this component - by default you will have to handle this yourself */
  shouldEnforce?: boolean;

  /** CSS className property */
  className?: string;

  /** icon to render if error */
  exceedsIcon?: IIcon<IconSet>;

  /** apply a test ID to the component for Storybook, Playwright etc */
  testId?: string;
}

/** Render a character limit from a bound value, showing as an error if the user  */
export const CharacterLimit = React.forwardRef(
  <TBind extends NullOrUndefined<string>>(
    {
      bind,
      limit,
      shouldEnforce,
      value,
      className,
      exceedsIcon,
      testId,
    }: ICharacterLimitProps<TBind>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [boundValue, setBoundValue] = useBindingState(bind, { value });

    const exceeded = boundValue && boundValue.length > limit;

    React.useLayoutEffect(() => {
      if (shouldEnforce && exceeded) {
        setBoundValue?.(boundValue!.slice(0, limit) as TBind);
      }
    }, [boundValue]);

    return (
      <div
        ref={ref}
        className={concat("arm-character-limit", className)}
        data-exceeded={exceeded}
        data-testId={testId}
      >
        <p>
          {boundValue?.length}/{limit}
        </p>
        {exceedsIcon && exceeded && (
          <Icon iconSet={exceedsIcon.iconSet} icon={exceedsIcon.icon} />
        )}
      </div>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TBind extends NullOrUndefined<string>>(
  props: ArmstrongFCProps<ICharacterLimitProps<TBind>, HTMLDivElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ICharacterLimitProps<any>>;

CharacterLimit.defaultProps = {
  exceedsIcon: IconUtils.getIconDefinition("Icomoon", "warning"),
};
