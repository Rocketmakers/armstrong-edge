import * as React from 'react';

import { useTimeout } from '../../hooks';
import { clamp } from '../../utils';

export interface IUseProgressConfig {
  /** should the progress increase by a small amount every interval */
  trickle?: boolean;

  /** the amount to increase by each interval if trickle is set to true (limited to 5% of the remaining progress) */
  trickleAmount?: number;

  /** the time in ms between each increment if trickle is set to true */
  trickleInterval?: number;

  /** the maximum value that can be reached by a trickle or increment before start() has been called */
  maximum?: number;

  /** the minimum value to set to once start has been called */
  minimum?: number;
}

export interface IUseProgressReturn {
  /** start trickling if trickle has been set to true in config */
  start: () => void;

  /** set the progress to 100 percent */
  complete: () => void;

  /** set the progress to a specific arbitrary value in percent */
  set: (newValue: number) => void;

  /** reset the value to 0 percent and stop trickling if enabled */
  reset: () => void;

  /** increase the value by an amount in percent */
  increment: (amount: number) => void;

  /** the current progress in percent */
  progress: number;

  /** has start or set been called */
  started: boolean;
}

/** Get an incrementable spoofed progress designed for use with a ProgressBar or GlobalProgressBar component to make loads appear less static */
export const useProgress = ({
  trickle,
  trickleAmount,
  trickleInterval,
  maximum,
  minimum,
}: IUseProgressConfig = {}): IUseProgressReturn => {
  // progress is stored both in state and in a ref so the existing state can easily be accessed inside the timeout callback (otherwise it will only have access to the state at the time the first timeout was set)
  const [progress, setProgressState] = React.useState(0);
  const progressRef = React.useRef(0);
  const setProgress = React.useCallback((newProgress: number) => {
    setProgressState(newProgress);
    progressRef.current = newProgress;
  }, []);

  const [started, setStarted] = React.useState(false);

  const set = React.useCallback((newProgress: number) => {
    setStarted(true);
    setProgress(clamp(newProgress, 0, maximum || 95));
  }, []);

  const increment = React.useCallback(
    (amount: number) => {
      set(progressRef.current + amount);
    },
    [set]
  );

  const { set: setProgInterval, clear: clearProgInterval } = useTimeout(async () => {
    if (trickle) {
      increment(Math.min((100 - progressRef.current) * 0.05, trickleAmount || 2));
      void setProgInterval();
    }
  }, trickleInterval || 750);

  const completeStopStarted = React.useCallback(() => setStarted(false), []);
  const { set: setCompleteInterval } = useTimeout(completeStopStarted, 500);

  const complete = React.useCallback(() => {
    setProgress(100);
    clearProgInterval();
    void setCompleteInterval();
  }, [clearProgInterval]);

  const start = React.useCallback(() => {
    setStarted(true);
    set(minimum || 5);
    clearProgInterval();
    void setProgInterval();
  }, [set, setProgInterval, clearProgInterval]);

  const reset = React.useCallback(() => {
    setProgress(0);
    clearProgInterval();
    void setCompleteInterval();
  }, []);

  return { start, complete, set, reset, increment, progress, started };
};
