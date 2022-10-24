import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { Stepper } from './stepper.component';

/** metadata */

export default StoryUtils.createMeta(Stepper, 'Layout', 'Stepper', {});

/** component template */

// const Template = StoryUtils.createTemplate(Stepper);

/** stories */

export const Default = () => {
  const [step, setStep] = React.useState(0);

  return (
    <Stepper
      stepIndex={step}
      onStepIndexChange={setStep}
      steps={[
        { icon: IconUtils.getIconDefinition('Icomoon', 'starburst'), name: 'Thing' },
        { icon: IconUtils.getIconDefinition('Icomoon', 'moon'), name: 'Another thing' },
        { icon: IconUtils.getIconDefinition('Icomoon', 'pizza'), name: 'The last thing' },
      ]}
    />
  );
};
export const WithoutNames = () => {
  const [step, setStep] = React.useState(0);

  return (
    <Stepper
      stepIndex={step}
      onStepIndexChange={setStep}
      steps={[
        { icon: IconUtils.getIconDefinition('Icomoon', 'starburst') },
        { icon: IconUtils.getIconDefinition('Icomoon', 'moon') },
        { icon: IconUtils.getIconDefinition('Icomoon', 'pizza') },
      ]}
    />
  );
};
export const WithIndex = () => {
  const [step, setStep] = React.useState(0);

  return (
    <Stepper
      showIndex
      stepIndex={step}
      onStepIndexChange={setStep}
      steps={[{ name: 'Thing' }, { name: 'Another thing' }, { name: 'The last thing' }]}
    />
  );
};
export const WithDisabledSteps = () => {
  const [step, setStep] = React.useState(0);

  return (
    <Stepper
      stepIndex={step}
      onStepIndexChange={setStep}
      steps={[
        { icon: IconUtils.getIconDefinition('Icomoon', 'starburst'), name: 'Thing' },
        { icon: IconUtils.getIconDefinition('Icomoon', 'moon'), name: 'Another thing' },
        { icon: IconUtils.getIconDefinition('Icomoon', 'pizza'), name: 'The last thing', disabled: true },
      ]}
    />
  );
};
export const WithStatuses = () => {
  const [step, setStep] = React.useState(0);

  return (
    <Stepper
      showIndex
      stepIndex={step}
      onStepIndexChange={setStep}
      steps={[
        { icon: IconUtils.getIconDefinition('Icomoon', 'starburst'), name: 'Thing', pending: true },
        { icon: IconUtils.getIconDefinition('Icomoon', 'moon'), name: 'Another thing' },
        { icon: IconUtils.getIconDefinition('Icomoon', 'pizza'), name: 'The last thing', error: true },
      ]}
    />
  );
};
export const WithCompleteIcon = () => {
  const [step, setStep] = React.useState(0);

  return (
    <Stepper
      stepIndex={step}
      onStepIndexChange={setStep}
      completeIcon={IconUtils.getIconDefinition('Icomoon', 'checkmark3')}
      steps={[
        { icon: IconUtils.getIconDefinition('Icomoon', 'starburst'), name: 'Thing', isComplete: step > 0 },
        { icon: IconUtils.getIconDefinition('Icomoon', 'moon'), name: 'Another thing', isComplete: step > 1 },
        { icon: IconUtils.getIconDefinition('Icomoon', 'pizza'), name: 'The last thing', isComplete: step > 2 },
      ]}
    />
  );
};
export const Smaller = () => {
  const [step, setStep] = React.useState(0);

  return (
    <Stepper
      stepIndex={step}
      onStepIndexChange={setStep}
      completeIcon={IconUtils.getIconDefinition('Icomoon', 'checkmark3')}
      steps={[
        { name: 'Thing', isComplete: step > 0 },
        { name: 'Another thing', isComplete: step > 1 },
        { name: 'The last thing', isComplete: step > 2 },
      ]}
    />
  );
};
export const SmallerWithStatuses = () => {
  const [step, setStep] = React.useState(0);

  return (
    <Stepper
      stepIndex={step}
      onStepIndexChange={setStep}
      steps={[{ name: 'Thing', pending: true }, { name: 'Another thing' }, { name: 'The last thing', error: true }]}
    />
  );
};
export const Mixed = () => {
  const [step, setStep] = React.useState(0);

  return (
    <Stepper
      stepIndex={step}
      onStepIndexChange={setStep}
      completeIcon={IconUtils.getIconDefinition('Icomoon', 'checkmark3')}
      steps={[
        { name: 'Thing', isComplete: step > 0 },
        { name: 'Another thing', isComplete: step > 1 },
        { name: 'The cheese thing', isComplete: step > 2, icon: IconUtils.getIconDefinition('Icomoon', 'cheese') },
        { name: 'The last thing', isComplete: step > 3 },
      ]}
    />
  );
};
export const Vertical = () => {
  const [step, setStep] = React.useState(0);

  return (
    <Stepper
      stepIndex={step}
      onStepIndexChange={setStep}
      direction="vertical"
      completeIcon={IconUtils.getIconDefinition('Icomoon', 'checkmark3')}
      steps={[
        { name: 'Thing', isComplete: step > 0 },
        { name: 'Another thing', isComplete: step > 1 },
        { name: 'The cheese thing', isComplete: step > 2 },
        { name: 'The last thing', isComplete: step > 3 },
      ]}
    />
  );
};
