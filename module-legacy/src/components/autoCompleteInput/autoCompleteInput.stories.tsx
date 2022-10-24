import * as React from 'react';

import { Form, useDidUpdateEffect, useTemporaryState } from '../../hooks';
import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { AutoCompleteInput } from './autoCompleteInput.component';

/** metadata */

export default StoryUtils.createMeta(AutoCompleteInput, 'Form', 'Auto Complete Input', {
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

// const Template = StoryUtils.createTemplate(AutoCompleteInput);

/** stories */

const options = [
  { id: '1', name: 'red' },
  { id: '2', name: 'blue' },
  { id: '3', name: 'purple' },
];

export const Default = () => {
  const { formProp, formState } = Form.use({ value: '' });

  return (
    <form>
      <AutoCompleteInput bind={formProp('value').bind()} options={options} cypressTag="autocomplete" />
      <p className="bound-value">bound value: {formState?.value}</p>
    </form>
  );
};

export const DontClose = () => {
  const { formProp, formState } = Form.use({ value: '' });

  return (
    <>
      <AutoCompleteInput
        bind={formProp('value').bind()}
        options={options}
        closeOnBackgroundClick={false}
        closeOnScroll={false}
        closeOnWindowBlur={false}
        closeOnWindowClick={false}
        closeOnSelection={false}
        placeholder="this is very useful for inspecting"
        filterOptions={false}
      />
      <p className="bound-value">bound value: {formState?.value}</p>
    </>
  );
};

export const AllowFreeText = () => {
  const { formProp, formState } = Form.use({ value: '' });

  return (
    <form>
      <AutoCompleteInput bind={formProp('value').bind()} allowFreeText options={options} />
      <p className="bound-value">bound value: {formState?.value}</p>
    </form>
  );
};
export const DontFilter = () => {
  const { formProp, formState } = Form.use({ value: '' });

  return (
    <form>
      <AutoCompleteInput bind={formProp('value').bind()} options={options} filterOptions={false} />
      <p className="bound-value">bound value: {formState?.value}</p>
    </form>
  );
};
export const WithIcons = () => {
  const { formProp, formState } = Form.use({ value: 2 });

  return (
    <form>
      <AutoCompleteInput
        bind={formProp('value').bind()}
        leftIcon={IconUtils.getIconDefinition('Icomoon', 'brush')}
        options={[
          { id: 1, name: 'red', leftIcon: IconUtils.getIconDefinition('Icomoon', 'chopper2') },
          { id: 2, name: 'blue', leftIcon: IconUtils.getIconDefinition('Icomoon', 'cherry') },
          { id: 3, name: 'purple', leftIcon: IconUtils.getIconDefinition('Icomoon', 'circle-css') },
        ]}
      />
      <p className="bound-value">bound value: {formState?.value}</p>
    </form>
  );
};
export const WithGroups = () => {
  const { formProp, formState } = Form.use({ value: 2 });

  return (
    <>
      <AutoCompleteInput
        bind={formProp('value').bind()}
        leftIcon={IconUtils.getIconDefinition('Icomoon', 'brush')}
        options={[
          { id: 1, name: 'red', leftIcon: IconUtils.getIconDefinition('Icomoon', 'chopper2'), group: 'primary' },
          { id: 2, name: 'blue', leftIcon: IconUtils.getIconDefinition('Icomoon', 'cherry'), group: 'primary' },
          { id: 3, name: 'purple', leftIcon: IconUtils.getIconDefinition('Icomoon', 'circle-css'), group: 'secondary' },
        ]}
      />
      <p className="bound-value">bound value: {formState?.value}</p>
    </>
  );
};
export const WithValidationErrors = () => {
  const { formProp, formState } = Form.use({ value: 2 });

  return (
    <>
      <AutoCompleteInput
        bind={formProp('value').bind()}
        leftIcon={IconUtils.getIconDefinition('Icomoon', 'brush')}
        options={[
          { id: 1, name: 'red', leftIcon: IconUtils.getIconDefinition('Icomoon', 'chopper2'), group: 'primary' },
          { id: 2, name: 'blue', leftIcon: IconUtils.getIconDefinition('Icomoon', 'cherry'), group: 'primary' },
          { id: 3, name: 'purple', leftIcon: IconUtils.getIconDefinition('Icomoon', 'circle-css'), group: 'secondary' },
        ]}
        validationErrorMessages={['your taste in colours is terrible']}
      />
      <p className="bound-value">bound value: {formState?.value}</p>
    </>
  );
};
export const AsyncOptions = () => {
  const { formProp, formState } = Form.use({ value: '' });
  const [filter, setFilter] = React.useState('');

  const [filteredOptions, setFilteredOptions] = React.useState(options);

  const [isFetching, setIsFetching] = useTemporaryState(false, 1000, () =>
    setFilteredOptions(options.filter((option) => option.name.toLowerCase().includes(filter.toLowerCase())))
  );

  useDidUpdateEffect(() => {
    setIsFetching(true);
  }, [filter]);

  return (
    <>
      <AutoCompleteInput
        textInputValue={filter}
        onTextInputChange={setFilter}
        bind={formProp('value').bind()}
        leftIcon={IconUtils.getIconDefinition('Icomoon', 'brush')}
        options={filteredOptions}
        filterOptions={false}
        pending={isFetching}
      />
      <p className="bound-value">bound value: {formState?.value}</p>
    </>
  );
};

export const Above = () => {
  const { formProp, formState } = Form.use({ value: '' });

  return (
    <>
      <AutoCompleteInput bind={formProp('value').bind()} options={options} position="above" />
      <p className="bound-value">bound value: {formState?.value}</p>
    </>
  );
};
