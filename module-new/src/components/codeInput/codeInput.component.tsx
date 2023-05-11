import * as React from 'react';

import { IBindingProps, useBindingState, useForm } from '../../hooks/form';
import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongVFCProps, NullOrUndefined } from '../../types';
import { concat, findLastIndex } from '../../utils';
import { useArmstrongConfig } from '../config';
import { Input, InputDisplaySize } from '../input';
import { IInputWrapperProps } from '../inputWrapper';
import { Label } from '../label';
import { StatusWrapper } from '../statusWrapper';
import { ValidationErrors } from '../validationErrors';
import { CodeInputPartDefinition, getLengthFromPart } from './codeInput.utils';

import './codeInput.theme.css';

export interface ICodeInputPartProps<TBind extends NullOrUndefined<string>> {
  /** The given length of this part. If this is a string, the string will be rendered. */
  part: CodeInputPartDefinition<TBind>;

  /** The binding for the input. */
  bind?: IBindingProps<string>;

  /** Called when the text input changes */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /** Called when the user presses a key inside the input */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;

  /** which size variant to use */
  displaySize?: InputDisplaySize;

  onPaste: (event: React.ClipboardEvent<HTMLInputElement>) => void;
}

/** an individual input from the CodeInput */
const CodeInputPart = React.forwardRef(
  <TBind extends NullOrUndefined<string>>(
    { part, onChange, onKeyDown, bind, displaySize, onPaste }: ICodeInputPartProps<TBind>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const length = React.useMemo(() => getLengthFromPart(part), [part]);

    if (typeof part === 'string') {
      return <p className="arm-code-input-part-text">{part}</p>;
    }

    if (typeof part === 'number') {
      return (
        <Input
          bind={bind}
          ref={ref}
          className="arm-code-input-part-input"
          onChange={onChange}
          onKeyDown={onKeyDown}
          style={{ '--arm-code-input-length': length } as React.CSSProperties}
          data-length={length}
          onClick={event => event.currentTarget.select()}
          maxLength={part}
          displaySize={displaySize}
          onPaste={onPaste}
        />
      );
    }

    const { className, ...textInputProps } = part;

    return (
      <Input
        ref={ref}
        bind={bind}
        className={concat('arm-code-input-part-input', className)}
        onChange={onChange}
        onKeyDown={onKeyDown}
        style={
          {
            ...(textInputProps.style || {}),
            '--arm-code-input-length': length,
          } as React.CSSProperties
        }
        data-length={length}
        onClick={event => event.currentTarget.select()}
        {...textInputProps}
        maxLength={part.length}
        displaySize={part.displaySize}
      />
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TBind extends NullOrUndefined<string>>(
  props: ArmstrongVFCProps<ICodeInputPartProps<TBind>, HTMLInputElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ICodeInputPartProps<NullOrUndefined<string>>>;

CodeInputPart.displayName = 'CodeInputPart';

/** A text input where the value is split between multiple inputs, where focus is automatically moved between them as the user edits */
export interface ICodeInputProps<TBind extends NullOrUndefined<string>>
  extends Pick<
    IInputWrapperProps,
    | 'scrollValidationErrorsIntoView'
    | 'validationMode'
    | 'errorIcon'
    | 'disabled'
    | 'pending'
    | 'error'
    | 'statusPosition'
    | 'validationErrorMessages'
    | 'leftOverlay'
    | 'rightOverlay'
  > {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TBind>;

  /** Fired when the code input changes */
  onChange?: (newValue: TBind) => void;

  /**
   * the parts of the code input
   * Can be a number representing the length of an input, e.g. [1,1,1]
   * Can be a string representing a piece of text in-between inputs, e.g. [1,1,'-',1,1]
   * Can be an object representing an input with some properties
   */
  parts: CodeInputPartDefinition<TBind>[];

  className?: string;

  /** which size variant to use */
  displaySize?: InputDisplaySize;

  /** Some optional label content */
  label?: React.ReactNode;

  /** Should the label show a required indicator? */
  required?: boolean;

  /** Symbol to use as the required indicator on the label, defaults to "*" */
  requiredIndicator?: React.ReactNode;
}

export const CodeInput = React.forwardRef(
  <TBind extends NullOrUndefined<string>>(
    {
      className,
      parts,
      bind,
      onChange,
      validationMode,
      validationErrorMessages,
      errorIcon,
      error,
      pending,
      statusPosition,
      leftOverlay,
      rightOverlay,
      scrollValidationErrorsIntoView,
      displaySize,
      label,
      required,
      requiredIndicator,
    }: ICodeInputProps<TBind>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const globals = useArmstrongConfig({
      inputDisplaySize: displaySize,
      requiredIndicator,
    });

    const inputRefs = React.useRef<(HTMLInputElement | null | undefined)[]>([]);

    const [boundValue, setBoundValue, bindConfig] = useBindingState(bind, {
      onChange,
      validationErrorMessages,
      validationMode,
      validationErrorIcon: errorIcon,
    });

    const goNextPart = React.useCallback(
      (partIndex: number) => {
        const nextIndex = parts.slice(partIndex + 1).findIndex(part => typeof part !== 'string') + partIndex + 1;

        if (nextIndex !== -1) {
          inputRefs.current[nextIndex]?.focus();
        }
      },
      [parts]
    );

    /** @todo - why is focussing selecting before the final character? */
    const goPreviousPart = React.useCallback(
      (partIndex: number) => {
        const previousIndex = findLastIndex(parts.slice(0, partIndex), part => typeof part !== 'string');

        if (previousIndex !== -1) {
          inputRefs.current[previousIndex]?.focus();
        }
      },
      [parts]
    );

    const getValueForPart = React.useCallback(
      (partIndex: number, value: NullOrUndefined<string>) => {
        const sliceStart = parts
          .slice(0, partIndex)
          .reduce<number>((output, part) => output + getLengthFromPart(part), 0);
        const sliceEnd = sliceStart + getLengthFromPart(parts[partIndex]);

        return value?.slice(sliceStart, sliceEnd) || '';
      },
      [parts]
    );

    const onPartValueChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>, partIndex: number) => {
        const currentPartLength = getLengthFromPart(parts[partIndex]);

        const currentPartValue = event.currentTarget.value || '';

        if (currentPartValue.length >= currentPartLength) {
          goNextPart(partIndex);
        }
      },
      [parts, goNextPart]
    );

    const onPaste = React.useCallback(
      (event: React.ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();

        const pasteValue = event.clipboardData.getData('text/plain');
        const target = event.target as HTMLInputElement;
        const partIndex = inputRefs.current.indexOf(target);
        const selectionIndex = target.selectionEnd;
        const insertIndex =
          new Array(partIndex).fill(null).reduce((memo, _, i) => {
            const part = parts[i];
            return memo + getLengthFromPart(part);
          }, 0) + selectionIndex;

        const startValue = boundValue?.slice(0, insertIndex) ?? '';
        const endValue = boundValue?.slice(insertIndex) ?? '';

        const newValue = startValue + pasteValue + endValue;

        console.log(boundValue, insertIndex, startValue, endValue, newValue);

        setBoundValue(newValue as TBind);
      },
      [setBoundValue, boundValue, parts]
    );

    const boundValueArray = React.useMemo(() => {
      return parts.map((_, partIndex) => getValueForPart(partIndex, boundValue));
    }, [getValueForPart, parts, boundValue]);

    const onKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>, partIndex: number, part: number) => {
        switch (event.key) {
          case 'Backspace': {
            if (event.currentTarget.value?.length <= 0 && partIndex > 0) {
              goPreviousPart(partIndex);
            }
            break;
          }
          case 'ArrowLeft': {
            if (event.currentTarget.selectionStart === 0 && partIndex > 0) {
              goPreviousPart(partIndex);
            }
            break;
          }
          case 'ArrowRight': {
            if (event.currentTarget.selectionEnd === getLengthFromPart(part) && partIndex < parts.length) {
              goNextPart(partIndex);
            }
            break;
          }
          default: {
            break;
          }
        }
      },
      [goPreviousPart, goNextPart, parts]
    );

    interface IFormState {
      parts: string[];
    }

    const { formProp, formState } = useForm<IFormState>({ parts: boundValueArray });

    React.useEffect(() => {
      setBoundValue?.(formState?.parts?.join('') as TBind);
      // eslint-disable-next-line react-hooks/exhaustive-deps -- we don't want the trigger the effect when the function is re-defined
    }, [formState]);

    return (
      <>
        <div ref={ref} title="Code input">
          {label && (
            <Label className="arm-code-input-label" required={required} requiredIndicator={globals.requiredIndicator}>
              {label}
            </Label>
          )}
          <form className={concat('arm-code-input', className)}>
            <StatusWrapper
              error={error || !!bindConfig.validationErrorMessages.length}
              errorIcon={bindConfig.validationErrorIcon}
              statusPosition={statusPosition}
              pending={pending}
              validationMode={bindConfig.validationMode}
            >
              <>
                {leftOverlay}
                {parts?.map((part, index) => (
                  <CodeInputPart
                    data-position={index}
                    bind={formProp('parts', index).bind()}
                    part={part}
                    key={index}
                    onChange={event => onPartValueChange(event, index)}
                    onKeyDown={event => onKeyDown(event, index, +part)}
                    onPaste={onPaste}
                    ref={r => {
                      inputRefs.current[index] = r;
                    }}
                    displaySize={displaySize}
                  />
                ))}
                {rightOverlay}
              </>
            </StatusWrapper>
          </form>
        </div>

        {!!bindConfig.validationErrorMessages?.length && bindConfig.shouldShowValidationErrorMessage && (
          <ValidationErrors
            validationErrors={bindConfig.validationErrorMessages}
            scrollIntoView={scrollValidationErrorsIntoView}
          />
        )}
      </>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TBind extends NullOrUndefined<string>>(
  props: ArmstrongVFCProps<ICodeInputProps<TBind>, HTMLInputElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ICodeInputProps<NullOrUndefined<string>>>;

CodeInput.displayName = 'Code Input';
