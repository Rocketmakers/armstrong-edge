import * as React from 'react';

import { ArmstrongId } from '../../types/core';
import { IArmstrongExtendedOption } from '../../types/options';
import { IconWrapper } from '../iconWrapper';

export interface IOptionContentProps
  extends Partial<Pick<IArmstrongExtendedOption<ArmstrongId, never>, 'name' | 'content' | 'leftIcon' | 'rightIcon' | 'id'>> {
  /** is this option currently active */
  isActive?: boolean;

  dontFallbackToIdIfIconIsProvided?: boolean;
}

/** Incredibly simple utility component for use in options, used to optionally render JSX, a piece of text, or fallback to an ID and wrap it in Icons - for use with components which render an array of the IArmstrongOption (or similar) type */
export const OptionContent: React.FC<IOptionContentProps> = ({
  name,
  content,
  leftIcon,
  rightIcon,
  id,
  isActive,
  dontFallbackToIdIfIconIsProvided,
}) => {
  const renderedContent = React.useMemo(() => {
    // if content is a string or number, render content in a span
    if (typeof content === 'string' || typeof content === 'number') {
      return <span>{content}</span>;
    }
    // if content is a function that takes the active state returns a reactChild, render that
    if (typeof content === 'function') {
      return content(!!isActive);
    }
    // content should be JSX if we get here - render that
    if (content) {
      return content;
    }
    // render the given name or fallback to the id (if dontFallbackToIdIfIconIsProvided is unset or no icon is provided)
    if (name || (id && (!dontFallbackToIdIfIconIsProvided || (!leftIcon && !rightIcon)))) {
      return <span>{name || id}</span>;
    }
  }, [content, name, id, isActive, leftIcon, rightIcon]);

  return (
    <IconWrapper leftIcon={leftIcon} rightIcon={rightIcon}>
      {renderedContent}
    </IconWrapper>
  );
};
