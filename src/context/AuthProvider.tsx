import React, { createContext, useEffect, useState } from "react";
import axiosClient from "../services/axiosClient";

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

  useEffect(() => {
    //Kiểm tra token ở localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
      axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  const login = () => {
    setIsLogin(true);
  };

  const logout = async () => {
    await localStorage.clear();
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
