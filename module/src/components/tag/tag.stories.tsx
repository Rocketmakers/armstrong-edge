import { StoryUtils } from '../../stories/storyUtils';
import { Tag } from './tag.component';

/** metadata */

export default StoryUtils.createMeta(Tag, 'Display', 'Tag', {});

/** component template */

const Template = StoryUtils.createTemplate(Tag);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, { content: 'hiya' });
export const WithIcons = StoryUtils.cloneTemplate(Template, { leftIcon: { icon: 'phone', iconSet: 'Icomoon' }, content: 'hello' });
