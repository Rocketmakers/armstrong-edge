import * as React from 'react';

import { useInterval } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { GlobalProgressBar } from './globalProgressBar.component';

/** metadata */

export default StoryUtils.createMeta(GlobalProgressBar, 'Display', 'Global Progress Bar', {});

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

  return <GlobalProgressBar progress={progress} />;
};

export const ColourFading = () => {
  const progress = useFakeProgress();

  return <GlobalProgressBar progress={progress} colorBreakpoints={['#ff1100', '#c800ff', '#00ff11']} />;
};

export const WithLabel = () => {
  const progress = useFakeProgress();

  return <GlobalProgressBar progress={progress} labelText={`${progress}%`} />;
};
export const LabelCentresProgress = () => {
  const progress = useFakeProgress();

  return <GlobalProgressBar progress={progress} labelText={`${progress}%`} labelVariant="centre-progress" />;
};

export const Left = () => {
  const progress = useFakeProgress();

  return <GlobalProgressBar progress={progress} position="left" direction="up" />;
};
export const Bottom = () => {
  const progress = useFakeProgress();

  return <GlobalProgressBar progress={progress} position="bottom" />;
};
export const Right = () => {
  const progress = useFakeProgress();

  return <GlobalProgressBar progress={progress} position="right" />;
};
