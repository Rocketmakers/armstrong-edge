import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { ErrorMessage } from './errorMessage.component';

/** metadata */

export default StoryUtils.createMeta(ErrorMessage as any, 'Display', 'Error Message', {});

/** component template */

const Template = StoryUtils.createTemplate(ErrorMessage);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, { message: 'Oops all errors' });
export const CustomIcon = StoryUtils.cloneTemplate(Template, {
  message: "Oh no an error oh god it's all broken oh no",
  icon: IconUtils.getIconDefinition('Icomoon', 'weather-cloud-sun'),
});
