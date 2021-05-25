import { StoryUtils } from '../../stories/storyUtils';
import { InputBase } from './inputBase.component';

/** metadata */

export default StoryUtils.createMeta(InputBase, 'FormUtils', 'Input Base', {});

/** component template */

const Template = StoryUtils.createTemplate(InputBase);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {});
export const WithIcons = StoryUtils.cloneTemplate(Template, { leftIcon: { icon: 'phone', iconSet: 'Icomoon' } });
