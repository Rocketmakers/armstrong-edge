import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { Dates } from '../../utils/dates';
import { Button } from '../button';
import { useDispatchToast } from '.';
import { ToastProvider } from './toast.context';

/** metadata */

export default StoryUtils.createMeta(ToastProvider, 'Layout', 'Toast Notification', {});

/** component template */

// const Template = StoryUtils.createTemplate(Tooltip);

/** stories */

export const Toast = () => {
  const dispatch = useDispatchToast();

  return <Button onClick={() => dispatch({ title: "I'm some toast" })}>Click here to open the toast</Button>;
};
export const ToastPositions = () => {
  const dispatch = useDispatchToast();

  return (
    <div className="buttons-wrapper">
      <Button onClick={() => dispatch({ title: "I'm some toast", location: 'top-left' })}>Click here to open the toast to the top left</Button>
      <Button onClick={() => dispatch({ title: "I'm some toast", location: 'bottom-left' })}>Click here to open the toast to the bottom left</Button>
      <Button onClick={() => dispatch({ title: "I'm some toast", location: 'top-right' })}>Click here to open the toast to the top right</Button>
      <Button onClick={() => dispatch({ title: "I'm some toast", location: 'bottom-right' })}>
        Click here to open the toast to the bottom right
      </Button>
    </div>
  );
};
export const ToastTypes = () => {
  const dispatch = useDispatchToast();

  return (
    <div className="buttons-wrapper">
      <Button onClick={() => dispatch({ title: "I'm some toast", type: 'error' })}>Click here to open a toast with type error</Button>
      <Button onClick={() => dispatch({ title: "I'm some toast", type: 'info' })}>Click here to open a toast with type info</Button>
      <Button onClick={() => dispatch({ title: "I'm some toast", type: 'warning' })}>Click here to open a toast with type warning</Button>
      <Button onClick={() => dispatch({ title: "I'm some toast", type: 'success' })}>Click here to open a toast with type success</Button>
    </div>
  );
};
export const CustomContent = () => {
  const dispatch = useDispatchToast();

  return (
    <Button
      onClick={() =>
        dispatch({
          title: "I'm some toast",
          content: ({ dismiss, toast }) => (
            <>
              <p>I'm in the toast</p>
              <p>{Dates.dateToString(toast.timestamp)}</p>
              <Button onClick={dismiss}>dismiss me</Button>
            </>
          ),
        })
      }
    >
      Click here to open the toast
    </Button>
  );
};
