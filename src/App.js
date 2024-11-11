import React, { useContext } from "react";
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

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Layout />
    </div>
  );
};

export default App;
