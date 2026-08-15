import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { fetchMe, loginUser, registerUser, logoutUser } from "../api/authApi";

const AuthContext = createContext(null);

// wrap the app and provide auth state
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // true while we check for an existing session

  useEffect(() => {
    fetchMe()
      .then((data) => setUser(data.user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  //  login functions
  const login = useCallback(async (credentials) => {
    const data = await loginUser(credentials);
    setUser(data.user);
    return data.user;
  }, []);

  // register function
  const register = useCallback(async (payload) => {
    const data = await registerUser(payload);
    setUser(data.user);
    return data.user;
  }, []);

  // logout function
  const logout = useCallback(async () => {
    await logoutUser();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};
