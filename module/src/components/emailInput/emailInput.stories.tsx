import { StoryUtils } from '../../stories/storyUtils';
import { EmailInput } from './emailInput.component';

/** metadata */

export default StoryUtils.createMeta(EmailInput, 'Form', 'Email Input', {
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

const Template = StoryUtils.createTemplate(EmailInput);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {});
