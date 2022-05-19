import { Cypress } from 'local-cypress';
import { setGlobalConfig } from '@storybook/testing-react';
import * as sbPreview from '../../.storybook/preview';

import './commands';

import './styles.scss';

// Config

setGlobalConfig(sbPreview);

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('ResizeObserver loop limit exceeded')) {
    return false;
  }
});
