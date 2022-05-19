import * as React from 'react';

import { Form } from '../../hooks';
import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { AutoCompleteInputMulti } from './autoCompleteInputMulti.component';

/** metadata */

export default StoryUtils.createMeta(AutoCompleteInputMulti, 'Form', 'Auto Complete Input Multi', {
  placeholder: {
    control: { type: 'text' },
    description: 'Adds placeholder text to the input',
    table: { category: 'Text' },
  },
  disabled: {
    control: { type: 'boolean' },
    description: 'Disable inputs',
    table: { category: 'Boolean' },
  },
});

/** component template */

// const Template = StoryUtils.createTemplate(AutoCompleteInputMulti);

/** stories */

export const Default = () => {
  const { formProp, formState } = Form.use({ value: [] });

  return (
    <>
      <AutoCompleteInputMulti
        bind={formProp('value').bind()}
        options={[
          { id: 1, name: 'red' },
          { id: 2, name: 'blue' },
          { id: 3, name: 'purple' },
        ]}
      />
      <p className="bound-value">bound value: {formState?.value.join(', ')}</p>
    </>
  );
};

export const DontClose = () => {
  const { formProp, formState } = Form.use({ value: [] });

  return (
    <>
      <AutoCompleteInputMulti
        bind={formProp('value').bind()}
        options={[
          { id: 1, name: 'red' },
          { id: 2, name: 'blue' },
          { id: 3, name: 'purple' },
        ]}
        closeOnBackgroundClick={false}
        closeOnScroll={false}
        closeOnWindowBlur={false}
        closeOnWindowClick={false}
        closeOnSelection={false}
        placeholder="this is very useful for inspecting"
        filterOptions={false}
      />
      <p className="bound-value">bound value: {formState?.value.join(', ')}</p>
    </>
  );
};

export const tagsAbove = () => {
  const { formProp, formState } = Form.use({ value: [] });

  return (
    <>
      <AutoCompleteInputMulti
        bind={formProp('value').bind()}
        tagPosition="above"
        options={[
          { id: 1, name: 'red' },
          { id: 2, name: 'blue' },
          { id: 3, name: 'purple' },
        ]}
      />
      <p className="bound-value">bound value: {formState?.value.join(', ')}</p>
    </>
  );
};
export const AllowFreeText = () => {
  const { formProp, formState } = Form.use({ value: [] });

  return (
    <>
      <AutoCompleteInputMulti
        bind={formProp('value').bind()}
        allowFreeText
        options={[
          { id: 1, name: 'red' },
          { id: 2, name: 'blue' },
          { id: 3, name: 'purple' },
        ]}
      />
      <p className="bound-value">bound value: {formState?.value.join(', ')}</p>
    </>
  );
};
export const WithIcons = () => {
  const { formProp, formState } = Form.use({ value: [] });

  return (
    <>
      <AutoCompleteInputMulti
        bind={formProp('value').bind()}
        leftIcon={IconUtils.getIconDefinition('Icomoon', 'brush')}
        options={[
          { id: 1, name: 'red', leftIcon: IconUtils.getIconDefinition('Icomoon', 'chopper2') },
          { id: 2, name: 'blue', leftIcon: IconUtils.getIconDefinition('Icomoon', 'cherry') },
          { id: 3, name: 'purple', leftIcon: IconUtils.getIconDefinition('Icomoon', 'circle-css') },
        ]}
      />
      <p className="bound-value">bound value: {formState?.value.join(', ')}</p>
    </>
  );
};
export const WithGroups = () => {
  const { formProp, formState } = Form.use({ value: [] });

  return (
    <>
      <AutoCompleteInputMulti
        bind={formProp('value').bind()}
        leftIcon={IconUtils.getIconDefinition('Icomoon', 'brush')}
        options={[
          { id: 1, name: 'red', leftIcon: IconUtils.getIconDefinition('Icomoon', 'chopper2'), group: 'primary' },
          { id: 2, name: 'blue', leftIcon: IconUtils.getIconDefinition('Icomoon', 'cherry'), group: 'primary' },
          { id: 3, name: 'purple', leftIcon: IconUtils.getIconDefinition('Icomoon', 'circle-css'), group: 'secondary' },
        ]}
      />
      <p className="bound-value">bound value: {formState?.value.join(', ')}</p>
    </>
  );
};
export const WithValidationErrors = () => {
  const { formProp, formState } = Form.use({ value: [] });

  return (
    <>
      <AutoCompleteInputMulti
        bind={formProp('value').bind()}
        leftIcon={IconUtils.getIconDefinition('Icomoon', 'brush')}
        options={[
          { id: 1, name: 'red', leftIcon: IconUtils.getIconDefinition('Icomoon', 'chopper2'), group: 'primary' },
          { id: 2, name: 'blue', leftIcon: IconUtils.getIconDefinition('Icomoon', 'cherry'), group: 'primary' },
          { id: 3, name: 'purple', leftIcon: IconUtils.getIconDefinition('Icomoon', 'circle-css'), group: 'secondary' },
        ]}
        validationErrorMessages={['your taste in colours is terrible']}
      />
      <p className="bound-value">bound value: {formState?.value.join(', ')}</p>
    </>
  );
};

export const WithCustomClasses = () => {
  const { formProp, formState } = Form.use({ value: [] });

  return (
    <>
      <AutoCompleteInputMulti
        bind={formProp('value').bind()}
        options={[
          { id: 1, name: 'red', tagHtmlProps: { className: 'group1' }, dropDownItemHtmlProps: { className: 'group1' } },
          { id: 2, name: 'blue', tagHtmlProps: { className: 'group1' }, dropDownItemHtmlProps: { className: 'group2' } },
          { id: 3, name: 'purple', tagHtmlProps: { className: 'group2' }, dropDownItemHtmlProps: { className: 'group1' } },
        ]}
      />
      <p className="bound-value">bound value: {formState?.value.join(', ')}</p>
    </>
  );
};

export const Above = () => {
  const { formProp, formState } = Form.use({ value: [] });

  return (
    <>
      <AutoCompleteInputMulti
        bind={formProp('value').bind()}
        options={[
          { id: 1, name: 'red' },
          { id: 2, name: 'blue' },
          { id: 3, name: 'purple' },
        ]}
        position="above"
      />
      <p className="bound-value">bound value: {formState?.value.join(', ')}</p>
    </>
  );
};
