import * as React from 'react';

import { Form, IconSet, IInputWrapperProps, ValidationErrors } from '../..';
import { IBindingProps } from '../../hooks/form';
import { Arrays } from '../../utils/arrays';
import { ClassNames } from '../../utils/classNames';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';
import { IInputProps } from '../input';
import { StatusWrapper } from '../statusWrapper/statusWrapper.component';
import { TextInput } from '../textInput';
import { CodeInputUtils } from '.';

export interface ICodeInputInput
  extends Omit<
    IInputProps<string>,
    'onChange' | 'value' | 'delay' | 'onValueChange' | 'validationErrorMessages' | 'validationMode' | 'ref' | 'maxLength' | 'onKeyDown' | 'bind'
  > {
  length: number;
}
/**
 * Can be a number representing the length of an input, I.E [1,1,1]
 * Can be a string representing a piece of text inbetween inputs I.E. [1,1,'-',1,1]
 * Can be an object representing an input with some properties
 */
export type CodeInputPartDefinition = ICodeInputInput | string | number;

export interface ICodeInputPartProps {
  part: CodeInputPartDefinition;

  /** (string) the current value of this part */
  value: string;

  /** ((event) => void) called when the text input changes */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /** ((event) => void) called when the user presses a key inside the input */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

/** an individual input from the CodeInput */

export const CodeInputPart = React.forwardRef<HTMLInputElement, ICodeInputPartProps>(({ part, onChange, onKeyDown, value }, ref) => {
  const length = React.useMemo(() => CodeInputUtils.getLengthFromPart(part), [part]);

  if (typeof part === 'string') {
    return <p className="arm-code-input-part-text">{part}</p>;
  }

  if (typeof part === 'number') {
    return (
      <TextInput
        ref={ref}
        className="arm-code-input-part-input"
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
        style={{ '--arm-code-input-length': length } as React.CSSProperties}
        data-length={length}
        onClick={(event) => event.currentTarget.select()}
      />
    );
  }

  const { className, ...textInputProps } = part;

  return (
    <TextInput
      ref={ref}
      className={ClassNames.concat('arm-code-input-part-input', className)}
      onChange={onChange}
      value={value}
      onKeyDown={onKeyDown}
      style={{ ...(textInputProps.style || {}), '--arm-code-input-length': length } as React.CSSProperties}
      data-length={length}
      {...textInputProps}
    />
  );
});

/** A text input where the value is split between multiple inputs, where focus is automatically moved between them as the user edits */
export interface ICodeInputProps
  extends IIconWrapperProps<IconSet, IconSet>,
    Pick<
      IInputWrapperProps,
      | 'scrollValidationErrorsIntoView'
      | 'validationMode'
      | 'errorIcon'
      | 'disabled'
      | 'pending'
      | 'error'
      | 'statusPosition'
      | 'validationErrorMessages'
    > {
  /** (IBindingProps) prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<string>;

  /** (string) the current value of the CheckboxInput */
  value?: string;

  /** ((newValue: string) => void) */
  onChange?: (newValue: string) => void;

  /**
   * (CodeInputPart[]) the parts of the code input
   * Can be a number representing the length of an input, I.E [1,1,1]
   * Can be a string representing a piece of text inbetween inputs I.E. [1,1,'-',1,1]
   * Can be an object representing an input with some properties
   */
  parts: CodeInputPartDefinition[];

  className?: string;
}

export const CodeInput = React.forwardRef<HTMLDivElement, ICodeInputProps>(
  (
    {
      className,
      parts,
      bind,
      value,
      onChange,
      validationMode,
      validationErrorMessages,
      errorIcon,
      error,
      pending,
      statusPosition,
      leftIcon,
      rightIcon,
      scrollValidationErrorsIntoView,
    },
    ref
  ) => {
    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

    const [boundValue, setBoundValue, bindConfig] = Form.useBindingTools(bind, {
      value,
      onChange,
      validationErrorMessages,
      validationMode,
      validationErrorIcon: errorIcon,
    });

    const totalLength = React.useMemo(() => parts.reduce<number>((total, part) => total + CodeInputUtils.getLengthFromPart(part), 0), [parts]);

    const getValueForPart = React.useCallback(
      (partIndex: number) => {
        const sliceStart = parts.slice(0, partIndex).reduce<number>((output, part) => output + CodeInputUtils.getLengthFromPart(part), 0);
        const sliceEnd = sliceStart + CodeInputUtils.getLengthFromPart(parts[partIndex]);

        return boundValue?.slice(sliceStart, sliceEnd) || '';
      },
      [boundValue, parts]
    );

    const goNext = React.useCallback(
      (partIndex: number) => {
        const nextIndex = parts.slice(partIndex + 1).findIndex((part) => typeof part !== 'string') + partIndex + 1;

        if (nextIndex !== -1) {
          inputRefs.current[nextIndex]?.focus();
        }
      },
      [parts]
    );
    const goPrevious = React.useCallback(
      (partIndex: number) => {
        const previousIndex = Arrays.findLastIndex(parts.slice(0, partIndex), (part) => typeof part !== 'string');
        if (previousIndex !== -1) {
          inputRefs.current[previousIndex]?.focus();
        }
      },
      [parts]
    );

    const onPartChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>, partIndex: number) => {
        const currentPartLength = CodeInputUtils.getLengthFromPart(parts[partIndex]);

        const newPartValue = event.currentTarget.value || '';

        const sliceStart = parts.slice(0, partIndex).reduce<number>((output, part) => output + CodeInputUtils.getLengthFromPart(part), 0);
        const sliceEnd = sliceStart + currentPartLength;

        if (newPartValue.length >= currentPartLength) {
          goNext(partIndex);
        }

        const newValue = (boundValue ? boundValue.slice(0, sliceStart) + newPartValue + boundValue.slice(sliceEnd) : newPartValue).slice(
          0,
          totalLength
        );

        setBoundValue(newValue);
      },
      [boundValue, parts, goNext, totalLength]
    );

