/* eslint-disable no-alert */

import { StoryUtils } from '../../stories/storyUtils';
import { ConfirmButton } from './confirmButton.component';

/** metadata */

export default StoryUtils.createMeta(ConfirmButton as any, 'Button', 'Confirm Button', {});

/** component template */

const Template = StoryUtils.createTemplate(ConfirmButton);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, { onClick: () => alert('you did it'), children: 'do a thing' });
export const CustomCopy = StoryUtils.cloneTemplate(Template, {
  onClick: () => alert('you did it'),
  children: 'do a thing',
  confirmationDialogConfig: {
    content: 'Woah there are you absolutely sure you wanna do that buddy?',
    buttons: { yes: 'I sure am', no: 'On second thoughts... nah' },
  },
});
