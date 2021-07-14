import * as React from 'react';

import { Form } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { AutoCompleteInput } from '../autoCompleteInput';
import { Button } from '../button';
import { CalendarInput } from '../calendarInput';
import { IconUtils } from '../icon';
import { ListBox } from '../listBox';
import { TextArea } from '../textArea';
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
    birthday: undefined as string,
    favouriteColour: '',
    favouriteFood: '',
    userType: '',
    bio: '',
  });

  const submit = React.useCallback(() => {
    formProp('lastname').addValidationError('uh oh spaghettios');
  }, []);

  return (
    <div className="story-scroll-container">
      <div className="form">
        <p>Scroll to the bottom and press submit</p>

        <label>
          firstname <br />
          <TextInput scrollValidationErrorsIntoView bind={formProp('firstname').bind()} />
        </label>

        <label>
          lastname <br />
          <TextInput scrollValidationErrorsIntoView bind={formProp('lastname').bind()} />
        </label>

        <label>
          birthday
          <br />
          <CalendarInput scrollValidationErrorsIntoView calendarPosition="below" keepCalendarOpen bind={formProp('birthday').bind() as any} />
        </label>

        <label>
          favourite colour
          <ListBox
            scrollValidationErrorsIntoView
            options={[{ id: 'red' }, { id: 'brown' }, { id: 'purple' }]}
            bind={formProp('favouriteColour').bind()}
          />
        </label>

        <label>
          favourite food
          <AutoCompleteInput
            scrollValidationErrorsIntoView
            options={[{ id: 'chicken nuggets' }, { id: 'pizza' }, { id: 'carbonara' }]}
            bind={formProp('favouriteFood').bind()}
          />
        </label>

        <label>
          bio
          <TextArea scrollValidationErrorsIntoView bind={formProp('bio').bind()} />
        </label>

        <Button onClick={submit}>Submit</Button>
      </div>
    </div>
  );
};
