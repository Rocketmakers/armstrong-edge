import type { KeyChain, TouchedAction, TouchedState } from '../types';
/**
 * Returns the touched state for a specific field.
 * @param state The current touched state.
 * @param keyChain The key chain of the field.
 * @returns The field touched states that match the key chain.
 */
export declare const touchedStateForKeyChain: (state: string[], keyChain: KeyChain) => string[];
/**
 * The reducer for the touched state object (just a flat dictionary keyed by dotted path for simplicity.)
 * @param state The current touched state.
 * @param action The action to respond to.
 * @returns The updated state.
 */
export declare const touchedStateReducer: (state: TouchedState, action: TouchedAction) => TouchedState;
