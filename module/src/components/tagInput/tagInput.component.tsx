import * as React from 'react';

import { ClassNames, Form } from '../..';
import { FormValidationMode, IBindingProps } from '../../hooks/form';
import { IconUtils } from '../icon';
import { IconButton } from '../iconButton';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper';
import { Tag } from '../tag/tag.component';

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
  onTextInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

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

    const [
      boundValue,
      setBoundValue,
      { myValidationErrorMessages, validationMode: boundValidationMode, validationErrorIcon: boundValidationErrorIcon },
    ] = Form.useBindingTools(bind, {
      value,
      onChange,
      validationErrorMessages,
      validationErrorIcon,
      validationMode,
    });

    const [inputValue, setInputValue] = React.useState('');

    const addTag = React.useCallback(
      (newTag: string) => {
        if (newTag && (allowDuplicates || (!boundValue?.includes(newTag) && (!getCanAddTag || getCanAddTag(newTag))))) {
          setBoundValue([...(boundValue || []), newTag.trim()]);
        }
        setInputValue('');
      },
      [boundValue, allowDuplicates, setBoundValue]
    );

    const removeTag = React.useCallback(
      (newTag: string) => {
        setBoundValue((boundValue || []).filter((tag) => tag !== newTag));
        setInputValue('');
      },
      [boundValue, setBoundValue]
    );

    const clearTags = React.useCallback(() => {
      setBoundValue([]);
    }, [setBoundValue]);

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
            if (inputValue === '' && boundValue && tagPosition === 'inside') {
              removeTag(boundValue[boundValue.length - 1]);
            }
            break;
          }
          default: {
            break;
          }
        }
      },
      [inputValue, addTag, spaceCreatesTags, tagPosition, boundValue]
    );

    return (
      <InputWrapper
        className={ClassNames.concat('arm-tag-input', className)}
        validationErrorMessages={myValidationErrorMessages}
        validationErrorIcon={boundValidationErrorIcon}
        validationMode={boundValidationMode}
        data-tag-position={tagPosition}
        data-has-tags={!!boundValue?.length}
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
              {boundValue?.map((tag, index) => (
                <Tag content={tag} key={allowDuplicates ? tag + index : tag} onRemove={deleteButton ? () => removeTag(tag) : undefined} />
              ))}
            </>
          ) : undefined
        }
        below={
          tagPosition === 'below' ? (
            <>
              {boundValue?.map((tag, index) => (
                <Tag content={tag} key={allowDuplicates ? tag + index : tag} onRemove={deleteButton ? () => removeTag(tag) : undefined} />
              ))}
            </>
          ) : undefined
        }
      >
        <div className="arm-tag-input-inner">
          {tagPosition === 'inside' &&
            boundValue?.map((tag, index) => (
              <Tag content={tag} key={allowDuplicates ? tag + index : tag} onRemove={deleteButton ? () => removeTag(tag) : undefined} />
            ))}
          <input
            {...nativeProps}
            ref={internalRef}
            value={inputValue}
            placeholder={!boundValue?.length || tagPosition !== 'inside' ? placeholder : undefined}
            onChange={(event) => {
              setInputValue(event.currentTarget.value);
              onTextInputChange?.(event);
            }}
            onKeyDown={onKeyDown}
          />
        </div>

        {deleteAllButton && !!boundValue?.length && (
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
