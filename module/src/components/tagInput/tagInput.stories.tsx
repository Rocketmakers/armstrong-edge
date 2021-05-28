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

  return <TagInput value={tags} onChange={setTags} />;
};
export const NoDeletingWithButton = () => {
  const [tags, setTags] = React.useState([]);

  return <TagInput value={tags} onChange={setTags} deleteButton={false} />;
};
export const SpaceAddsTags = () => {
  const [tags, setTags] = React.useState([]);

  return <TagInput value={tags} onChange={setTags} spaceCreatesTags />;
};
export const DuplicatesAllowed = () => {
  const [tags, setTags] = React.useState([]);

  return <TagInput value={tags} onChange={setTags} allowDuplicates />;
};
export const WithValidationErrors = () => {
  const [tags, setTags] = React.useState([]);

  return <TagInput value={tags} onChange={setTags} validationErrorMessages={tags?.length < 3 && ['Must have at least 3 tags']} spaceCreatesTags />;
};
export const Above = () => {
  const [tags, setTags] = React.useState([]);

  return <TagInput value={tags} onChange={setTags} tagPosition="above" />;
};
export const Below = () => {
  const [tags, setTags] = React.useState([]);

  return <TagInput value={tags} onChange={setTags} tagPosition="below" />;
};
