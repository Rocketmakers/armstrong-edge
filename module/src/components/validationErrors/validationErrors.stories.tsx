import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { ValidationErrors } from './validationErrors.component';

/** metadata */

export default StoryUtils.createMeta(ValidationErrors as any, 'FormUtils', 'Validation Errors', { validationErrors: [] });

/** component template */

const Template = StoryUtils.createTemplate(ValidationErrors);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {
  validationErrors: ["This doesn't look right", 'User error lol'],
});
export const CustomIcon = StoryUtils.cloneTemplate(Template, {
  validationErrors: ["This doesn't look right", 'User error lol'],
  icon: IconUtils.getIconDefinition('Icomoon', 'weather-cloud-sun'),
});
