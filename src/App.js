import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Roster from './Pages/Roster';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roster" element={<Roster />} />
      </Routes>
    </div>
  );
}

export default App;
