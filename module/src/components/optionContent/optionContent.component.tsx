import * as React from 'react';

import { ArmstrongId } from '../../types/core';
import { IArmstrongExtendedOption } from '../../types/options';
import { IconWrapper } from '../iconWrapper';

export interface IOptionContentProps
  extends Partial<Pick<IArmstrongExtendedOption<ArmstrongId, never>, 'name' | 'content' | 'leftIcon' | 'rightIcon' | 'id'>> {
  /** is this option currently active */
  isActive?: boolean;
}

/** Incredibly simple utility component for use in options, used to optionally render JSX, a piece of text, or fallback to an ID - for use with components which render an array of the IArmstrongOption (or similar) type */
export const OptionContent: React.FC<IOptionContentProps> = ({ name, content, leftIcon, rightIcon, id, isActive }) => {
  const textContent = React.useMemo(() => {
    if (typeof content === 'string' || typeof content === 'number') {
      return content;
    }
    if (content) {
      return undefined;
    }
    if (name) {
      return name;
    }
    if (id) {
      return id;
    }
  }, [content, name, id]);

  const renderedContent = React.useMemo(() => {
    if (textContent) {
      return <p>{textContent}</p>;
    }
    if (typeof content === 'function') {
      return content(!!isActive);
    }
    return content;
  }, [content, textContent, isActive]);

  return (
    <IconWrapper leftIcon={leftIcon} rightIcon={rightIcon}>
      {renderedContent}
    </IconWrapper>
  );
};
