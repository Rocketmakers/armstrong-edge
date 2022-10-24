import * as React from 'react';

import { Form } from '../../hooks';
import { StoryUtils } from '../../stories/storyUtils';
import { TagInput } from './tagInput.component';

/** metadata */

export default StoryUtils.createMeta(TagInput, 'Form', 'Tag Input', {});

/** component template */

// const Template = StoryUtils.createTemplate(TagInput);

/** stories */

export const Default = () => {
  const { formProp } = Form.use({ tags: [] });

  return <TagInput bind={formProp('tags').bind()} placeholder="Please add some tags..." />;
};
export const NoDeletingWithButton = () => {
  const { formProp } = Form.use({ tags: [] });

  return <TagInput bind={formProp('tags').bind()} placeholder="Please add some tags..." deleteButton={false} />;
};
export const SpaceAddsTags = () => {
  const { formProp } = Form.use({ tags: [] });

  return <TagInput bind={formProp('tags').bind()} placeholder="Please add some tags..." spaceCreatesTags />;
};
export const DuplicatesAllowed = () => {
  const { formProp } = Form.use({ tags: [] });

  return <TagInput bind={formProp('tags').bind()} placeholder="Please add some tags..." allowDuplicates />;
};
export const WithValidationErrors = () => {
  const { formProp, formState } = Form.use({ tags: [] });

  return (
    <TagInput
      bind={formProp('tags').bind()}
      placeholder="Please add some tags..."
      validationErrorMessages={formState?.tags?.length < 3 && ['Must have at least 3 tags']}
      spaceCreatesTags
    />
  );
};
export const Above = () => {
  const { formProp } = Form.use({ tags: [] });

  return <TagInput bind={formProp('tags').bind()} placeholder="Please add some tags..." tagPosition="above" />;
};
export const Below = () => {
  const { formProp } = Form.use({ tags: [] });

  return <TagInput bind={formProp('tags').bind()} placeholder="Please add some tags..." tagPosition="below" />;
};
export const Pending = () => {
  const { formProp } = Form.use({ tags: ['thing', 'other thing', 'tag time'] });

  return <TagInput bind={formProp('tags').bind()} placeholder="Please add some tags..." tagPosition="below" pending />;
};
