// eslint-disable-next-line import/no-extraneous-dependencies
import { ArgTypes as RootArgTypes, Meta, Story } from '@storybook/react';
import * as React from 'react';

export namespace StoryUtils {
  /** TYPES */

  type RootArgType = RootArgTypes[0];

  interface ArgTypeControl {
    type: 'text' | 'boolean' | 'select' | 'color';
    options?: string[];
  }

  interface ArgType extends RootArgType {
    control?: ArgTypeControl;
    action?: string;
  }

  type ArgTypes<TProps> = Partial<Record<keyof TProps, ArgType>>;

  export const disabledArgTypes = {
    formProps: {
      table: {
        disable: true,
      },
    },
    dataPayload: {
      table: {
        disable: true,
      },
    },
    question: {
      table: {
        disable: true,
      },
    },
  };

  /** ORGANISATION */

  const Folder = {
    Form: 'Form',
    FormUtils: 'Form Utils',
    Button: 'Buttons',
    Display: 'Display',
    Layout: 'Layout',
  };

  /** SCAFFOLD */

  export function createMeta<TComponent extends React.FC>(
    component: TComponent,
    folder: keyof typeof Folder,
    title: string,
    argTypes?: ArgTypes<React.ComponentProps<TComponent>>
  ): Meta {
    return {
      title: `${folder}/${title}`,
      component,
      argTypes: argTypes as RootArgTypes,
    };
  }

  export function createTemplate<TComponent extends React.FC<any>>(Component: TComponent, template?: Story<React.ComponentProps<TComponent>>) {
    return template ?? ((props) => <Component {...props} />);
  }

  export function cloneTemplate<TProps>(template: Story<TProps>, props: TProps) {
    const clonedTemplate = template.bind({}) as typeof template;
    clonedTemplate.args = props;
    return clonedTemplate;
  }

  /** UTILS */

  export function testLeftOverlayText() {
    return ['#', '%', '@'];
  }

  export function testRightOverlayText() {
    return ['kWh', '.00', 'Km'];
  }

  export function validationTypes() {
    return ['below', 'icon', 'both'];
  }
}
