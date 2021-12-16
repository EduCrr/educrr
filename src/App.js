import React from "react";
import "./App.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OpenProvider from "./OpenContext";
export default function App() {
  return (
    <OpenProvider>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </OpenProvider>
  );
}
