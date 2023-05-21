import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Roster from './Pages/Roster';
import Profile from './Pages/Profile';
import './App.scss';
import { Contact } from './Pages/Contact';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/profile/:writer" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
