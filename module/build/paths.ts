import * as path from 'path'

export namespace Paths {
    export const moduleDirectory = path.resolve('../');
    export const sourceDirectory = path.resolve(moduleDirectory, 'src');
    export const distDirectory = path.resolve(moduleDirectory, 'dist');

    export const sassGlob = path.resolve(Paths.sourceDirectory, '**/*.scss');
}