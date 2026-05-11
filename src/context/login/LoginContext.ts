import React, { createContext } from 'react';

type UserContextType = {
  username: string;
  login: boolean;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginContext = createContext<UserContextType>({
  username: '',
  login: false,
  setUsername: () => {},
  setLogin: () => {},
});
