'use client'
import { AuthContextProps, RegisterData} from "@/interfaces/IRegister";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
  });
  
  export interface AuthProviderProps {
    children: React.ReactNode;
  }
  
  export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<RegisterData | null>(null);
    const [token, setToken] = useState<string | null>(null);
  
    useEffect(() => {
      if (user && token) {
        localStorage.setItem('userSession', JSON.stringify({ user, token }));
      }
    }, [user, token]);
  
    useEffect(() => {
      const storedUserSession = localStorage.getItem('userSession');
      if (storedUserSession) {
        const parsedData = JSON.parse(storedUserSession);
        setUser(parsedData.user);
        setToken(parsedData.token);
      }else {
        setUser(null);
        setToken(null);
      }
    }, []);
  
    return (
      <AuthContext.Provider value={{ user, token, setUser, setToken }}>
        {children}
      </AuthContext.Provider>
    );
  }
  
  export const useAuth = () => useContext(AuthContext); 
 
