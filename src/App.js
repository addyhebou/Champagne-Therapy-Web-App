import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="order" element={<OrderForm />} />
      </Routes>
    </div>
  );
}

function OrderForm() {
  return <div>OrderForm</div>;
}

export default App;
