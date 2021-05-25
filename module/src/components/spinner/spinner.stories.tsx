import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { Spinner } from './spinner.component';

/** metadata */

export default StoryUtils.createMeta(Spinner, 'Display', 'Spinner', {});

/** component template */

const Template = StoryUtils.createTemplate(Spinner);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {});
export const CustomIcon = StoryUtils.cloneTemplate(Template, { icon: IconUtils.getIconDefinition('Icomoon', 'spinner9') });
export const CustomJSX = StoryUtils.cloneTemplate(Template, { children: <p>I'm a loader</p> });
