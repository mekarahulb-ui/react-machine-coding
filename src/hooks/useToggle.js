import { useState, useCallback } from 'react';

/**
 * Custom Hook: useToggle
 * 
 * Demonstrates:
 * - Simple custom hook
 * - useState for boolean state
 * - useCallback for memoized functions
 */

export function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => {
    setState(prev => !prev);
  }, []);

  return [state, toggle];
}
