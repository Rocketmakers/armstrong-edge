import { FileSystem } from "@rocketmakers/shell-commands/lib/fs";
import { glob, IOptions } from "glob";
import * as path from "path";
import { distDirectory, sassGlob } from "./paths";

const globAsync = async (searchString: string, options: IOptions) => {
  return new Promise<string[]>((resolve, reject) => {
    glob(searchString, options, (error, matches) => {
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

export const concat = async () => {
  if (!FileSystem.exists(distDirectory)) {
    FileSystem.makeDirectory(distDirectory);
  }

  // get paths that match the searchString glob
  const paths = await globAsync(sassGlob, { ignore: "**/*/stories/**/*" });

  /** dictionary of output files keyed by their name */
  const filesDictionary: Record<string, string> = {};

  // eslint-disable-next-line no-console
  console.log(`Found ${paths.length} scss files`);

  for (const filePath of paths) {
    // read file at path
    const fileBuffer = await FileSystem.readFileAsync(filePath);
    let fileContents = fileBuffer.toString();

    // strip out all @use statements
    fileContents = fileContents.replace(/^@use.*$/gm, "");

    // get filename from path
    const splitPath = filePath.split("/");
    const fileName = splitPath[splitPath.length - 1];

    // get output filename from filename
    const splitFileName = fileName.split(".");
    const outputFileName = splitFileName[splitFileName.length - 2];

    // concat to the existing key on the dictionary
    filesDictionary[outputFileName] = `${
      filesDictionary[outputFileName] || ""
    }// ${fileName}\n\n${fileContents}\n`;
  }

  // write to files
  for (const fileName of Object.keys(filesDictionary)) {
    const extra =
      fileName.indexOf("basic") !== -1
        ? `\n@use "variables";\n@use "mixins";`
        : "";

    const extra2 =
      fileName.indexOf("mixins") !== -1 ? `\n@use "variables";` : "";

    console.log(fileName, extra);
    const fileContents = `@use "sass:math";${extra}${extra2}\n\n${filesDictionary[fileName]}`;

    const output = path.resolve(distDirectory, `${fileName}.scss`);

    // eslint-disable-next-line no-console
    console.log(`Writing ${output}`);

    await FileSystem.writeFileAsync(output, fileContents);
  }
};

concat();
