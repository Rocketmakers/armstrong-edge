import * as React from 'react';

import { IBindingProps, useBindingState, useForm } from '../../form';
import { useDidUpdateEffect } from '../../hooks/useDidUpdateEffect';
import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongVFCProps, DisplaySize, NullOrUndefined } from '../../types';
import { concat, contentDependency, findLastIndex } from '../../utils';
import { useArmstrongConfig } from '../config';
import { Input, ITextInputProps } from '../input';
import { IInputWrapperProps } from '../inputWrapper';
import { Label } from '../label';
import { StatusWrapper } from '../statusWrapper';
import { ValidationErrors } from '../validationErrors';
import { CodeInputPartDefinition } from './codeInput.types';
import { getLengthFromPart } from './codeInput.utils';

import './codeInput.theme.css';

export interface ICodeInputPartProps<TBind extends NullOrUndefined<string>> extends ITextInputProps<TBind> {
  /** The given length of this part. If this is a string, the string will be rendered. */
  part: CodeInputPartDefinition<TBind>;
}

/** an individual input from the CodeInput */
const CodeInputPart = // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
  (({
    ref,
    bind,
    part,
    ...inputProps
  }: ArmstrongVFCProps<ICodeInputPartProps<NullOrUndefined<string>>, HTMLInputElement>) => {
    const length = React.useMemo(() => getLengthFromPart(part), [part]);

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

interface IInternalFormState {
  parts: string[];
}

export const CodeInput = // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
  (({
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
  }: ArmstrongVFCProps<ICodeInputProps<NullOrUndefined<string>>, HTMLDivElement>) => {
    const inputRefs = React.useRef<(HTMLInputElement | null | undefined)[]>([]);

    const [boundValue, setBoundValue, bindConfig] = useBindingState(bind, {
      onChange,
      validationErrorMessages,
      validationMode,
      value,
      autoValidate,
    });

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

    const boundValueArray = React.useMemo(() => {
      return parts.map((_, partIndex) => getValueForPart(partIndex, boundValue));
    }, [getValueForPart, parts, boundValue]);

    const { formProp, formState } = useForm<IInternalFormState>({
      parts: boundValueArray,
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

    const onPartValueChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>, partIndex: number) => {
        formProp('parts', partIndex).set(event.currentTarget.value);

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

        const selectionStart = Math.min(target.selectionStart ?? 0, target.selectionEnd ?? 0);
        const selectionEnd = Math.max(target.selectionStart ?? 0, target.selectionEnd ?? 0);

        const insertionStart =
          new Array(partIndex).fill(null).reduce((memo, _, i) => {
            const part = parts[i];
            return memo + getLengthFromPart(part);
          }, 0) + selectionStart;

        const insertionEnd = insertionStart + (selectionEnd - selectionStart);

        const startSlice = boundValue?.slice(0, insertionStart) ?? '';
        const endSlice = boundValue?.slice(insertionEnd) ?? '';

        const newValue = startSlice + pasteValue + endSlice;

        setBoundValue(newValue);
        inputRefs.current[inputRefs.current.length - 1]?.focus();
      },
      [setBoundValue, boundValue, parts]
    );

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

    React.useEffect(() => {
      setBoundValue?.(formState?.parts?.join(''));
      // eslint-disable-next-line react-hooks/exhaustive-deps -- we don't want the trigger the effect when the function is re-defined
    }, [contentDependency(formState?.parts)]);

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
        (!pending && !bindConfig.shouldShowValidationErrorIcon));

    const showRightOverlay =
      rightOverlay &&
      (globals.inputStatusPosition !== 'right' ||
        !globals.hideInputErrorIconOnStatus ||
        (!pending && !bindConfig.shouldShowValidationErrorIcon));

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
                    onKeyDown={event => onKeyDown(event, index, +part)}
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
