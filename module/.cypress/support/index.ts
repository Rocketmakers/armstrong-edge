import './commands';
import { setGlobalConfig } from '@storybook/testing-react';
import * as sbPreview from '../../.storybook/preview';

import './styles.scss';

setGlobalConfig(sbPreview);
