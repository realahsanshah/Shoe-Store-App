import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Header from './components/header.js';
import Home from './components/home.js';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;
