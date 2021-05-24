## Setup

There is some setup involved in making icons work in an app using Armstrong.

Armstrong icons currently support two icon fonts:

[Icomoon](https://icomoon.io/preview-ultimate.html)
[LinearIcon](https://linearicons.com/)

These icon fonts use ligatures (collections of characters that a font turns into a single character) to render a tonne of different icons.

You must have the icon font file for the icon font you're using. Speak to an Armstrong person about how to get this.

This font file must be set up as a font face in your SCSS using one of the following:

```scss
// Icomoon
@font-face {
  font-family: "IcoMoon-Ultimate";
  src: url("../assets/fonts/IcoMoon-Ultimate.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

// LinearIcons
@font-face {
  font-display: swap;
  font-family: "Linearicons";
  src: url("../assets/fonts/Linearicons.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
```

Finally, you must import the SCSS file for the font you're using into your own SCSS

```scss
@import "~@rocketmakers/armstrong-edge/dist/icomoon.scss";
@import "~@rocketmakers/armstrong-edge/dist/linearicons.scss";
```

This includes all the definitions which are used to tell the icon component what to render. Alternatively, you can copy the file you're using, remove all unused icons manually, and import that instead as these files are pretty big. We are considering ways of automating this in future.

From here, icons can be used as follows:

```tsx
<Icon iconSet="IcoMoon" iconName="heart2" />
```

**see storybook page for icons for more instructions on use**

TODO add storybook link here when deployed
