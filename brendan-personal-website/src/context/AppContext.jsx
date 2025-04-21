// src/context/AppContext.jsx
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [developerMode, setDeveloperMode] = useState(false);
  const toggleDeveloperMode = () => setDeveloperMode((m) => !m);

  return (
    <AppContext.Provider value={{ developerMode, toggleDeveloperMode }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be inside AppProvider");
  return ctx;
}
