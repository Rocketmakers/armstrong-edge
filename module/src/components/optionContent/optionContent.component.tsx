import * as React from 'react';

import { ArmstrongId } from '../../types/core';
import { IArmstrongExtendedOption } from '../../types/options';
import { IconWrapper } from '../iconWrapper';

export interface IOptionContentProps
  extends Partial<Pick<IArmstrongExtendedOption<ArmstrongId, never>, 'name' | 'content' | 'leftIcon' | 'rightIcon' | 'id'>> {}

/** Incredibly simple utility component for use in options, used to optionally render JSX, a piece of text, or fallback to an ID - for use with components which render an array of the IArmstrongOption (or similar) type */
export const OptionContent: React.FC<IOptionContentProps> = ({ name, content, leftIcon, rightIcon, id }) => {
  const textContent = React.useMemo(() => {
    if (typeof content === 'string' || typeof content === 'number') {
      return content;
    }
    if (name) {
      return name;
    }
    if (id) {
      return id;
    }
  }, [content, name, id]);

  return (
    <IconWrapper leftIcon={leftIcon} rightIcon={rightIcon}>
      {textContent ? <p>{textContent}</p> : content}
    </IconWrapper>
  );
};
