import React, { useEffect, useState } from "react";
import "./App.scss";
import Cubo from "./components/cubo/Cubo";
import Menu from "./components/menu/Menu";
import Flex from "./components/Flex/Flex";
import Contact from "./components/Contacts/Contact";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/flex" element={<Flex />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
