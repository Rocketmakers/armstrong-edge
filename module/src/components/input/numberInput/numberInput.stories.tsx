import { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import React from "react";
import { NumberInput } from "./numberInput.component";
import { Form } from "../../../hooks";

 export default {
   title: 'Form/Inputs/Number',
   component: NumberInput,
 } as Meta;

export const Generic: StoryObj<typeof NumberInput> = {
    render: (args) => {
        interface IFormData {
            thing: number | null;
        };
        const { bind, ...props } = args;
        const formData: IFormData = { thing: 0 };
        const { formProp } = Form.use(formData);

        return (
        <>
            <NumberInput bind={formProp('thing').bind()} {...props} max={5} />
        </>
        );
    },
    args: {
    },
    parameters: {
        
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole('spinbutton', { hidden: true });
    }
}
