import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { TextArea } from './textArea.component';

/** metadata */

export default StoryUtils.createMeta(TextArea, 'Form', 'Text Area', {
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

const Template = StoryUtils.createTemplate(TextArea);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {});
export const WithIcons = StoryUtils.cloneTemplate(Template, { leftIcon: { iconSet: 'Icomoon', icon: 'certificate' } });
export const WithValidationErrors = StoryUtils.cloneTemplate(Template, {
  validationErrorMessages: ['Uh oh your punctuation is bad'],
  errorIcon: IconUtils.getIconDefinition('LinearIcons', 'warning'),
  validationMode: 'message',
});
