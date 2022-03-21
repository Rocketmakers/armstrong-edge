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
  const { formProp } = Form.use({ rating: 0 });

  return (
    <div>
      <Rating bind={formProp('rating').bind()} />
    </div>
  );
};

export const ReadOnly = () => {
  return (
    <div>
      <Rating value={3} />
    </div>
  );
};

export const Half = () => {
  const { formProp } = Form.use({ rating: 0 });

  return (
    <div>
      <Rating bind={formProp('rating').bind()} step={0.5} />
    </div>
  );
};

export const CustomMax = () => {
  const { formProp } = Form.use({ rating: 0 });

  return (
    <div>
      <Rating bind={formProp('rating').bind()} maximum={10} />
    </div>
  );
};

export const CustomIcons = () => {
  const { formProp } = Form.use({ rating: 0 });

  return (
    <div>
      <Rating
        bind={formProp('rating').bind()}
        emptyIcon={IconUtils.getIconDefinition('Icomoon', 'airplane')}
        filledIcon={IconUtils.getIconDefinition('Icomoon', 'airplane')}
      />
    </div>
  );
};
export const WithStatusAndIcons = () => {
  const { formProp } = Form.use({ rating: 0 });

  return (
    <div>
      <Rating bind={formProp('rating').bind()} maximum={10} leftIcon={IconUtils.getIconDefinition('Icomoon', 'planet')} pending error />
    </div>
  );
};

export const Buttons = () => {
  const { formProp } = Form.use({ rating: 0 });

  return (
    <div>
      <Rating bind={formProp('rating').bind()} mode="buttons" />
    </div>
  );
};
export const Radio = () => {
  const { formProp } = Form.use({ rating: 0 });

  return (
    <div>
      <Rating bind={formProp('rating').bind()} mode="radio" step={0.5} />
    </div>
  );
};
