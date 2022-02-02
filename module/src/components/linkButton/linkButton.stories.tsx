import * as React from 'react';

import { ClassNames } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { LinkProvider } from '../link';
import { LinkButton } from './linkButton.component';

/** metadata */

export default StoryUtils.createMeta(LinkButton, 'Button', 'LinkButton', {});

/** component template */

const Template = StoryUtils.createTemplate(LinkButton);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, { to: 'https://rocketmakers.com', children: 'Click me please' });
export const PropsPassedToLink = StoryUtils.cloneTemplate(Template, {
  to: 'https://rocketmakers.com',
  children: 'Click me please',
  rootElementProps: { target: '_blank' },
});
export const WithIcons = StoryUtils.cloneTemplate(Template, {
  to: 'https://rocketmakers.com',
  leftIcon: { icon: 'weather-rain2', iconSet: 'Icomoon' },
  children: 'Click me please',
});
export const Disabled = StoryUtils.cloneTemplate(Template, {
  to: 'https://rocketmakers.com',
  leftIcon: { icon: 'cogs', iconSet: 'Icomoon' },
  disabled: true,
  children: 'Click me please',
});
export const Pending = StoryUtils.cloneTemplate(Template, {
  to: 'https://rocketmakers.com',
  leftIcon: { icon: 'eye-blocked2', iconSet: 'Icomoon' },
  children: 'Click me please',
  pending: true,
});
export const PendingOnLeft = StoryUtils.cloneTemplate(Template, {
  to: 'https://rocketmakers.com',
  leftIcon: { icon: 'eye-blocked2', iconSet: 'Icomoon' },
  children: 'Click me please',
  pending: true,
  statusPosition: 'left',
});
export const Error = StoryUtils.cloneTemplate(Template, {
  to: 'https://rocketmakers.com',
  leftIcon: { icon: 'eye-blocked2', iconSet: 'Icomoon' },
  children: 'Click me please',
  error: true,
});
export const Minimal = StoryUtils.cloneTemplate(Template, {
  to: 'https://rocketmakers.com',
  leftIcon: { icon: 'weather-rain2', iconSet: 'Icomoon' },
  children: 'Click me please',
  minimalStyle: true,
});
export const CustomLinkComponent = () => {
  return (
    // add to root providers
    <LinkProvider
      Component={({ children, className, to, ...props }) => (
        // eslint-disable-next-line no-alert
        <div {...props} className={ClassNames.concat('my-custom-link-component', className)} onClick={() => alert(`Go to ${to}`)}>
          {children}
        </div>
      )}
    >
      <LinkButton to="https://rocketmakers.com">Use this to hook into routing libraries</LinkButton>
    </LinkProvider>
  );
};
export const ReactRouter = () => {
  // pretend this is an import from react router
  const Link: React.FC<any> = () => <></>;

  return (
    // add to root providers
    <LinkProvider
      Component={({ children, className, to, ...props }) => (
        <Link to={to} {...props} className={className}>
          {children}
        </Link>
      )}
    >
      <LinkButton to="https://rocketmakers.com">Use this to hook into routing libraries</LinkButton>
    </LinkProvider>
  );
};
