import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Roster from './Pages/Roster';
import Profile from './Pages/Profile';
import { Contact } from './Pages/Contact';
import Navbar from './Components/Navbar';
import { Discography } from './Pages/Discography';
import { About } from './Pages/About';
import { Test } from './Pages/Test';
import { appClassname } from './AppStyles';

function App() {
  return (
    <div className={appClassname}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discography" element={<Discography />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/profile/:writer" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
