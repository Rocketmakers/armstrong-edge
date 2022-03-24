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
    <Tooltip content="I'm in a tooltip" tooltipPosition={['above']}>
      <p>Hover over me for some cool stuff</p>
    </Tooltip>
  );
};

export const WithTail = () => {
  return (
    <Tooltip content="I'm in a tooltip" tooltipPosition={['above']} showTail>
      <p>Hover over me for some cool stuff</p>
    </Tooltip>
  );
};
export const CustomisedPosition = () => {
  return (
    <Group>
      <Tooltip content="I'm in a tooltip" tooltipPosition={['left']} showTail>
        <p>left</p>
      </Tooltip>
      <Tooltip content="I'm in a tooltip" tooltipPosition={['above']} showTail>
        <p>above</p>
      </Tooltip>
      <Tooltip content="I'm in a tooltip" tooltipPosition={['below']} showTail>
        <p>below</p>
      </Tooltip>
      <Tooltip content="I'm in a tooltip" tooltipPosition={['right']} showTail>
        <p>right</p>
      </Tooltip>
    </Group>
  );
};
export const OpenOnFocus = () => {
  return (
    <Tooltip content="I'm in a tooltip" tooltipPosition={['below']} openOnHover={false} openOnFocus>
      <TextInput placeholder="focus on me to see some tooltip" />
    </Tooltip>
  );
};
export const OpenOnClick = () => {
  return (
    <Tooltip content="HIYA" tooltipPosition={['above']} openOnClick openOnHover={false}>
      <p>Oh hey hey look at this here</p>
    </Tooltip>
  );
};
export const CustomOpeningLogic = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Tooltip content="I'm in a tooltip" tooltipPosition={['above']} isOpen={isOpen} openOnHover={false}>
      <Button onClick={() => setIsOpen(!isOpen)}>Click here to open the tooltip</Button>
    </Tooltip>
  );
};
export const CustomContent = () => {
  return (
    <Tooltip
      content={
        <div className="custom-tooltip-example">
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
export const CentreOnMobile = () => {
  return (
    <Tooltip content="HIYA" tooltipPosition={['above']} centreOnMobile openOnClick openOnHover={false}>
      <p>Oh hey hey look at this here</p>
    </Tooltip>
  );
};
