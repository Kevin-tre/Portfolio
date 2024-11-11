import React, { useContext, useEffect } from "react";
import "./App.scss";
import Layout from "./layouts/Layout";
import {
  DarkModeProvider,
  DarkModeContext,
} from "../src/context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <MainApp />
    </DarkModeProvider>
  );
}

const MainApp = () => {
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="main-container">
      <Layout />
    </div>
  );
};

export default App;
