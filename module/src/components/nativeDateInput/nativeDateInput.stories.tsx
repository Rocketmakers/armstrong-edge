import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { NativeDateInput } from './nativeDateInput';

/** metadata */

export default StoryUtils.createMeta(NativeDateInput, 'Form', 'Native Date Input', {
  placeholder: {
    control: { type: 'text' },
    description: 'Adds placeholder text to the input',
    table: { category: 'Text' },
  },
  disabled: {
    control: { type: 'boolean' },
    description: 'Disable inputs',
    table: { category: 'Boolean' },
  },
});

/** component template */

const Template = StoryUtils.createTemplate(NativeDateInput);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {});
export const WithIcons = StoryUtils.cloneTemplate(Template, { leftIcon: IconUtils.getIconDefinition('LinearIcons', 'calendar-full') });
export const WithValidationErrors = StoryUtils.cloneTemplate(Template, {
  leftIcon: IconUtils.getIconDefinition('LinearIcons', 'calendar-full'),
  validationErrorMessages: ['That date was too early'],
});
export const Pending = StoryUtils.cloneTemplate(Template, { leftIcon: IconUtils.getIconDefinition('LinearIcons', 'calendar-full'), pending: true });
