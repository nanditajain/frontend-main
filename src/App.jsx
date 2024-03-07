import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Explore from "./page/Explore";
import NavBar from "./components/NavBar";
import CreditCard from "./page/CreditCard";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/rewards/credit-card" element={<CreditCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
