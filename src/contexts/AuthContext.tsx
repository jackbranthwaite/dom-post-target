import React, { createContext, ReactNode } from "react";
import { useProvideAuth } from "./auth/useProvideAuth";

interface AppContextInterface {
  user: object;
  login: (credentials: any) => Promise<any>;
  register: (details: any) => Promise<any>;
  logout: () => Promise<any>;
  authStatus: string;
}

interface IChildren {
  children?: ReactNode;
}

export const AuthContext = createContext<AppContextInterface | null>(null);

export const AuthContextProvider = ({ children }: IChildren) => {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
