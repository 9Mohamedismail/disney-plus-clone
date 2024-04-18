import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="detail" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
