import "./App.css";
import React, { useContext } from "react";
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

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Layout />
    </div>
  );
};

export default App;
