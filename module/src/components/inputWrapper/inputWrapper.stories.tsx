import { StoryUtils } from '../../stories/storyUtils';
import { InputWrapper } from './inputWrapper.component';

/** metadata */

export default StoryUtils.createMeta(InputWrapper, 'FormUtils', 'Input Wrapper', {});

/** component template */

const Template = StoryUtils.createTemplate(InputWrapper);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {});
