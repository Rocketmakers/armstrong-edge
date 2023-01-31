const chokidar = require('chokidar');
const bundleScss = require('bundle-scss');

const scssGlob = 'src/components/**/*.scss';
const outputPath = 'dist/scss/theme.scss';

const sassConcatWatch = async () => {
  const watcher = chokidar.watch(scssGlob, { persistent: true });

  await bundleScss(scssGlob, outputPath);

  // eslint-disable-next-line no-console -- Build script
  watcher.on('ready', () => console.log('Listening for SASS changes'));

  watcher.on('change', changedFilePath => {
    // eslint-disable-next-line no-console -- Build script
    console.log(`File ${changedFilePath} has changed`);
    bundleScss(scssGlob, outputPath);
  });
};

sassConcatWatch();
