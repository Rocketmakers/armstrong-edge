export interface IWindowSize {
    innerWidth: number;
    innerHeight: number;
    outerWidth: number;
    outerHeight: number;
}
/** Returns the size of the window as a piece of live state, ensuring that any calculations happening during the React lifecycle that need the window size will have it up to date */
export declare function useWindowSize(): IWindowSize;
