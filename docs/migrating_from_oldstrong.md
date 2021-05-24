# Migrating from Oldstrong

There are a number of significant breaking changes in this version of Armstrong, which will be documented here.

## Forms

The new binder

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
