import * as React from 'react';

import { ClassNames } from '../..';
import { FormValidationMode, IBindingProps } from '../../hooks/form';
import { IconUtils } from '../icon';
import { IconButton } from '../iconButton';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper';
import { Tag } from '../tag/tag.component';
import { useMyValidationErrorMessages } from '../validationErrors';

export interface ITagInputProps
  extends Omit<IInputWrapperProps, 'above' | 'below' | 'onClick'>,
    Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange' | 'value'> {
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

  /** (boolean) should show button to clear all tags */
  deleteAllButton?: boolean;
}

export const TagInput = React.forwardRef<HTMLInputElement, ITagInputProps>(
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
      deleteAllButton,
      pending,
      disabled,
      leftIcon,
      rightOverlay,
      error,
      hideIconOnStatus,
      leftOverlay,
      onTextInputChange,
      rightIcon,
      statusPosition,
      placeholder,
      disableOnPending,
      ...nativeProps
    },
    ref
  ) => {
    const internalRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

    const [inputValue, setInputValue] = React.useState('');

    const allValidationErrorMessages = useMyValidationErrorMessages(bind, validationErrorMessages);

    const setValue = React.useCallback(
      (newValue: string[]) => {
        onChange?.(newValue);
        bind?.setValue?.(bind?.bindConfig?.format?.toData?.(newValue) || newValue);
      },
      [onChange, bind?.setValue, bind?.bindConfig?.format?.toData]
    );

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
      [parsedTags, allowDuplicates, setValue]
    );

    const removeTag = React.useCallback(
      (newTag: string) => {
        setValue((parsedTags || []).filter((tag) => tag !== newTag));
        setInputValue('');
      },
      [parsedTags, setValue]
    );

    const clearTags = React.useCallback(() => {
      setValue([]);
    }, [setValue]);

    const onKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
          case 'Enter': {
            addTag(inputValue);
            event.preventDefault();
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
      <InputWrapper
        className={ClassNames.concat('arm-tag-input', className)}
        validationErrorMessages={allValidationErrorMessages}
        validationErrorIcon={validationErrorIcon || bind?.formConfig?.validationErrorIcon}
        validationMode={validationMode || bind?.formConfig?.validationMode}
        data-tag-position={tagPosition}
        data-has-tags={!!parsedTags.length}
        pending={pending}
        disabled={disabled}
        leftIcon={leftIcon}
        rightOverlay={rightOverlay}
        error={error}
        hideIconOnStatus={hideIconOnStatus}
        leftOverlay={leftOverlay}
        rightIcon={rightIcon}
        disableOnPending={disableOnPending}
        statusPosition={statusPosition}
        onClick={() => internalRef.current?.focus()}
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
        <div className="arm-tag-input-inner">
          {tagPosition === 'inside' &&
            parsedTags?.map((tag, index) => (
              <Tag content={tag} key={allowDuplicates ? tag + index : tag} onRemove={deleteButton ? () => removeTag(tag) : undefined} />
            ))}
          <input
            {...nativeProps}
            ref={internalRef}
            value={inputValue}
            placeholder={!parsedTags?.length || tagPosition !== 'inside' ? placeholder : undefined}
            onChange={(event) => {
              setInputValue(event.currentTarget.value);
              onTextInputChange?.(event);
            }}
            onKeyDown={onKeyDown}
          />
        </div>

        {deleteAllButton && !!parsedTags?.length && (
          <IconButton iconOnly onClick={clearTags} icon={IconUtils.getIconDefinition('Icomoon', 'cross2')} />
        )}
      </InputWrapper>
    );
  }
);

TagInput.defaultProps = {
  tagPosition: 'inside',
  deleteButton: true,
  deleteAllButton: true,
};
