import * as React from 'react';

import { Button, Group, useInterval } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { useProgress } from '../progressBar/progressBar.hooks';
import { FixedProgressBar } from './fixedProgressBar.component';

/** metadata */

export default StoryUtils.createMeta(FixedProgressBar, 'Display', 'Fixed Progress Bar', {});

/** component template */

// const Template = StoryUtils.createTemplate(GlobalProgressBar as React.FC<IGlobalProgressBarProps<any, any>>);

/** stories */

const useFakeProgress = () => {
  const [progress, setProgress] = React.useState(0);

  const interval = React.useCallback(() => {
    if (progress < 200) {
      setProgress(progress + 5);
    } else {
      setProgress(0);
    }
  }, [progress]);

  const { set } = useInterval(interval, 100);

  React.useEffect(set, []);

  return Math.min(100, progress);
};

export const Default = () => {
  const progress = useFakeProgress();

  return <FixedProgressBar progress={progress} />;
};

export const ColourFading = () => {
  const progress = useFakeProgress();

  return <FixedProgressBar progress={progress} colorBreakpoints={['#ff1100', '#c800ff', '#00ff11']} />;
};

export const WithLabel = () => {
  const progress = useFakeProgress();

  return <FixedProgressBar progress={progress} labelText={`${progress}%`} />;
};
export const LabelCentresProgress = () => {
  const progress = useFakeProgress();

  return <FixedProgressBar progress={progress} labelText={`${progress}%`} labelVariant="centre-progress" />;
};

export const Left = () => {
  const progress = useFakeProgress();

  return <FixedProgressBar progress={progress} position="left" direction="up" />;
};
export const Bottom = () => {
  const progress = useFakeProgress();

  return <FixedProgressBar progress={progress} position="bottom" />;
};
export const Right = () => {
  const progress = useFakeProgress();

  return <FixedProgressBar progress={progress} position="right" />;
};

export const UseProgressHook = () => {
  const { progress, start, increment, complete, reset, started } = useProgress({ trickle: true });

  return (
    <>
      <FixedProgressBar progress={progress} hidden={!started} />

      <Group>
        <Button onClick={start}>Start</Button>
        <Button onClick={() => increment(10)}>Increment 10%</Button>
        <Button onClick={complete}>Complete</Button>
        <Button onClick={reset}>Reset</Button>
      </Group>
    </>
  );
};
