/** Generates a unique ID on first render using the current unix time and a randomly generated number up to 1000 - should be used for DOM elements when necessary for, for example, defining relationships between elements using aria */
export declare function useGeneratedId(prefix?: string, override?: string): string;
