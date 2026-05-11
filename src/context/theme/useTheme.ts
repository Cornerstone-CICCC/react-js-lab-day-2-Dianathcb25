import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw Error('useTheme must be used inside ThemeContextProvider');
  return context;
};
