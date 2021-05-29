import { StoryUtils } from '../../stories/storyUtils';
import { PasswordInput } from './passwordInput.component';

/** metadata */

export default StoryUtils.createMeta(PasswordInput, 'Form', 'Password Input', {
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

const Template = StoryUtils.createTemplate(PasswordInput);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {});
export const WithIcons = StoryUtils.cloneTemplate(Template, { leftIcon: { icon: 'key', iconSet: 'LinearIcons' } });
export const WithValidationErrors = StoryUtils.cloneTemplate(Template, {
  leftIcon: { icon: 'key', iconSet: 'LinearIcons' },
  validationErrorMessages: ["This isn't your password"],
});
export const Pending = StoryUtils.cloneTemplate(Template, { leftIcon: { icon: 'key', iconSet: 'LinearIcons' }, pending: true });
