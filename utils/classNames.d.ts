interface ClassNameDictionary {
    [id: string]: boolean | undefined | null;
}
type ClassNameArray = Array<ClassName>;
type ClassName = string | ClassNameDictionary | ClassNameArray | undefined | null | false;
/**
 * Concatenate classnames into a single string
 */
export declare function concat(...args: ClassName[]): string;
export {};
