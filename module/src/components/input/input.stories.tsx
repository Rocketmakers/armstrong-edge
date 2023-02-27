import { expect } from '@storybook/jest';
 import { Meta, StoryObj } from '@storybook/react';
 import { userEvent, within } from '@storybook/testing-library';
 import * as React from 'react';

 import * as Form from '../../hooks/form';
 import { IconUtils } from '../icon';
import { NumberInput } from './numberInput';
import { PasswordInput } from './passwordInput';
import { TelInput } from './telInput';
import { TextInput } from './textInput';
 import { Input } from './input.component';

 /** metadata */

const meta: Meta<typeof Input> = {
   title: 'Form/Inputs',
   component: Input
 };
export default meta;

 /** stories */

 export const Generic: StoryObj<typeof Input> = {
    render: (args) => {
        interface IFormData {
            thing: string | null;
        };

        const { bind, ...props } = args;
        const formData: IFormData = { thing: '' };
        const { formProp } = Form.use(formData);

        return (
        <>
            <Input bind={formProp('thing').bind()} {...props} />
        </>
        );
    },
    args: {
        type: 'text'
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole('textbox', { hidden: true });
    }
}