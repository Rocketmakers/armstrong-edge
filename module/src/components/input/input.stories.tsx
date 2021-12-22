import * as React from 'react';

import { Form } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { Input } from './input.component';

/** metadata */

export default StoryUtils.createMeta(Input, 'Form', 'Input', {});

/** component template */

const Template = StoryUtils.createTemplate(Input);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {});
export const WithIcons = StoryUtils.cloneTemplate(Template, { leftIcon: { icon: 'phone', iconSet: 'Icomoon' } });

export const TEST = () => {
  const { formProp } = Form.use();

  return (
    <>
      <Input type="text" bind={formProp.bind('aaa')} />
    </>
  );
};
