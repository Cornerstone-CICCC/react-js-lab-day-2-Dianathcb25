import { useState, type ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
