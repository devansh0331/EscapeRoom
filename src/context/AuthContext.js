import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [count, setCount] = useState(0);

  function valCount() {
    setCount(count + 1);
  }

  const value = {
    count,
    valCount
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
