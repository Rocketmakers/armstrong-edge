import * as React from 'react';
import { IIconWrapperProps } from '../..';
import { FormValidationMode, IBindingProps } from '../../hooks/form';
import { ArmstrongId } from '../../types';
import { IconSet } from '../icon';
import { IInputWrapperProps } from '../inputWrapper';
export interface ITag extends IIconWrapperProps<IconSet, IconSet> {
    /** id used to keep track of the tag when used in tag lists */
    id: ArmstrongId;
    /** the text to render inside the tag */
    name?: string;
}
export interface ITagInputProps extends Omit<IInputWrapperProps, 'above' | 'below' | 'onClick'>, Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange' | 'value'> {
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
export declare const TagInput: React.ForwardRefExoticComponent<Pick<ITagInputProps, "max" | "required" | "error" | "hidden" | "dir" | "form" | "slot" | "style" | "title" | "pattern" | "pending" | "disabled" | "color" | "size" | "multiple" | "height" | "translate" | "width" | "prefix" | "src" | "children" | "key" | "list" | "step" | "tags" | "className" | "onClick" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "min" | "value" | "enterKeyHint" | "capture" | "type" | "accept" | "alt" | "autoComplete" | "autoFocus" | "checked" | "crossOrigin" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "maxLength" | "minLength" | "name" | "readOnly" | "leftIcon" | "rightIcon" | "errorIcon" | "statusPosition" | "validationErrorMessages" | "validationMode" | "leftOverlay" | "rightOverlay" | "hideIconOnStatus" | "disableOnPending" | "scrollValidationErrorsIntoView" | "bind" | "onTextInputChange" | "textInputValue" | "allowDuplicates" | "spaceCreatesTags" | "getCanAddTag" | "tagPosition" | "deleteButton" | "deleteAllButton" | "onRemoveAllTags" | "onTextInputValueChange" | "onAddTag" | "onRemoveTag"> & React.RefAttributes<HTMLInputElement>>;
