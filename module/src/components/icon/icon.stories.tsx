import { StoryUtils } from '../../stories/storyUtils';
import { IcomoonIcon, Icon, LinearIcon } from './icon.component';

/** metadata */

export default StoryUtils.createMeta(Icon as any, 'Display', 'Icon', {});

/** component template */

const Template = StoryUtils.createTemplate(Icon);
const IcomoonTemplate = StoryUtils.createTemplate(IcomoonIcon);
const LinearIconsTemplate = StoryUtils.createTemplate(LinearIcon);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, { iconSet: 'Icomoon', icon: 'heart' });
export const IcomoonOnly = StoryUtils.cloneTemplate(IcomoonTemplate, { icon: 'heart' });
export const LinearIconsOnly = StoryUtils.cloneTemplate(LinearIconsTemplate, { icon: 'heart' });
