import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  const getUsers = () => {
    const localUsers = localStorage.getItem("users");

    return localUsers ? JSON.parse(localUsers) : [];
  };

  const login = async (email, password) => {
    const users = getUsers();
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      const userObj = {
        id: foundUser.id,
        email: foundUser.email,
        token: "fake-jwt-token-" + Date.now(),
      };

      setUser(userObj);
      localStorage.setItem("user", JSON.stringify(userObj));
      toast.success("Logged in successfully");

      return { success: true, user: userObj };
    }

    return { success: false };
  };

  const register = async (email, password) => {
    const users = getUsers();
    if (users.some((u) => u.email === email)) {
      return { success: false, error: "Email already registered" };
    }

    const newUser = {
      id: Date.now(),
      email,
      password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    const userObj = {
      id: newUser.id,
      email: newUser.email,
      token: "fake-jwt-token-" + Date.now(),
    };

    setUser(userObj);
    localStorage.setItem("user", JSON.stringify(userObj));
    toast.success("Registered successfully");

    return { success: true, user: userObj };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
