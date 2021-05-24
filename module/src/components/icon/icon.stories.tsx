import { StoryUtils } from '../../stories/storyUtils';
import { Icon } from './icon.component';

/** metadata */

export default StoryUtils.createMeta(Icon as any, 'Display', 'Icon', {});

/** component template */

const Template = StoryUtils.createTemplate(Icon);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, { iconSet: 'Icomoon', icon: 'heart' });
