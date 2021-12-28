import React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SeeAll from './pages/SeeAll'

import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/see-all" element={<SeeAll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
