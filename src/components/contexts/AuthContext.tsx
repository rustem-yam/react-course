import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { IAuthContextProps } from "./authContext.interface";

const AuthContext = createContext<IAuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const authContextValue: IAuthContextProps = {
    isAuth,
    setIsAuth,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
