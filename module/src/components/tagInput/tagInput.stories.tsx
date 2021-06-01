import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { TagInput } from './tagInput.component';

/** metadata */

export default StoryUtils.createMeta(TagInput, 'Form', 'TagInput', {});

/** component template */

const Template = StoryUtils.createTemplate(TagInput);

/** stories */

export const Default = () => {
  const [tags, setTags] = React.useState([]);

  return <TagInput value={tags} onChange={setTags} placeholder="Please add some tags..." />;
};
export const NoDeletingWithButton = () => {
  const [tags, setTags] = React.useState([]);

  return <TagInput value={tags} onChange={setTags} placeholder="Please add some tags..." deleteButton={false} />;
};
export const SpaceAddsTags = () => {
  const [tags, setTags] = React.useState([]);

  return <TagInput value={tags} onChange={setTags} placeholder="Please add some tags..." spaceCreatesTags />;
};
export const DuplicatesAllowed = () => {
  const [tags, setTags] = React.useState([]);

  return <TagInput value={tags} onChange={setTags} placeholder="Please add some tags..." allowDuplicates />;
};
export const WithValidationErrors = () => {
  const [tags, setTags] = React.useState([]);

  return (
    <TagInput
      value={tags}
      onChange={setTags}
      placeholder="Please add some tags..."
      validationErrorMessages={tags?.length < 3 && ['Must have at least 3 tags']}
      spaceCreatesTags
    />
  );
};
export const Above = () => {
  const [tags, setTags] = React.useState([]);

  return <TagInput value={tags} onChange={setTags} placeholder="Please add some tags..." tagPosition="above" />;
};
export const Below = () => {
  const [tags, setTags] = React.useState([]);

  return <TagInput value={tags} onChange={setTags} placeholder="Please add some tags..." tagPosition="below" />;
};
export const Pending = () => {
  const [tags, setTags] = React.useState(['thing', 'other thing', 'tag time']);

  return <TagInput value={tags} onChange={setTags} placeholder="Please add some tags..." tagPosition="below" pending />;
};
