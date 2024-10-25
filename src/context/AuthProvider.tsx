import React, { createContext, useEffect, useState } from "react";
import axiosClient from "../services/axiosClient";

type Props = {
  children: React.ReactNode;
};

interface AuthInterface {
  isLogin: boolean;
  login: () => void;
  logout: () => void;
  token: string | null;
}

const AuthContext = createContext<AuthInterface | undefined>(undefined);

const AuthProvider = ({ children }: Props) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  useEffect(() => {
    //Kiểm tra token ở localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
      setToken(token);
      axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, [isLogin, token]);

  const login = () => {
    setIsLogin(true);
  };

  const logout = async () => {
    await localStorage.clear();
    setToken(null);
    setIsLogin(false);
  };
  const value = {
    token,
    isLogin,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
