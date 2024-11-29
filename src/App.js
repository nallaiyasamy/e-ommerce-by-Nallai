
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css'
import Category from './pages/Category';

function App() {
  return (
    <>
    <Router>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:filter" element={<Category />} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
