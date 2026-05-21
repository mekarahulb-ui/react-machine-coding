import React, { createContext, useState } from 'react';

/**
 * Context API Example
 * 
 * Global state management without prop drilling.
 * Demonstrates:
 * - createContext
 * - Context Provider
 * - Context Consumer
 */

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    colors: {
      light: {
        bg: '#ffffff',
        text: '#2c3e50',
        border: '#ecf0f1'
      },
      dark: {
        bg: '#1e1e1e',
        text: '#ecf0f1',
        border: '#34495e'
      }
    }
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
