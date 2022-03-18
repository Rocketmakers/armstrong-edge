import * as React from 'react';

import { Form } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { Rating } from './rating.component';

/** metadata */

export default StoryUtils.createMeta(Rating, 'Form', 'Rating', {});

/** component template */

// const Template = StoryUtils.createTemplate(ScrollToEndListener as React.FC<IScrollToEndListenerProps<any, any>>);

/** stories */

export const Default = () => {
  return (
    <div>
      <Rating />
    </div>
  );
};

export const Half = () => {
  return (
    <div>
      <Rating step={0.5} />
    </div>
  );
};

export const CustomMax = () => {
  return (
    <div>
      <Rating maximum={10} />
    </div>
  );
};

export const CustomIcons = () => {
  return (
    <div>
      <Rating emptyIcon={IconUtils.getIconDefinition('Icomoon', 'airplane')} filledIcon={IconUtils.getIconDefinition('Icomoon', 'airplane')} />
    </div>
  );
};

export const Bound = () => {
  const { formProp, formState } = Form.use({ rating: 0 });

  return (
    <div>
      <p>{formState.rating}</p>
      <Rating step={0.5} bind={formProp('rating').bind()} />
    </div>
  );
};
