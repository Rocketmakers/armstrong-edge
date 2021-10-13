import * as React from 'react';

import { ClassNames, Form } from '../..';
import { FormValidationMode, IBindingProps } from '../../hooks/form';
import { useOverridableState } from '../../hooks/useOverridableState';
import { ArmstrongId } from '../../types/core';
import { IArmstrongExtendedOption } from '../../types/options';
import { IconUtils } from '../icon';
import { IconButton } from '../iconButton';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper';
import { Tag } from '../tag/tag.component';

export interface ITag
  extends Pick<
    IArmstrongExtendedOption<ArmstrongId, React.BaseHTMLAttributes<HTMLDivElement>>,
    'id' | 'name' | 'htmlProps' | 'leftIcon' | 'rightIcon'
  > {}

export interface ITagInputProps
  extends Omit<IInputWrapperProps, 'above' | 'below' | 'onClick'>,
    Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange' | 'value'> {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<string[]>;

  /** array of validation errors to render */
  validationErrorMessages?: string[];

  /** how to render the validation errors */
  validationMode?: FormValidationMode;

  /** array of tags */
  value?: string[];

  /** overrides value to render a custom array of tags - should still be used in conjunction with a bound value */
  tags?: ITag[];

  /** event fired when the array of tags changes */
  onChange?: (newValue: string[]) => void;

  /** fired when the internal text input changes */
  onTextInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /** fired when the internal text input changes */
  onTextInputValueChange?: (event: string) => void;

  /** the value used in the text input - must be used in conjunction with onTextInputChange to allow the binding of that input to be handled externally */
  textInputValue?: string;

  /** don't add duplicates to the list of tags */
  allowDuplicates?: boolean;

  /** If false, will not add tag  */
  getCanAddTag?: (newTag: string) => boolean;

  /** if true, hitting space will create a new tag rather than just adding a space */
  spaceCreatesTags?: boolean;

  /** where to render the tags - defaults to inside */
  tagPosition?: 'inside' | 'above' | 'below';

  /** should allow deletion of tags with a cross */
  deleteButton?: boolean;

  /** should show button to clear all tags */
  deleteAllButton?: boolean;

  /** Fired when a tag is added */
  onAddTag?: (value: string) => void;

  /** Fired when a tag is removed */
  onRemoveTag?: (id: ArmstrongId) => void;

  /** Fired when all tags are removed */
  onRemoveAllTags?: () => void;
}

export const TagInput = React.forwardRef<HTMLInputElement, ITagInputProps>(
  (
    {
      className,
      bind,
      validationMode,
      errorIcon: validationErrorIcon,
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
      onRemoveAllTags,
      rightOverlay,
      error,
      hideIconOnStatus,
      leftOverlay,
      onTextInputChange,
      onTextInputValueChange,
      textInputValue,
      tags,
      rightIcon,
      statusPosition,
      onAddTag,
      onRemoveTag,
      scrollValidationErrorsIntoView,
      placeholder,
      disableOnPending,
      ...nativeProps
    },
    ref
  ) => {
    const internalRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

    const [boundValue, setBoundValue, bindConfig] = Form.useBindingTools(bind, {
      value,
      onChange,
      validationErrorMessages,
      validationErrorIcon,
      validationMode,
    });

    // internal state for the text input, overriden by props
    const [textInputInternalValue, setTextInputInternalValue] = useOverridableState('', textInputValue, onTextInputValueChange);

    const currentTags = React.useMemo(() => {
      if (tags) {
        return tags;
      }
      if (boundValue) {
        return boundValue.map<ITag>((val) => ({ name: val, id: val }));
      }
      return [];
    }, [tags, boundValue]);

    const addTag = React.useCallback(
      (newTag: string) => {
        if (newTag && (allowDuplicates || (!boundValue?.includes(newTag) && (!getCanAddTag || getCanAddTag(newTag))))) {
          setBoundValue?.([...(boundValue || []), newTag.trim()]);
        }
        setTextInputInternalValue('');
        onAddTag?.(newTag);
      },
      [boundValue, allowDuplicates, setBoundValue, onAddTag]
    );

    const removeTag = React.useCallback(
      (tagToRemove: ArmstrongId) => {
        setBoundValue?.((boundValue || []).filter((tag) => tag !== tagToRemove));
        setTextInputInternalValue('');
        onRemoveTag?.(tagToRemove);
      },
      [boundValue, setBoundValue, onRemoveTag]
    );

    const clearTags = React.useCallback(() => {
      setBoundValue?.([]);
      setTextInputInternalValue('');
      onRemoveAllTags?.();
    }, [setBoundValue, onRemoveAllTags]);

    const onKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
          case 'Enter': {
            addTag(textInputInternalValue);
            event.preventDefault();
            break;
          }
          case ' ': {
            if (spaceCreatesTags) {
              addTag(textInputInternalValue);
              event.preventDefault();
            }
            break;
          }
          case 'Backspace': {
            if (textInputInternalValue === '' && currentTags?.length >= 1 && tagPosition === 'inside') {
              removeTag(currentTags[currentTags.length - 1].id);
            }
            break;
          }
          default: {
            break;
          }
        }
      },
      [textInputInternalValue, addTag, spaceCreatesTags, tagPosition, boundValue, removeTag]
    );

    const tagsJsx = (
      <>
        {currentTags?.map((tag, index) => (
          <Tag
            {...tag.htmlProps}
            content={tag.name}
            leftIcon={tag.leftIcon}
            rightIcon={tag.rightIcon}
            key={allowDuplicates ? `${tag.id}${index}` : tag.id}
            onRemove={deleteButton ? () => removeTag(tag.id) : undefined}
          />
        ))}
      </>
    );

    return (
      <InputWrapper
        className={ClassNames.concat('arm-tag-input', className)}
        validationErrorMessages={bindConfig.validationErrorMessages}
        errorIcon={bindConfig.validationErrorIcon}
        validationMode={bindConfig.validationMode}
        data-tag-position={tagPosition}
        data-has-tags={!!currentTags?.length}
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
        above={tagPosition === 'above' ? tagsJsx : undefined}
        below={tagPosition === 'below' ? tagsJsx : undefined}
        scrollValidationErrorsIntoView={scrollValidationErrorsIntoView}
      >
        <div className="arm-tag-input-inner">
          {tagPosition === 'inside' && tagsJsx}
          <input
            className="arm-tag-input-input"
            {...nativeProps}
            ref={internalRef}
            value={textInputInternalValue}
            placeholder={!boundValue?.length || tagPosition !== 'inside' ? placeholder : undefined}
            onChange={(event) => {
              setTextInputInternalValue(event.currentTarget.value);
              onTextInputChange?.(event);
            }}
            onKeyDown={onKeyDown}
          />
        </div>

        {deleteAllButton && !!boundValue?.length && (
          <IconButton minimalStyle onClick={clearTags} icon={IconUtils.getIconDefinition('Icomoon', 'cross2')} />
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
