import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { Button } from '../button';
import { TextInput } from '../textInput';
import { Image } from './image.component';

/** metadata */

export default StoryUtils.createMeta(Image, 'Display', 'Image', {});

/** component template */

// const Template = StoryUtils.createTemplate(Image);

/** stories */

export const Default = () => {
  return <Image src="https://wallpapercave.com/wp/wp2550666.jpg"></Image>;
};
