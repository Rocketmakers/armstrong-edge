import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { Status } from './status.component';

/** metadata */

export default StoryUtils.createMeta(Status, 'Display', 'Status', {});

/** component template */

const Template = StoryUtils.createTemplate(Status);

/** stories */

export const Error = StoryUtils.cloneTemplate(Template, { error: true });
export const CustomErrorIcon = StoryUtils.cloneTemplate(Template, { error: true, errorIcon: IconUtils.getIconDefinition('Icomoon', 'crying') });
export const Pending = StoryUtils.cloneTemplate(Template, { pending: true });
export const CustomSpinnerIcon = StoryUtils.cloneTemplate(Template, {
  pending: true,
  spinnerIcon: IconUtils.getIconDefinition('Icomoon', 'spinner9'),
});
