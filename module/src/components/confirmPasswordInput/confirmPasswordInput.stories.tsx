import * as React from 'react';

import * as Form from '../../hooks/form';
import { StoryUtils } from '../../stories/storyUtils';
import { PasswordInput } from '../passwordInput';
import { ConfirmPasswordInput } from './confirmPasswordInput.component';

/** metadata */

export default StoryUtils.createMeta(ConfirmPasswordInput, 'Form', 'Confirm Password Input', {});

/** component template */

// const Template = StoryUtils.createTemplate(ScrollToEndListener as React.FC<IScrollToEndListenerProps<any, any>>);

/** stories */

export const Default = () => {
  const { formProp } = Form.use({ password: '' });

  return (
    <div className="form">
      <label>
        password
        <PasswordInput bind={formProp('password').bind()} />
      </label>

      <label>
        confirm password
        <ConfirmPasswordInput bind={formProp('password').bind()} />
      </label>
    </div>
  );
};
