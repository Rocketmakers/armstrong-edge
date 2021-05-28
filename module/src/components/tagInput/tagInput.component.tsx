import * as React from 'react';

import { ClassNames } from '../..';
import { FormValidationMode, IBindingProps } from '../../hooks/form';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper';
import { Tag } from '../tag/tag.component';
import { useMyValidationErrorMessages, ValidationErrors } from '../validationErrors';

export interface ITagInputProps extends Omit<IInputWrapperProps, 'above' | 'below'> {
  /** (IBindingProps) prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<string[]>;

  /** (string[]) array of validation errors to render */
  validationErrorMessages?: string[];

  /** (icon|message|both) how to render the validation errors */
  validationMode?: FormValidationMode;

  /** (string[]) array of tags */
  value?: string[];

  /** ((newValue: string[]) => void) event fired when the array of tags changes */
  onChange?: (newValue: string[]) => void;

  /** (event => void) fired when the internal text input changes */
  onTextInputChange?: (event: React.ChangeEvent) => void;

  /** (boolean) don't add duplicates to the list of tags */
  allowDuplicates?: boolean;

  /** ((value: string) => boolean) if false, will not add tag  */
  getCanAddTag?: (newTag: string) => boolean;

  /** (boolean) if true, hitting space will create a new tag rather than just adding a space */
  spaceCreatesTags?: boolean;

  /** (inside|above|below) where to render the tags - defaults to inside */
  tagPosition?: 'inside' | 'above' | 'below';

  /** (boolean) should allow deletion of tags with a cross */
  deleteButton?: boolean;
}

export const TagInput: React.FC<ITagInputProps> = React.forwardRef<HTMLInputElement, ITagInputProps>(
  (
    {
      className,
      bind,
      validationMode,
      validationErrorIcon,
      validationErrorMessages,
      value,
      onChange,
      allowDuplicates,
      spaceCreatesTags,
      getCanAddTag,
      tagPosition,
      deleteButton,
      ...inputWrapperProps
    },
    ref
  ) => {
    const [inputValue, setInputValue] = React.useState('');

    const allValidationErrorMessages = useMyValidationErrorMessages(bind, validationErrorMessages);

    const computedValidationMode = validationMode || bind?.formConfig?.validationMode;
    const shouldShowValidationErrorsList = computedValidationMode === 'both' || computedValidationMode === 'message';

    const setValue = (newValue: string[]) => {
      onChange?.(newValue);
      bind?.setValue?.(bind?.bindConfig?.format?.toData?.(newValue) || newValue);
    };

    const parsedTags = React.useMemo(
      () => value ?? bind?.bindConfig?.format?.fromData?.(bind?.value) ?? bind?.value ?? [],
      [value, bind?.value, bind?.bindConfig?.format?.fromData]
    );

    const addTag = React.useCallback(
      (newTag: string) => {
        if (newTag && (allowDuplicates || (!parsedTags.includes(newTag) && (!getCanAddTag || getCanAddTag(newTag))))) {
          setValue([...parsedTags, newTag.trim()]);
        }
        setInputValue('');
      },
      [parsedTags, allowDuplicates]
    );

    const removeTag = React.useCallback(
      (newTag: string) => {
        setValue((parsedTags || []).filter((tag) => tag !== newTag));
        setInputValue('');
      },
      [parsedTags]
    );

    const onKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
          case 'Enter': {
            addTag(inputValue);
            break;
          }
          case ' ': {
            if (spaceCreatesTags) {
              addTag(inputValue);
              event.preventDefault();
            }
            break;
          }
          case 'Backspace': {
            if (inputValue === '' && parsedTags && tagPosition === 'inside') {
              removeTag(parsedTags[parsedTags.length - 1]);
            }
            break;
          }
          default: {
            break;
          }
        }
      },
      [inputValue, addTag, spaceCreatesTags, tagPosition, parsedTags]
    );

    return (
      <>
        <InputWrapper
          {...inputWrapperProps}
          className={ClassNames.concat('arm-tag-input', className)}
          validationErrorMessages={allValidationErrorMessages}
          validationErrorIcon={validationErrorIcon || bind?.formConfig?.validationErrorIcon}
          validationMode={validationMode || bind?.formConfig?.validationMode}
          data-tag-position={tagPosition}
          data-has-tags={!!parsedTags.length}
          above={
            tagPosition === 'above' ? (
              <>
                {parsedTags?.map((tag, index) => (
                  <Tag content={tag} key={allowDuplicates ? tag + index : tag} onRemove={deleteButton ? () => removeTag(tag) : undefined} />
                ))}
              </>
            ) : undefined
          }
          below={
            tagPosition === 'below' ? (
              <>
                {parsedTags?.map((tag, index) => (
                  <Tag content={tag} key={allowDuplicates ? tag + index : tag} onRemove={deleteButton ? () => removeTag(tag) : undefined} />
                ))}
              </>
            ) : undefined
          }
        >
          {tagPosition === 'inside' &&
            parsedTags?.map((tag, index) => (
              <Tag content={tag} key={allowDuplicates ? tag + index : tag} onRemove={deleteButton ? () => removeTag(tag) : undefined} />
            ))}
          <input ref={ref} value={inputValue} onChange={(event) => setInputValue(event.currentTarget.value)} onKeyDown={onKeyDown} />
        </InputWrapper>

        {!!allValidationErrorMessages?.length && shouldShowValidationErrorsList && (
          <ValidationErrors validationErrors={allValidationErrorMessages} icon={validationErrorIcon} />
        )}
      </>
    );
  }
);

TagInput.defaultProps = {
  tagPosition: 'inside',
  deleteButton: true,
};
