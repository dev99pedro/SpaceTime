import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/components/Home/Home'
import Moon from './components/Destination/PagePlanets/Moon/Moon';
import Destination from './components/Destination/Destination';
import CrewPage from './components/Crew/CrewPage/CrewPage';
import TecnhologyPage from './components/Tecnhology/TecnhologyPage/TecnhologyPage'
import Mars from './components/Destination/PagePlanets/Mars/Mars'
import Europa from './components/Destination/PagePlanets/Europa/Europa';
import Titan from './components/Destination/PagePlanets/Titan/Titan'


function App() {



  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path="/titan" element={<Titan />} />
          <Route path="/europa" element={<Europa />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/moon" element={<Moon />} />
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/tecnhology" element={<TecnhologyPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
