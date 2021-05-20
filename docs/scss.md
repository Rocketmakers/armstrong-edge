## SCSS in Armstrong

Armstrong uses SCSS which isn't compiled down before build, allowing the consuming app to handle compiling.

To use SCSS from Armstrong, it must be imported into your app's SCSS:

```scss
// basic theme - includes only functional and layout styling
@import "~@rocketmakers/armstrong-edge/dist/basic.scss";

// prototyping theme - includes more production-ready styling, like drop shadows and colours
// must be imported on top of basic theme
@import "~@rocketmakers/armstrong-edge/dist/prototyping.scss";
```

### SCSS concatenation

SCSS files can be used anywhere inside src/ and will be automatically concatenated during build based on a naming convention: `inputName.outputName.scss`

For example, `textInput.basic.scss` and `selectInput.basic.scss` will be automatically found from anywhere in the project and concatenated into `basic.scss` at the root of `dist/`

This allows us to write multiple custom themes, or groups of styles, that can be imported from one place. If we ever wanted to add a `funky` theme, we would just need to add `textInput.funky.scss` everywhere.

This will also work to copy over files like `src/theme/animations.scss` into `dist/animations.scss`
