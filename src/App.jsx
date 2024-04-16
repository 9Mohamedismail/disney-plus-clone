import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="detail" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
