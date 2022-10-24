import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon/icons.utils';
import { IconButton } from './iconButton.component';

/** metadata */

export default StoryUtils.createMeta(IconButton, 'Button', 'Icon button', {});

/** component template */

const Template = StoryUtils.createTemplate(IconButton);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, { icon: IconUtils.getIconDefinition('Icomoon', 'rocket') });
export const Disabled = StoryUtils.cloneTemplate(Template, {
  icon: IconUtils.getIconDefinition('Icomoon', 'rocket'),
  disabled: true,
});
export const Pending = StoryUtils.cloneTemplate(Template, {
  icon: IconUtils.getIconDefinition('Icomoon', 'rocket'),
  pending: true,
});
export const PendingAnimation = () => {
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState(false);

  const onClick = () => {
    setPending(true);

    setTimeout(() => {
      setError(true);
      setPending(false);
    }, 5000);
  };

  return (
    <>
      <IconButton error={error} icon={IconUtils.getIconDefinition('Icomoon', 'chess-king')} pending={pending} onClick={onClick} />
      <p>CLICK IT</p>
    </>
  );
};
export const Error = StoryUtils.cloneTemplate(Template, {
  icon: IconUtils.getIconDefinition('Icomoon', 'rocket'),
  error: true,
});
export const Minimal = StoryUtils.cloneTemplate(Template, {
  icon: IconUtils.getIconDefinition('Icomoon', 'rocket'),
  minimalStyle: true,
});
