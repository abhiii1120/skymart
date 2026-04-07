import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

export const authStore = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const signup = (name, email, password) => {
    const existing = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    const alreadyExists = existing.some((u) => u.email === email);
    if (alreadyExists) return { success: false, message: "Email already registered" };

    const newUser = { name, email, password };
    localStorage.setItem("registeredUsers", JSON.stringify([...existing, newUser]));

    localStorage.setItem("user", JSON.stringify({ name, email }));
    setUser({ name, email });
    return { success: true };
  };

  const login = (email, password) => {
    const existing = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    const found = existing.find((u) => u.email === email && u.password === password);
    if (!found) return { success: false, message: "Invalid email or password" };

    localStorage.setItem("user", JSON.stringify({ name: found.name, email }));
    setUser({ name: found.name, email });
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <authStore.Provider value={{ user, login, signup, logout }}>
      {children}
    </authStore.Provider>
  );
};

export const useAuth = () => useContext(authStore);