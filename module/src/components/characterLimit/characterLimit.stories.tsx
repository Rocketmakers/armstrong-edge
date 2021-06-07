import * as React from 'react';

import { TextInput } from '../..';
import * as Form from '../../hooks/form';
import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { CharacterLimit } from './characterLimit.component';

/** metadata */

export default StoryUtils.createMeta(CharacterLimit as any, 'Form', 'Character Limit', {});

/** component template */

// const Template = StoryUtils.createTemplate(CharacterLimit);

/** stories */

export const Default = () => {
  const { formProp } = Form.use({ thing: '' });

  return (
    <>
      <TextInput bind={formProp('thing').bind()} />
      <CharacterLimit bind={formProp('thing').bind()} limit={10} />
    </>
  );
};

export const Impose = () => {
  const { formProp } = Form.use({ thing: '' });

  return (
    <>
      <TextInput bind={formProp('thing').bind()} />
      <CharacterLimit bind={formProp('thing').bind()} limit={10} shouldImpose />
    </>
  );
};

export const CustomIcon = () => {
  const { formProp } = Form.use({ thing: '' });

  return (
    <>
      <TextInput bind={formProp('thing').bind()} />
      <CharacterLimit bind={formProp('thing').bind()} limit={10} exceedsIcon={IconUtils.getIconDefinition('Icomoon', 'tree')} />
    </>
  );
};
