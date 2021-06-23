import * as React from 'react';

import { useInterval } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { Button } from '../button';
import { ProgressBar } from './progressBar.component';
import { useProgress } from './progressBar.hooks';

/** metadata */

export default StoryUtils.createMeta(ProgressBar, 'Display', 'Progress Bar', {});

/** component template */

// const Template = StoryUtils.createTemplate(ProgressBar as React.FC<IProgressBarProps<any, any>>);

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

  return <ProgressBar progress={progress} />;
};

export const ColourFading = () => {
  const progress = useFakeProgress();

  return <ProgressBar progress={progress} colorBreakpoints={['#ff1100', '#c800ff', '#00ff11']} />;
};

export const WithLabel = () => {
  const progress = useFakeProgress();

  return <ProgressBar progress={progress} labelText={`${progress}%`} />;
};
export const LabelCentresProgress = () => {
  const progress = useFakeProgress();

  return <ProgressBar progress={progress} labelText={`${progress}%`} labelVariant="centre-progress" />;
};

export const Up = () => {
  const progress = useFakeProgress();

  return <ProgressBar progress={progress} direction="up" />;
};
export const Left = () => {
  const progress = useFakeProgress();

  return <ProgressBar progress={progress} direction="left" />;
};
export const Down = () => {
  const progress = useFakeProgress();

  return <ProgressBar progress={progress} direction="down" />;
};

export const UseProgressHook = () => {
  const { progress, start, increment, complete, reset } = useProgress({ trickle: true });

  return (
    <>
      <ProgressBar progress={progress} />

      <div className="buttons-wrapper">
        <Button onClick={start}>Start</Button>
        <Button onClick={() => increment(10)}>Increment 10%</Button>
        <Button onClick={complete}>Complete</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </>
  );
};
