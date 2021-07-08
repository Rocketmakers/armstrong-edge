import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { Button } from '../button';
import { Group } from '../group';
import { TextInput } from '../textInput';
import { Tooltip } from './tooltip.component';

/** metadata */

export default StoryUtils.createMeta(Tooltip, 'Layout', 'Tooltip', {});

/** component template */

// const Template = StoryUtils.createTemplate(Tooltip);

/** stories */

export const Default = () => {
  return (
    <Tooltip content="HIYA" tooltipPosition={['above']}>
      <p>Hover over me for some cool stuff</p>
    </Tooltip>
  );
};
export const CustomisedPosition = () => {
  return (
    <Tooltip content="HIYA" tooltipPosition={['left']}>
      <p>Hover over me for some cool stuff</p>
    </Tooltip>
  );
};
export const OpenOnFocus = () => {
  return (
    <Tooltip content="HIYA" tooltipPosition={['below']} openOnHover={false} openOnFocus>
      <TextInput placeholder="focus on me to see some tooltip" />
    </Tooltip>
  );
};
export const CustomOpeningLogic = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Tooltip content="HIYA" tooltipPosition={['above']} isOpen={isOpen} openOnHover={false}>
      <Button onClick={() => setIsOpen(!isOpen)}>Click here to open the tooltip</Button>
    </Tooltip>
  );
};
export const CustomContent = () => {
  return (
    <Tooltip
      content={
        <div className="custom-tooltip-example">
          <p>Hey hey hey how's it going</p>
          <br />
          <Group>
            <Button>Do thing</Button>
            <Button>Do other thing</Button>
          </Group>
        </div>
      }
      tooltipPosition={['above']}
    >
      <p>Oh hey hey look at this here</p>
    </Tooltip>
  );
};
