import React, { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem("darkMode") === "true" ? true : false;
    setDarkMode(value);
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };
