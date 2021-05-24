import { StoryUtils } from '../../stories/storyUtils';
import { NumberInput } from './numberInput.component';

/** metadata */

export default StoryUtils.createMeta(NumberInput, 'Form', 'Number Input', {
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

const Template = StoryUtils.createTemplate(NumberInput);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {});
