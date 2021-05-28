import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { AutoCompleteInput } from './autoCompleteInput.component';

/** metadata */

export default StoryUtils.createMeta(AutoCompleteInput, 'Form', 'Auto Complete Input', {
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

const Template = StoryUtils.createTemplate(AutoCompleteInput);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {
  leftIcon: IconUtils.getIconDefinition('Icomoon', 'syringe'),
  options: ['one', 'two'],
});
export const Disabled = StoryUtils.cloneTemplate(Template, {
  leftIcon: IconUtils.getIconDefinition('Icomoon', 'syringe'),
  options: ['very', 'slightly', 'somewhat'],
  disabled: true,
});
export const Pending = StoryUtils.cloneTemplate(Template, {
  leftIcon: IconUtils.getIconDefinition('Icomoon', 'syringe'),
  options: ['very', 'slightly', 'somewhat'],
  pending: true,
});
export const WithOverlayText = StoryUtils.cloneTemplate(Template, {
  leftIcon: IconUtils.getIconDefinition('Icomoon', 'fork-knife'),
  options: ['tomato', 'brown', 'HP'],
  rightOverlay: 'sauce',
});
export const AllowFreeText = StoryUtils.cloneTemplate(Template, {
  leftIcon: IconUtils.getIconDefinition('Icomoon', 'fork-knife'),
  options: ['tomato', 'brown', 'HP'],
  rightOverlay: 'sauce',
  allowFreeText: true,
});
export const DontFilter = StoryUtils.cloneTemplate(Template, {
  leftIcon: IconUtils.getIconDefinition('Icomoon', 'fork-knife'),
  options: ['tomato', 'brown', 'HP'],
  rightOverlay: 'sauce',
  filterOptions: false,
});
