import { StoryUtils } from '../../stories/storyUtils';
import { TextAreaInput } from './textAreaInput.component';

/** metadata */

export default StoryUtils.createMeta(TextAreaInput, 'Form', 'Text Area Input', {
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

const Template = StoryUtils.createTemplate(TextAreaInput);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {});
export const WithIcons = StoryUtils.cloneTemplate(Template, { leftIcon: { iconSet: 'Icomoon', icon: 'certificate' } });
