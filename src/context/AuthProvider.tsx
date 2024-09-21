import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

interface AuthInterface {
  isLogin: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthInterface | undefined>(undefined);

const AuthProvider = ({ children }: Props) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const login = () => {
    setIsLogin(true);
  };

  const logout = () => {
    setIsLogin(false);
  };
  const value = {
    isLogin,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
