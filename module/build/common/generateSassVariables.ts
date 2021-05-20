import { FileSystem } from '@rocketmakers/shell-commands/lib/fs';
import * as ejs from 'ejs';
import * as path from 'path';

import { Paths } from '../paths';

export const generateSassVariables = async () => {
  const definitionsFile = await FileSystem.readFileAsync(Paths.sassVariableDefinitions);
  const definitions: { [outputFileName: string]: { [name: string]: string } } = JSON.parse(definitionsFile.toString());

  for (const definition of Object.keys(definitions)) {
    const outputPath = path.resolve(Paths.distDirectory, `${definition}.variables.scss`);
    const variables = Object.keys(definitions[definition]).map((key) => ({ name: key, value: definitions[definition][key] }));
    const template = await ejs.renderFile(Paths.sassVariablesTemplate, { variables });
    await FileSystem.writeFileAsync(outputPath, template);
  }
};
