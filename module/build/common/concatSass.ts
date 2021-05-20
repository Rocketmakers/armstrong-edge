import { FileSystem } from '@rocketmakers/shell-commands/lib/fs';
import * as chokidar from 'chokidar';
import * as glob from 'glob';
import * as path from 'path';

import { Paths } from '../paths';

const globAsync = async (searchString: string) => {
  return new Promise<string[]>((resolve, reject) => {
    glob(searchString, (error, matches) => {
      if (error) {
        reject(error);
      }
      resolve(matches);
    });
  });
};

/**
 * concatenate all scss files that match file conventions into single files
 *
 * I.E.
 * textInput.core.scss will be concatenated into core.scss in dist/
 * animations.scss will be concatenated into animations.scss in dist/
 */

export const concatSass = async () => {
  // get paths that match the searchString glob
  const paths = await globAsync(Paths.sassGlob);

  /** dictionary of output files keyed by their name */
  const filesDictionary: Record<string, string> = {};

  for (const filePath of paths) {
    // read file at path
    const fileBuffer = await FileSystem.readFileAsync(filePath);
    const fileContents = fileBuffer.toString();

    // get filename from path
    const splitPath = filePath.split('/');
    const fileName = splitPath[splitPath.length - 1];

    // get output filename from filename
    const splitFileName = fileName.split('.');
    const outputFileName = splitFileName[splitFileName.length - 2];

    // concat to the existing key on the dictionary
    filesDictionary[outputFileName] = `${filesDictionary[outputFileName] || ''}// ${fileName}\n\n${fileContents}\n`;
  }

  // write to files
  for (const fileName of Object.keys(filesDictionary)) {
    const fileContents = filesDictionary[fileName];

    await FileSystem.writeFileAsync(path.resolve(Paths.distDirectory, `${fileName}.scss`), fileContents);
  }
};

/** recompile on changes to sass files using chokidar */

export const sassConcatWatch = async () => {
  const watcher = chokidar.watch(Paths.sassGlob, { persistent: true });

  // eslint-disable-next-line no-console
  watcher.on('ready', () => console.log('Listening for SASS changes'));

  watcher.on('change', (changedFilePath) => {
    // eslint-disable-next-line no-console
    console.log(`File ${changedFilePath} has changed`);
    concatSass();
  });
};
