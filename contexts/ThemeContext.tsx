'use client';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import React, { createContext, useContext, useEffect } from 'react';

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme:dark)').matches, //get system color scheme.
    'isDarkMode',
  );

  function toggleDarkMode() {
    setIsDarkMode((isDark: boolean) => !isDark);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark'); //add on html element.
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null)
    throw new Error('ThemeContext must be used under ThemeProvider');
  return context;
}

export { ThemeProvider, useTheme };
