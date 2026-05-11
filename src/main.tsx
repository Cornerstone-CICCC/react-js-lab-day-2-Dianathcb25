import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import LoginContextProvider from './context/login/LoginContextProvider.tsx';
import { ThemeContextProvider } from './context/theme/ThemeContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
