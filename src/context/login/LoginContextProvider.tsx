import { useState, type ReactNode } from 'react';
import { LoginContext } from './LoginContext';

export const LoginContextProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string>('');
  const [login, setLogin] = useState<boolean>(false);
  return (
    <LoginContext.Provider value={{ username, setUsername, login, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
