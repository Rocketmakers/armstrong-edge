import { TextInput } from '../../components/text';
import { StoryUtils } from '../storyUtils';

/** metadata */

export default StoryUtils.createMeta(TextInput, 'Interactions', 'Impact Text Input', {
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

const Template = StoryUtils.createTemplate(TextInput);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {});

export const PlaceHolder = StoryUtils.cloneTemplate(Template, {
  placeholder: 'Placeholder text can be a useful hint, but it does not replace a label',
});

export const Disabled = StoryUtils.cloneTemplate(Template, {
  disabled: true,
});
