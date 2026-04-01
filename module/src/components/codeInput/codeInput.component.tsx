import * as React from 'react';

import { IBindingProps, useBindingState, useForm } from '../../form';
import { useDidUpdateEffect } from '../../hooks/useDidUpdateEffect';
import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongVFCProps, DisplaySize, NullOrUndefined } from '../../types';
import { concat, findLastIndex } from '../../utils';
import { useArmstrongConfig } from '../config';
import { Input, ITextInputProps } from '../input';
import { IInputWrapperProps } from '../inputWrapper';
import { Label } from '../label';
import { StatusWrapper } from '../statusWrapper';
import { ValidationErrors } from '../validationErrors';
import { CodeInputPartDefinition } from './codeInput.types';
import { getLengthFromPart } from './codeInput.utils';

import './codeInput.theme.css';

export interface ICodeInputPartProps<TBind extends NullOrUndefined<string>>
  extends Omit<ITextInputProps<TBind>, 'part'> {
  /** The given length of this part. If this is a string, the string will be rendered. */
  part: CodeInputPartDefinition<TBind>;
}

/** an individual input from the CodeInput */
const CodeInputPart = (({
  ref,
  bind,
  part,
  ...inputProps
}: ICodeInputPartProps<NullOrUndefined<string>> & { ref?: React.Ref<HTMLInputElement> }) => {
  const length = getLengthFromPart(part);

  if (typeof part === 'string') {
    return <p className="arm-code-input-part-text">{part}</p>;
  }

  if (typeof part === 'number') {
    return (
      <Input
        ref={ref}
        bind={bind as IBindingProps<string | null>}
        {...inputProps}
        className="arm-code-input-part-input"
        style={{ '--arm-code-input-length': length } as React.CSSProperties}
        data-length={length}
        onClick={event => event.currentTarget.select()}
        maxLength={part}
      />
    );
  }

  const { className, ...textInputProps } = part;

  return (
    <Input
      ref={ref}
      bind={bind as IBindingProps<string | null>}
      className={concat('arm-code-input-part-input', className)}
      style={
        {
          ...(textInputProps.style || {}),
          '--arm-code-input-length': length,
        } as React.CSSProperties
      }
      data-length={length}
      onClick={event => event.currentTarget.select()}
      {...inputProps}
      {...textInputProps}
      maxLength={part.length}
      displaySize={part.displaySize}
    />
  );
}) as (<TBind extends NullOrUndefined<string>>(
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
      | 'hideIconOnStatus'
      | 'validationErrorMessages'
      | 'leftOverlay'
      | 'rightOverlay'
      | 'statusClassName'
      | 'validationErrorsClassName'
      | 'labelClassName'
      | 'labelId'
      | 'disableOnPending'
    >,
    Omit<React.RefAttributes<HTMLDivElement>, 'ref'> {
  /** Prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TBind>;

  /** The current value of the input */
  value?: TBind;

  /** Fired when the code input changes */
  onChange?: (newValue: TBind) => void;

  /**
   * The parts of the code input
   * Can be a number representing the length of an input, e.g. [1,1,1]
   * Can be a string representing a piece of text in-between inputs, e.g. [1,1,'-',1,1]
   * Can be an object representing an input with some properties
   */
  parts: CodeInputPartDefinition<TBind>[];

  /** Optional className for the code input */
  className?: string;

  /** which size variant to use */
  displaySize?: DisplaySize;

  /** Some optional label content */
  label?: React.ReactNode;

  /** Should the label show a required indicator? */
  required?: boolean;

  /** Symbol to use as the required indicator on the label, defaults to "*" */
  requiredIndicator?: React.ReactNode;

  /** should the input validate automatically against the provided schema? Default: `true` */
  autoValidate?: boolean;
}

export const CodeInput = (({
  ref,
  className,
  parts,
  bind,
  onChange,
  validationMode,
  validationErrorMessages,
  errorIcon,
  error,
  value,
  pending,
  statusPosition,
  leftOverlay,
  rightOverlay,
  scrollValidationErrorsIntoView,
  displaySize,
  label,
  required,
  requiredIndicator,
  hideIconOnStatus,
  statusClassName,
  validationErrorsClassName,
  labelClassName,
  labelId,
  disableOnPending,
  disabled,
  autoValidate,
  ...nativeProps
}: ICodeInputProps<NullOrUndefined<string>> & { ref?: React.Ref<HTMLDivElement> }) => {
  const inputRefs = React.useRef<(HTMLInputElement | null | undefined)[]>([]);

  const [boundValue, setBoundValue, bindConfig] = useBindingState(bind, {
    onChange,
    validationErrorMessages,
    validationMode,
    value,
    autoValidate,
  });

  const globals = useArmstrongConfig({
    validationMode: bindConfig.validationMode,
    inputStatusPosition: statusPosition,
    inputDisplaySize: displaySize,
    requiredIndicator,
    hideInputErrorIconOnStatus: hideIconOnStatus,
    disableControlOnPending: disableOnPending,
    scrollValidationErrorsIntoView,
    validationErrorIcon: errorIcon,
    autoValidate: bindConfig.autoValidate,
  });

  const goNextPart = React.useCallback(
    (partIndex: number) => {
      const relativeIndex = parts.slice(partIndex + 1).findIndex(part => typeof part !== 'string');

      if (relativeIndex !== -1) {
        inputRefs.current[relativeIndex + partIndex + 1]?.focus();
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
    (partIndex: number, incomingValue: NullOrUndefined<string>) => {
      const sliceStart = parts
        .slice(0, partIndex)
        .reduce<number>((output, part) => output + getLengthFromPart(part), 0);
      const sliceEnd = sliceStart + getLengthFromPart(parts[partIndex]);

      return incomingValue?.slice(sliceStart, sliceEnd) || '';
    },
    [parts]
  );

  // Tracks the authoritative per-part values to avoid the lossy roundtrip
  // through boundValue (joining then re-splitting loses empty-part positions).
  const partsRef = React.useRef<string[] | null>(null);

  const boundValueArray = React.useMemo(() => {
    // When we have a tracked parts array whose join matches the current boundValue,
    // use it directly — this preserves correct part positions even when middle parts
    // are empty (e.g. ["a","","c"] joins to "ac" but getValueForPart would misparse it as ["a","c",""])
    if (partsRef.current && partsRef.current.join('') === (boundValue ?? '')) {
      return partsRef.current;
    }
    // Fall back to getValueForPart for external value changes (e.g. consumer sets the form value)
    return parts.map((_, partIndex) => getValueForPart(partIndex, boundValue));
  }, [getValueForPart, parts, boundValue]);

  interface IFormState {
    parts: string[];
  }

  const { formProp, formState } = useForm<IFormState>({
    parts: boundValueArray,
  });

  const onPartValueChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, partIndex: number) => {
      const currentPartLength = getLengthFromPart(parts[partIndex]);

      const currentPartValue = event.currentTarget.value || '';

      if (currentPartValue.length >= currentPartLength) {
        goNextPart(partIndex);
      }

      const newParts = parts.map((_, i) => (i === partIndex ? currentPartValue : formState?.parts[i] ?? ''));
      partsRef.current = newParts;
      setBoundValue?.(newParts.join(''));
    },
    [parts, goNextPart, formState?.parts, setBoundValue]
  );

  const onPaste = React.useCallback(
    (event: React.ClipboardEvent<HTMLInputElement>) => {
      event.preventDefault();
      const pasteValue = event.clipboardData.getData('text/plain');
      const target = event.target as HTMLInputElement;

      const partIndex = inputRefs.current.indexOf(target);
      if (partIndex === -1) return;

      const selectionStart = Math.min(target.selectionStart ?? 0, target.selectionEnd ?? 0);
      const selectionEnd = Math.max(target.selectionStart ?? 0, target.selectionEnd ?? 0);

      // Build the new part value by inserting pasted text at the cursor position
      const currentPartValue = formState?.parts[partIndex] ?? '';
      const newPartValue =
        currentPartValue.slice(0, selectionStart) + pasteValue + currentPartValue.slice(selectionEnd);

      // Distribute the result across parts starting from the target part,
      // overflowing into subsequent parts as needed
      const newParts = parts.map((_, i) => formState?.parts[i] ?? '');
      let remaining = newPartValue;
      for (let i = partIndex; i < parts.length; i += 1) {
        if (typeof parts[i] !== 'string') {
          const partLength = getLengthFromPart(parts[i]);
          newParts[i] = remaining.slice(0, partLength);
          remaining = remaining.slice(partLength);
          if (!remaining) break;
        }
      }

      partsRef.current = newParts;
      setBoundValue(newParts.join(''));
    },
    [setBoundValue, formState?.parts, parts]
  );

  const onKeyDown = React.useCallback(
    (
      event: React.KeyboardEvent<HTMLInputElement>,
      partIndex: number,
      part: CodeInputPartDefinition<NullOrUndefined<string>>
    ) => {
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

  useDidUpdateEffect(() => {
    if (globals.autoValidate && bindConfig.isTouched) {
      bindConfig.validate();
    }
  }, [boundValue]);

  const onBlur = React.useCallback(() => {
    if (formState?.parts.every(p => p) && globals.autoValidate && !bindConfig.isTouched) {
      bindConfig.validate();
      bindConfig.setTouched(true);
    }
  }, [bindConfig, formState?.parts, globals.autoValidate]);

  const showLeftOverlay =
    leftOverlay &&
    (globals.inputStatusPosition !== 'left' ||
      !globals.hideInputErrorIconOnStatus ||
      (!pending && (!bindConfig.shouldShowValidationErrorIcon || !bindConfig.validationErrorMessages.length)));

  const showRightOverlay =
    rightOverlay &&
    (globals.inputStatusPosition !== 'right' ||
      !globals.hideInputErrorIconOnStatus ||
      (!pending && (!bindConfig.shouldShowValidationErrorIcon || !bindConfig.validationErrorMessages.length)));

  return (
    <>
      <div ref={ref} title="Code input" {...nativeProps}>
        {label && (
          <Label
            className={concat('arm-code-input-label', labelClassName)}
            id={labelId}
            required={required}
            requiredIndicator={globals.requiredIndicator}
            displaySize={globals.inputDisplaySize}
          >
            {label}
          </Label>
        )}
        <div className={concat('arm-code-input', className)}>
          <StatusWrapper
            error={error || !!bindConfig.validationErrorMessages.length}
            errorIcon={bindConfig.validationErrorIcon}
            statusPosition={globals.inputStatusPosition}
            pending={pending}
            validationMode={bindConfig.validationMode}
            className={statusClassName}
          >
            <>
              {showLeftOverlay && leftOverlay}
              {parts?.map((part, index) => (
                <CodeInputPart<string>
                  type="text"
                  bind={formProp('parts', index).bind()}
                  part={part}
                  key={index}
                  onChange={event => onPartValueChange(event, index)}
                  onKeyDown={event => onKeyDown(event, index, part)}
                  onPaste={onPaste}
                  onBlur={onBlur}
                  disabled={disabled || (pending && globals.disableControlOnPending)}
                  ref={r => {
                    inputRefs.current[index] = r;
                  }}
                  displaySize={globals.inputDisplaySize}
                />
              ))}
              {showRightOverlay && rightOverlay}
            </>
          </StatusWrapper>
        </div>
      </div>

      {!!bindConfig.validationErrorMessages?.length && bindConfig.shouldShowValidationErrorMessage && (
        <ValidationErrors
          className={validationErrorsClassName}
          validationErrors={bindConfig.validationErrorMessages}
          scrollIntoView={globals.scrollValidationErrorsIntoView}
        />
      )}
    </>
  );
}) as (<TBind extends NullOrUndefined<string>>(
  props: ArmstrongVFCProps<ICodeInputProps<TBind>, HTMLDivElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ICodeInputProps<NullOrUndefined<string>>>;

CodeInput.displayName = 'Code Input';