    const onKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>, partIndex: number) => {
        switch (event.key) {
          case 'Backspace': {
            if (event.currentTarget.value?.length <= 0 && partIndex > 0) {
              goPrevious(partIndex);
            }
            break;
          }
          case 'Left': {
            if (event.currentTarget.selectionStart === 0 && partIndex > 0) {
              goPrevious(partIndex);
            }
            break;
          }
          case 'Right': {
            if (event.currentTarget.selectionEnd === 0 && partIndex < parts.length) {
              goNext(partIndex);
            }
            break;
          }
          default: {
            break;
          }
        }
      },
      [goPrevious, parts]
    );

    return (
      <>
        <div className={ClassNames.concat('arm-code-input', className)} ref={ref}>
          <StatusWrapper
            error={error}
            validationErrorMessages={bindConfig.validationErrorMessages}
            errorIcon={bindConfig.validationErrorIcon}
            statusPosition={statusPosition}
            pending={pending}
            validationMode={bindConfig.validationMode}
          >
            <IconWrapper leftIcon={leftIcon} rightIcon={rightIcon}>
              {parts.map((part, index) => (
                <CodeInputPart
                  part={part}
                  key={index}
                  value={getValueForPart(index) || ''}
                  onChange={(event) => onPartChange(event, index)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  ref={(r) => {
                    inputRefs.current[index] = r;
                  }}
                />
              ))}
            </IconWrapper>
          </StatusWrapper>
        </div>

        {!!bindConfig.validationErrorMessages?.length && bindConfig.shouldShowValidationErrorMessage && (
          <ValidationErrors
            validationErrors={bindConfig.validationErrorMessages}
            icon={bindConfig.validationErrorIcon}
            scrollIntoView={scrollValidationErrorsIntoView}
          />
        )}
      </>
    );
  }
);
