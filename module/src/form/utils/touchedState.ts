/*
 * Utility functions relating to touched state
 * --------------------------------------
 * Touched state allows inputs to store the fact that they've been interacted with, useful for displaying errors/success
 */
import type { KeyChain, TouchedAction, TouchedState } from '../types';
import { isMyKeyChainItem, keyStringFromKeyChain } from './keyChain';

/**
 * Returns the touched state for a specific field.
 * @param state The current touched state.
 * @param keyChain The key chain of the field.
 * @returns The field touched states that match the key chain.
 */
export const touchedStateForKeyChain = (state: string[], keyChain: KeyChain): string[] => {
  return state.filter(s => isMyKeyChainItem(s, keyStringFromKeyChain(keyChain, 'dots')));
};

/**
 * The reducer for the touched state object (just a flat dictionary keyed by dotted path for simplicity.)
 * @param state The current touched state.
 * @param action The action to respond to.
 * @returns The updated state.
 */
export const touchedStateReducer = (state: TouchedState, action: TouchedAction): TouchedState => {
  switch (action.type) {
    case 'set-touched':
      if (action.touched) {
        const key = keyStringFromKeyChain(action.keyChain, 'dots');
        if (state.includes(key)) {
          return state;
        }
        return [...state.filter(k => k !== key), key];
      }
      {
        const toRemove = touchedStateForKeyChain(state, action.keyChain);
        if (!state.some(k => toRemove.includes(k))) {
          return state;
        }
        return state.filter(k => !toRemove.includes(k));
      }
    case 'reset-touched':
      return [];
    default:
      return state;
  }
};
