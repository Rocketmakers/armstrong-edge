import { StoryUtils } from '../../stories/storyUtils';
import { TelInput } from './telInput.component';

/** metadata */

export default StoryUtils.createMeta(TelInput, 'Form', 'Tel Input', {
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

const Template = StoryUtils.createTemplate(TelInput);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {});
export const WithIcons = StoryUtils.cloneTemplate(Template, { leftIcon: { icon: 'phone', iconSet: 'LinearIcons' } });
export const WithValidationErrors = StoryUtils.cloneTemplate(Template, {
  leftIcon: { icon: 'phone', iconSet: 'LinearIcons' },
  validationErrorMessages: ["This doesn't look like a valid phone number"],
});
export const Pending = StoryUtils.cloneTemplate(Template, { leftIcon: { icon: 'phone', iconSet: 'LinearIcons' }, pending: true });
