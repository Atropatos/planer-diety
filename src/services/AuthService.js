import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (params) => {
    // Implement your login logic here, possibly using fetch or axios
    // For demonstration, we're just setting a dummy user
    setUser({ id: '123', username: params.username });
  };

  const isAuthenticated = () => {
    return !!user;
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthService = () => useContext(AuthContext);
