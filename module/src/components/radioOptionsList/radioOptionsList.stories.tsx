import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { RadioOptionsList } from './radioOptionsList.component';

/** metadata */

export default StoryUtils.createMeta(RadioOptionsList as any, 'Form', 'Radio Options List', {});

/** component template */

// const Template = StoryUtils.createTemplate(RadioInputList);

/** stories */

export const Default = () => {
  const [value, setValue] = React.useState('');

  return (
    <>
      <RadioOptionsList
        value={value}
        onChange={setValue}
        options={[
          { id: 'a', name: 'red' },
          { id: 'b', name: 'blue' },
          { id: 'c', name: 'pink' },
          { id: 'd', name: 'brown' },
        ]}
      />
      <br />
      <br />
      <br />
      <p className="bound-value">bound value: {value}</p>
    </>
  );
};
