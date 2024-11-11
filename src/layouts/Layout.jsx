import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home Page/Home";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <Router>
      <Header />
      <Home />
      <Footer />
    </Router>
  );
};

export default Layout;
