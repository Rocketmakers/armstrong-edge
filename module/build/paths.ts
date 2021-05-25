import * as path from 'path';

export namespace Paths {
  export const buildDirectory = path.resolve('./');
  export const moduleDirectory = path.resolve(buildDirectory, '../');
  export const sourceDirectory = path.resolve(moduleDirectory, 'src');
  export const distDirectory = path.resolve(moduleDirectory, 'dist');

  export const sassGlob = path.resolve(Paths.sourceDirectory, '**/*.scss');

  export const sassVariableDefinitions = path.resolve(Paths.sourceDirectory, 'sassVariables.json');
  export const sassVariablesTemplate = path.resolve(Paths.buildDirectory, 'sassVariablesTemplate.scss.ejs');
}
