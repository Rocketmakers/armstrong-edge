import * as React from 'react';

import { Form } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { TextInput } from '../textInput';
import { ValidationErrors } from './validationErrors.component';

/** metadata */

export default StoryUtils.createMeta(ValidationErrors as any, 'FormUtils', 'Validation Errors', { validationErrors: [] });

/** component template */

const Template = StoryUtils.createTemplate(ValidationErrors);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, {
  validationErrors: ["This doesn't look right", 'User error lol'],
});
export const CustomIcon = StoryUtils.cloneTemplate(Template, {
  validationErrors: ["This doesn't look right", 'User error lol'],
  icon: IconUtils.getIconDefinition('Icomoon', 'weather-cloud-sun'),
});
export const ScrollIntoView = () => {
  const { formProp } = Form.use({
    firstname: 'steve',
    lastname: 'jones',
    birthday: '',
    favouriteColour: '',
    favouriteFood: '',
    userType: '',
    bio: '',
  });

  return (
    <form>
      <label>
        firstname <br />
        <TextInput bind={formProp('firstname').bind()} />
      </label>
      <label>
        lastname <br />
        <TextInput bind={formProp('lastname').bind()} />
      </label>
    </form>
  );
};
