import { expect } from '@storybook/test';
import * as test from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/test';
import * as React from 'react';
import { ImCheckmark, ImUser } from 'react-icons/im';

import { Button } from '../button';
import { DropdownMenu } from './dropdownMenu.component';

/** items */

const item1change = test.fn();

const items = [
  { label: 'Item 1', onClick: item1change },
  { label: 'Item 2 (not clickable)' },
  { label: 'Item 3 disabled', disabled: true, addSeparatorUnder: true },
  { label: 'Item 4', onClick: test.fn() },
  {
    label: 'Item 5 (left icon)',
    leftOverlay: <ImUser data-testid="user-icon" />,
    onClick: test.fn(),
  },
  {
    label: 'Item 6 (right icon)',
    rightOverlay: <ImCheckmark data-testid="check-icon" />,
    onClick: test.fn(),
  },
];

/** metadata */

export default {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    docs: {
      description: {
        component: 'A simple menu that can be toggled open/closed with a trigger button',
      },
    },
  },
} as Meta<typeof DropdownMenu>;

/** stories */

export const Default: StoryObj<typeof DropdownMenu> = {
  render: () => {
    return (
      <div
        style={{
          height: '350px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <DropdownMenu items={items} data-testid="dropdown">
          <Button type="button" data-testid="button">
            Toggle item list menu
          </Button>
        </DropdownMenu>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId('button');
    userEvent.click(openButton);

    await waitFor(() => expect(canvas.getByTestId('dropdown')).toBeVisible());

    const menuItems = canvas.getAllByRole('menuitem');
    expect(menuItems).toHaveLength(6);

    expect(menuItems[0]).toHaveTextContent('Item 1');
    userEvent.click(menuItems[0]);
    await waitFor(() => expect(item1change).toHaveBeenCalledTimes(1));
    expect(item1change).toHaveBeenCalledWith(0, expect.anything());

    expect(menuItems[2]).toHaveTextContent('Item 3 disabled');
    expect(menuItems[2]).toHaveAttribute('data-disabled');

    const separator = canvas.getAllByRole('separator');
    expect(separator).toHaveLength(1);
  },
};

export const WithArrow: StoryObj<typeof DropdownMenu> = {
  render: () => {
    return (
      <div
        style={{
          height: '350px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <DropdownMenu items={items} data-testid="dropdown" showArrow>
          <Button type="button" data-testid="button">
            Toggle with arrow
          </Button>
        </DropdownMenu>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId('button');
    userEvent.click(openButton);

    await waitFor(() => expect(canvas.getByTestId('dropdown')).toBeVisible());

    const arrow = within(canvas.getByTestId('dropdown')).getByTestId('arm-dropdown-arrow');
    expect(arrow).toBeVisible();
  },
};

export const WithHeaderAndFooter: StoryObj<typeof DropdownMenu> = {
  render: () => {
    return (
      <div
        style={{
          height: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <DropdownMenu
          items={items}
          data-testid="dropdown"
          headerContent={
            <div
              data-testid="header"
              style={{ padding: '16px', textAlign: 'center', fontSize: '14px', backgroundColor: '#e3e3e3' }}
            >
              Header content
            </div>
          }
          footerContent={
            <div
              data-testid="footer"
              style={{ padding: '16px', textAlign: 'center', fontSize: '14px', backgroundColor: '#e3e3e3' }}
            >
              Footer content
            </div>
          }
        >
          <Button type="button" data-testid="button">
            Toggle with header/footer
          </Button>
        </DropdownMenu>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId('button');
    userEvent.click(openButton);

    await waitFor(() => expect(canvas.getByTestId('dropdown')).toBeVisible());

    const header = within(canvas.getByTestId('dropdown')).getByTestId('header');
    expect(header).toBeVisible();

    const footer = within(canvas.getByTestId('dropdown')).getByTestId('footer');
    expect(footer).toBeVisible();
  },
};

export const StateDriven: StoryObj<typeof DropdownMenu> = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div
        style={{
          height: '350px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <Button type="button" data-testid="state-button" onClick={() => setOpen(true)}>
          Toggle from elsewhere
        </Button>
        <DropdownMenu items={items} data-testid="dropdown" open={open} onOpenChange={setOpen}>
          <Button type="button" data-testid="trigger-button" onClick={() => setOpen(true)}>
            Trigger button
          </Button>
        </DropdownMenu>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId('state-button');
    userEvent.click(openButton);

    await waitFor(() => expect(canvas.getByTestId('dropdown')).toBeVisible());
  },
};

export const CustomContent: StoryObj<typeof DropdownMenu> = {
  render: () => {
    return (
      <div
        style={{
          height: '350px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <DropdownMenu
          items={
            <div
              data-testid="custom-content"
              style={{
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Some custom content
            </div>
          }
          data-testid="dropdown"
        >
          <Button type="button" data-testid="button">
            Toggle custom content menu
          </Button>
        </DropdownMenu>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId('button');
    userEvent.click(openButton);

    await waitFor(() => expect(canvas.getByTestId('dropdown')).toBeVisible());

    const customContent = within(canvas.getByTestId('dropdown')).getByTestId('custom-content');
    expect(customContent).toBeVisible();
  },
};
