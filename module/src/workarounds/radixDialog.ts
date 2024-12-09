/**
 * This fixes a focus issue when tabbing through inputs within a dialog.
 * See: https://github.com/JedWatson/react-select/issues/5732
 */
export const onBlurWorkaround = (event: React.FocusEvent<HTMLElement>) => {
  const element = event.relatedTarget;
  const focusableElementTagNames = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'];
  if (element && focusableElementTagNames.includes(element.tagName)) {
    (element as HTMLElement).focus();
  }
};
