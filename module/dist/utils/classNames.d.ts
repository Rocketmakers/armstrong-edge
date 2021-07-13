export declare namespace ClassNames {
    interface ClassNameDictionary {
        [id: string]: boolean | undefined | null;
    }
    interface ClassNameArray extends Array<ClassName> {
    }
    type ClassName = string | ClassNameDictionary | ClassNameArray | undefined | null | false;
    /**
     * Concatenate classnames into a single string
     */
    export function concat(...args: ClassName[]): string;
    export {};
}
