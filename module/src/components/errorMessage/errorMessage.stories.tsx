import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { ErrorMessage } from './errorMessage.component';

/** metadata */

export default StoryUtils.createMeta(ErrorMessage, 'Display', 'Error Message', { message: '' });

/** component template */

const Template = StoryUtils.createTemplate(ErrorMessage);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, { message: 'Oops all errors' });
export const CustomIcon = StoryUtils.cloneTemplate(Template, {
  message: 'Oops all errors',
  icon: IconUtils.getIconDefinition('Icomoon', 'weather-cloud-sun'),
});
