import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const armstrongTheme = create({
  base: 'light',
  brandTitle: 'Armstrong Storybook',
  brandUrl: 'https://github.com/Rocketmakers/armstrong-edge',
  colorPrimary: '#fe435c',
  colorSecondary: '#ed5d21',
});


addons.setConfig({
  theme: armstrongTheme,
});
