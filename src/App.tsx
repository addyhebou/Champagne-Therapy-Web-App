import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Roster from './Pages/Roster';
import Profile from './Pages/Profile';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/profile/:writer" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
