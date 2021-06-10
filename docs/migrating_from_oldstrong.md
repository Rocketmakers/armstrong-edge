# Migrating from Oldstrong

There are a number of significant breaking changes in this version of Armstrong, which will be documented here.

## Forms

The new binder

### TextInput and TextAreaInput

The TextInput's `multiLine` prop previously made the TextInput render a textarea instead of an input. This prop has been removed in favour of a new TextAreaInput component.

```tsx
// old
<TextInput multiLine />

// new
<TextAreaInput />
```

Additionally, TextInput has been split into a number of different components most of which just add `type=X` but NumberInput uses a numeric bind prop.

### SelectInput

There is now a DOM based select alternative called ListBox (it's a silly name but w3c recommend it in their aria docs so...) which can be optionally used in substitute.

The native SelectInput has been renamed Select.

## Icons

Icons now use a string union type rather than a big constant to define different icons in Typescript. This means that the value for the icon prop will be in kebab case as it's used by a SCSS selector (and camel case in selectors is illegal).

```tsx
// oldest (but still supported and still the way I think most people are doing it)
<Icon icon={icon.Icomoon.fileMinus} />

// old
<Icon {...getIconProps('Icomoon', 'fileMinus')} />

// new
<Icon iconSet="Icomoon" icon="file-minus" />
// or
<IcomoonIcon icon="file-minus" />
```

More information in [using_icons.md](./using_icons.md)

## Buttons

Buttons have barely changed, but there is a new IconButton component that can be used to render a button that just uses an icon.

## Dialogs

There is now a core modal component which is a stripped back version of the old Dialog component - it just renders a div that portals somewhere.

Modal portals can be configured to portal into a few different options of root element:

1. the body by default
2. an `.arm-modal-layer` element rendered by the `ModalProvider` if it's present, which works by passing a ref into context which is consumed by the `Modal`
3. an element that is passed by `portalInto` prop into the `Modal`
4. an element selected by document.QuerySelector from the `portalIntoSelector` prop

Using the `ModalProvider` is the recommended method, as it maintains control of where your modals end up while still using more Reacty best practicesy patterns.

The new Dialog `component` uses the `Modal` under the hood, and works the same way as the oldstrong `Dialog`, other than the new portal behaviour specified above.

Another feature of the `ModalProvider` is that it provides the context used for `useModal` and `useDialog` which are hooks designed to work the same way as the old `useDialogProvider` hook - when the callback they return is run, it opens a Modal and returns a promise that is resolved when the user performs a defined action inside that Modal.

For detailed information on using that hook, see `useModal and useDialog` in Storybook
