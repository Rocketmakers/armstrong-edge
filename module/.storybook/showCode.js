// Show code in Docs view by default, from https://github.com/storybookjs/storybook/issues/10430
// this [].forEach.call pattern is weird and seems silly, but hey ho I didn't do it

window.addEventListener('load', () => {
  let loc = window.location.href;
  showCodeSamples();

  window.setInterval(() => {
    let newLoc = window.location.href;

    if (newLoc !== loc) {
      loc = newLoc;
      showCodeSamples();
    }
  }, 300);
});

function showCodeSamples() {
  try {
    const docs = document.querySelectorAll('.sbdocs');

    [].forEach.call(docs, (el) => {
      const buttons = el.querySelectorAll('button');
      const codeButton = [].find.call(buttons, (el) => el.textContent === 'Show code');
      if (codeButton) {
        codeButton.click();
      }
    });
  } catch (e) {
    console.warn(e);
  }
}
