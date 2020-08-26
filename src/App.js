import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products/>} />
        <Route path='cart' element={<Cart/>} />
      </Routes>
      
    </div>
  );
}

export default App;
